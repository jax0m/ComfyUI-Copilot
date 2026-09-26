'''
Author: ai-business-hql qingli.hql@alibaba-inc.com
Date: 2025-07-24 17:10:23
LastEditors: ai-business-hql ai.bussiness.hql@gmail.com
LastEditTime: 2025-11-24 20:56:38
FilePath: /comfyui_copilot/backend/service/workflow_rewrite_agent.py
Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
'''
from agents.agent import Agent
from agents.tool import function_tool
import json
import time
import uuid
import os
from typing import Dict, Any

from ..utils.key_utils import workflow_config_adapt

from ..dao.expert_table import list_rewrite_experts_short, get_rewrite_expert_by_name_list

from ..agent_factory import create_agent
from ..utils.globals import WORKFLOW_MODEL_NAME, get_language
from ..utils.i18n import get_string
from ..utils.request_context import get_config, get_session_id

from ..service.workflow_rewrite_tools import *


@function_tool
def get_rewrite_expert_by_name(name_list: list[str]) -> str:
    """根据经验名称来获取工作流改写专家经验"""
    result = get_rewrite_expert_by_name_list(name_list)
    temp = json.dumps(result, ensure_ascii=False)
    log.info(f"get_rewrite_expert_by_name, name_list: {name_list}, result: {temp}")
    get_rewrite_context().rewrite_expert += temp
    return temp

def get_rewrite_export_schema() -> dict:
    """获取工作流改写专家经验schema"""
    return list_rewrite_experts_short()


def create_workflow_rewrite_agent():
    """创建workflow_rewrite_agent实例"""
    
    language = get_language()
    session_id = get_session_id() or "unknown_session"
    config = get_config()
    config = workflow_config_adapt(config)

    rewrite_instructions_template = get_string("instructions.workflow_rewrite_agent_instructions")
    rewrite_instructions = rewrite_instructions_template.format(
        language=language,
        rewrite_export_schema=json.dumps(get_rewrite_export_schema())
    )

    return create_agent(
        name=get_string("instructions.workflow_rewrite_agent_name"),
        model=WORKFLOW_MODEL_NAME,
        handoff_description=get_string("instructions.workflow_rewrite_agent_handoff_description"),
        instructions=rewrite_instructions,
        tools=[get_rewrite_expert_by_name, get_current_workflow, search_node_local, get_node_infos, update_workflow, remove_node],
        config={
            "max_tokens": 8192,
            ** config
        }
    )

# 注意：工作流改写代理现在需要在有session context的环境中创建
# workflow_rewrite_agent = create_workflow_rewrite_agent()  # 不再创建默认实例

