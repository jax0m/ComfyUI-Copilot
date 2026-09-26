'''
Debug Agent for ComfyUI Workflow Error Analysis
'''
from ..utils.key_utils import workflow_config_adapt
from ..agent_factory import create_agent
from agents.items import ItemHelpers
from agents.run import Runner
from ..utils.globals import WORKFLOW_MODEL_NAME, get_language
from ..utils.i18n import get_string
from ..service.workflow_rewrite_tools import *
from openai.types.responses import ResponseTextDeltaEvent

from ..service.parameter_tools import *
from ..service.link_agent_tools import *
from ..dao.workflow_table import get_workflow_data, save_workflow_data
from ..utils.request_context import get_session_id, get_config

# Import ComfyUI internal modules
import uuid
from ..utils.logger import log
# Load environment variables from server.env


@function_tool
async def run_workflow() -> str:
    """验证当前session的工作流并返回结果"""
    try:
        session_id = get_session_id()
        if not session_id:
            return json.dumps({"error": "No session_id found in context"})
            
        workflow_data = get_workflow_data(session_id)
        if not workflow_data:
            return json.dumps({"error": "No workflow data found for this session"})
        
        log.info(f"Run workflow for session {session_id}")
        
        # 使用 ComfyGateway 调用 server.py 的 post_prompt 逻辑
        from ..utils.comfy_gateway import ComfyGateway
        
        # 简化方法：直接使用 requests 同步调用
        gateway = ComfyGateway()

        # 准备请求数据格式（与server.py post_prompt接口一致）
        request_data = {
            "prompt": workflow_data,
            "client_id": f"debug_agent_{session_id}"
        }
        
        result = await gateway.run_prompt(request_data)
        log.info(result)
        
        return json.dumps(result)
        
    except Exception as e:
        return json.dumps({"error": f"Failed to run workflow: {str(e)}"})


@function_tool
def analyze_error_type(error_data: str) -> str:
    """分析错误类型，判断应该使用哪个agent，输入可以是JSON字符串或普通文本"""
    try:
        error_analysis = {
            "error_type": "unknown",
            "recommended_agent": "workflow_bugfix_default_agent",
            "error_details": [],
            "affected_nodes": []
        }
        
        # 将输入转换为字符串进行关键词匹配
        error_text = str(error_data).lower()
        
        # 检查成功状态
        if any(keyword in error_text for keyword in [
            '"success": true', "'success': true", "validation successful", "workflow validation successful"
        ]):
            error_analysis["error_type"] = "no_error"
            error_analysis["recommended_agent"] = "none"
            error_analysis["error_details"] = [{"message": "Workflow validation successful"}]
            return json.dumps(error_analysis)
        
        # 统计不同类型的错误
        parameter_errors = 0
        connection_errors = 0
        other_errors = 0
        
        # 提取节点ID（简单的正则匹配）
        import re
        node_id_matches = re.findall(r'"(\d+)":', error_text) or re.findall(r"'(\d+)':", error_text)
        if node_id_matches:
            error_analysis["affected_nodes"] = list(set(node_id_matches))
        
        # 连接相关错误的关键词（优先判断，因为结构性错误更重要）
        connection_keywords = [
            "connection", "input connection", "required input", "missing input",
            "not connected", "no connection", "link", "output", "socket",
            "missing_input", "invalid_connection", "connection_error"
        ]
        
        # 参数相关错误的关键词
        parameter_keywords = [
            "value not in list", "invalid value", "not found in list",
            "parameter value", "invalid parameter", "model not found", 
            "invalid image file", "value_not_in_list", "invalid_input"
        ]
        
        # 计算错误类型出现次数
        for keyword in connection_keywords:
            if keyword in error_text:
                connection_errors += error_text.count(keyword)
        
        for keyword in parameter_keywords:
            if keyword in error_text:
                parameter_errors += error_text.count(keyword)
        
        # 如果没有匹配到特定错误类型，检查是否有一般性错误指示
        if connection_errors == 0 and parameter_errors == 0:
            general_error_keywords = ["error", "failed", "exception", "invalid"]
            for keyword in general_error_keywords:
                if keyword in error_text:
                    other_errors += 1
                    break
        
        # 根据错误类型决定使用哪个agent
        if connection_errors > 0 and parameter_errors == 0 and other_errors == 0:
            # 纯连接错误，使用专门的link_agent
            error_analysis["error_type"] = "connection_error"
            error_analysis["recommended_agent"] = "link_agent"
        elif connection_errors > 0:
            # 混合错误，优先处理连接问题
            error_analysis["error_type"] = "mixed_connection_error"
            error_analysis["recommended_agent"] = "link_agent"
        elif parameter_errors > 0:
            error_analysis["error_type"] = "parameter_error"
            error_analysis["recommended_agent"] = "parameter_agent"
        elif other_errors > 0:
            error_analysis["error_type"] = "structural_error"
            error_analysis["recommended_agent"] = "workflow_bugfix_default_agent"
        else:
            # 没有检测到明确的错误模式，使用默认agent
            error_analysis["error_type"] = "unknown"
            error_analysis["recommended_agent"] = "workflow_bugfix_default_agent"
        
        # 添加错误详情（基于文本内容）
        if connection_errors > 0:
            error_analysis["error_details"].append({
                "error_type": "connection_error",
                "message": f"Detected {connection_errors} connection-related issues",
                "details": "Connection or input/output related errors found"
            })
        
        if parameter_errors > 0:
            error_analysis["error_details"].append({
                "error_type": "parameter_error", 
                "message": f"Detected {parameter_errors} parameter-related issues",
                "details": "Parameter value or configuration related errors found"
            })
        
        return json.dumps(error_analysis)
        
    except Exception as e:
        return json.dumps({
            "error_type": "analysis_failed",
            "recommended_agent": "workflow_bugfix_default_agent",
            "error": f"Failed to analyze error: {str(e)}"
        })

@function_tool
def save_current_workflow(workflow_data: str) -> str:
    """保存当前工作流数据到数据库，workflow_data应为JSON字符串"""
    try:
        session_id = get_session_id()
        if not session_id:
            return json.dumps({"error": "No session_id found in context"})
            
        # 解析JSON字符串
        workflow_dict = json.loads(workflow_data) if isinstance(workflow_data, str) else workflow_data
        
        version_id = save_workflow_data(
            session_id, 
            workflow_dict, 
            attributes={"action": "debug_save", "description": "Workflow saved during debugging"}
        )
        return json.dumps({
            "success": True,
            "version_id": version_id,
            "message": f"Workflow saved with version ID: {version_id}"
        })
    except Exception as e:
        return json.dumps({"error": f"Failed to save workflow: {str(e)}"})


async def debug_workflow_errors(workflow_data: Dict[str, Any]):
    """
    Analyze and debug workflow errors using multi-agent architecture.
    
    This function validates ComfyUI workflows using internal functions instead of HTTP requests
    to avoid blocking issues. It coordinates with specialized agents to fix different types of errors.
    
    Args:
        workflow_data: Current workflow data from app.graphToPrompt()
        
    Yields:
        tuple: (text, ext) where text is accumulated text and ext is structured data
    """
    try:
        # Get session_id and config from request context
        session_id = get_session_id()
        config = get_config()
        config = workflow_config_adapt(config)
        
        if not session_id:
            session_id = str(uuid.uuid4())  # Fallback if no context
        
        # 1. 保存工作流数据到数据库
        log.info(f"Saving workflow data for session {session_id}")
        save_result = save_workflow_data(
            session_id, 
            workflow_data, 
            attributes={"action": "debug_start", "description": "Initial workflow save for debugging"}
        )
        log.info(f"Workflow saved with version ID: {save_result}")
        
        debug_instructions_template = get_string("instructions.debug_coordinator_instructions")
        debug_instructions = debug_instructions_template.format(language=get_language())

        agent = create_agent(
            name=get_string("instructions.debug_coordinator_name"),
            instructions=debug_instructions,
            model=WORKFLOW_MODEL_NAME,
            tools=[run_workflow, analyze_error_type, save_current_workflow],
            config={
                "max_tokens": 8192,
                **config
            }
        )
        
        workflow_bugfix_default_agent = create_agent(
            name=get_string("instructions.workflow_bugfix_agent_name"),
            model=WORKFLOW_MODEL_NAME,
            handoff_description=get_string("instructions.workflow_bugfix_agent_handoff_description"),
            instructions=get_string("instructions.workflow_bugfix_agent_instructions"),
            tools=[get_current_workflow, get_node_info, update_workflow],
            handoffs=[agent],
            config={
                "max_tokens": 8192,
                **config
            }
        )
        
        link_agent = create_agent(
            name=get_string("instructions.link_agent_name"),
            model=WORKFLOW_MODEL_NAME,
            handoff_description=get_string("instructions.link_agent_handoff_description"),
            instructions=get_string("instructions.link_agent_instructions"),
            tools=[analyze_missing_connections, apply_connection_fixes,
                   get_current_workflow, get_node_info],
            handoffs=[agent],
            config={
                "max_tokens": 8192,
                **config
            }
        )

        parameter_agent = create_agent(
            name=get_string("instructions.parameter_agent_name"),
            model=WORKFLOW_MODEL_NAME,
            handoff_description=get_string("instructions.parameter_agent_handoff_description"),
            instructions=get_string("instructions.parameter_agent_instructions"),
            tools=[find_matching_parameter_value, get_model_files, 
                suggest_model_download, update_workflow_parameter, get_current_workflow],
            handoffs=[agent],
            config={
                "max_tokens": 8192,
                **config
            }
        )

        agent.handoffs = [link_agent, workflow_bugfix_default_agent, parameter_agent]

        # Initial message to start the debugging process
        messages = [{"role": "user", "content": f"Validate and debug this ComfyUI workflow."}]
            
        log.info(f"-- Starting workflow validation process for session {session_id}")

        result = Runner.run_streamed(
            agent,
            input=messages,
            max_turns=30,
        )
        log.info("=== Debug Coordinator starting ===")
        
        # Variables to track response state similar to mcp-client
        current_text = ''
        current_agent = "ComfyUI-Debug-Coordinator"
        last_yielded_length = 0
        
        # Collect debug events for final ext data
        debug_events = []
        
        # Collect workflow update ext data from tools
        workflow_update_ext = None
        
        async for event in result.stream_events():
            # Handle different event types according to OpenAI Agents documentation
            if event.type == "raw_response_event" and isinstance(event.data, ResponseTextDeltaEvent):
                # Stream text deltas for real-time response
                delta_text = event.data.delta
                if delta_text:
                    current_text += delta_text
                    # Only yield text updates during streaming, similar to mcp-client
                    if len(current_text) > last_yielded_length:
                        last_yielded_length = len(current_text)
                        yield (current_text, None)
                
            elif event.type == "agent_updated_stream_event":
                new_agent_name = event.new_agent.name
                log.info(f"Handoff to: {new_agent_name}")
                current_agent = new_agent_name
                # Add handoff information to the stream
                if not current_text or current_text == '': 
                    handoff_text = f"▸ **Switching to {new_agent_name}**\n\n"
                else:
                    handoff_text = f"\n\n▸ **Switching to {new_agent_name}**\n\n"
                current_text += handoff_text
                last_yielded_length = len(current_text)
                
                # Collect debug event data
                debug_events.append({
                    "type": "agent_handoff",
                    "current_agent": current_agent,
                    "to_agent": new_agent_name,
                    "timestamp": len(current_text)
                })
                
                # Yield text update only
                yield (current_text, None)
                
            elif event.type == "run_item_stream_event":
                item_updated = False
                
                if event.item.type == "tool_call_item":
                    # Tool call started
                    tool_name = getattr(event.item.raw_item, 'name', 'unknown_tool')
                    
                    log.info(f"-- Tool called: {tool_name}")
                    # Add tool call information
                    tool_text = f"\n\n⚙ *{current_agent} is using {tool_name}...*\n\n"
                    current_text += tool_text
                    item_updated = True
                    
                    # Collect debug event data
                    debug_events.append({
                        "type": "tool_call",
                        "tool": tool_name,
                        "agent": current_agent,
                        "timestamp": len(current_text)
                    })
                    
                elif event.item.type == "tool_call_output_item":
                    # Tool call result
                    output = str(event.item.output)
                    # Limit output length to avoid too long display
                    output_preview = output[:200] + "..." if len(output) > 200 else output
                    tool_result_text = f"\n\n● *Tool execution completed*\n\n```\n{output_preview}\n```\n\n"
                    current_text += tool_result_text
                    item_updated = True
                    
                    # Try to parse tool output and extract ext data
                    try:
                        tool_output_json = json.loads(output)
                        if "ext" in tool_output_json and tool_output_json["ext"]:
                            for ext_item in tool_output_json["ext"]:
                                if ext_item.get("type") == "workflow_update" or ext_item.get("type") == "param_update":
                                    workflow_update_ext = ext_item
                                    log.info(f"-- Captured {ext_item.get('type')} ext from tool output, yielding immediately")
                                    
                                    # 立即yield workflow_update或param_update，让前端实时更新工作流
                                    ext_with_finished = {
                                        "data": [ext_item],
                                        "finished": False  # 标记为未完成，继续debug流程
                                    }
                                    yield (current_text, ext_with_finished)
                                    break
                    except (json.JSONDecodeError, TypeError):
                        # Tool output is not JSON, continue normally
                        pass
                    
                    # Collect debug event data
                    debug_events.append({
                        "type": "tool_result",
                        "output_preview": output_preview,
                        "agent": current_agent,
                        "timestamp": len(current_text)
                    })
                    
                elif event.item.type == "message_output_item":
                    # Message output completed
                    try:
                        message_content = ItemHelpers.text_message_output(event.item)
                        if message_content and message_content.strip():
                            # Avoid adding duplicate message content
                            if message_content not in current_text:
                                current_text += f"\n\n{message_content}\n\n"
                                item_updated = True
                                
                                # Collect debug event data
                                debug_events.append({
                                    "type": "message_complete",
                                    "content_length": len(message_content),
                                    "agent": current_agent,
                                    "timestamp": len(current_text)
                                })
                    except Exception as e:
                        log.error(f"Error processing message output: {str(e)}")
                
                # Update yielded length and yield text updates only
                if item_updated:
                    last_yielded_length = len(current_text)
                    yield (current_text, None)

        log.info("\n=== Debug process complete ===")
        
        # Save final workflow checkpoint after debugging completion
        debug_completion_checkpoint_id = None
        try:
            current_workflow = get_workflow_data(session_id)
            if current_workflow:
                debug_completion_checkpoint_id = save_workflow_data(
                    session_id, 
                    current_workflow,
                    workflow_data_ui=None,  # UI format not available here
                    attributes={
                        "checkpoint_type": "debug_complete",
                        "description": "Workflow state after debug completion",
                        "action": "debug_complete",
                        "final_agent": current_agent
                    }
                )
                log.info(f"Debug completion checkpoint saved with ID: {debug_completion_checkpoint_id}")
        except Exception as checkpoint_error:
            log.error(f"Failed to save debug completion checkpoint: {checkpoint_error}")
        
        # Final yield with complete text and debug ext data, matching mcp-client format
        debug_ext = [{
            "type": "debug_complete",
            "data": {
                "status": "completed",
                "final_agent": current_agent,
                "events": debug_events,
                "total_events": len(debug_events)
            }
        }]
        
        # Add debug checkpoint info if successful
        if debug_completion_checkpoint_id:
            debug_ext.append({
                "type": "debug_checkpoint",
                "data": {
                    "checkpoint_id": debug_completion_checkpoint_id,
                    "checkpoint_type": "debug_complete"
                }
            })
        
        # Include workflow_update ext if captured from tools
        final_ext = debug_ext
        if workflow_update_ext:
            final_ext = [workflow_update_ext] + debug_ext
            log.info(f"-- Including workflow_update ext in final response")
        
        # Return format matching mcp-client: {"data": ext, "finished": finished}
        ext_with_finished = {
            "data": final_ext,
            "finished": True
        }
        yield (current_text, ext_with_finished)
            
    except Exception as e:
        log.error(f"Error in debug_workflow_errors: {str(e)}")
        error_message = f"\n\n× Error occurred during debugging: {str(e)}\n\n"

        ext_with_finished = {
            "finished": True
        }
        yield (error_message, ext_with_finished)


# Test function
async def test_debug():
    """Test the debug agent with a sample workflow"""
    test_workflow_data = {
        "1": {
            "inputs": {
                "vae_name": "ae.sft"  # This will likely cause an error
            },
            "class_type": "VAELoader",
            "_meta": {"title": "Load VAE"}
        },
        "2": {
            "inputs": {
                "ckpt_name": "sd_xl_base_1.0.safetensors"
            },
            "class_type": "CheckpointLoaderSimple",
            "_meta": {"title": "Load Checkpoint"}
        }
    }
    
    config = {
        "session_id": "test_session_123",
        "model": WORKFLOW_MODEL_NAME,
        "max_tokens": 8192
    }
    
    async for text, ext in debug_workflow_errors(test_workflow_data, config):
        log.info(f"Stream output: {text[-100:] if len(text) > 100 else text}")  # Print last 100 chars
        if ext:
            log.info(f"Ext data: {ext}")


if __name__ == "__main__":
    import asyncio
    asyncio.run(test_debug())
