
                    />
                  >
                  })),
                {
                }
                },
              >
              ],
              },
              }}
            );
            )}
            />
            >
            }));
            };
            }}
          ) : (
          )}
          />
          }
        );
        )}
        >
        }
      );
      )}
      >
      }
      }));
      }),
    );
    }
    }));
    };
  );
  >({});
  };
}
    // Add success message
            // alert('Error checking required nodes. Please try again.');
      alert("Failed to optimize workflow. Please try again.");
              alt={workflow.name}
            alt={workflow.name}
    app.graph.setDirtyCanvas(false, true);
      app.loadApiJson(workflow);
      app.loadGraphData(workflow);
                arrow={false}
  avatar,
  avatar: string;
              await WorkflowChatAPI.batchGetNodeInfo(missingNodeTypes);
    // </BaseMessage>
    // <BaseMessage avatar={avatar} name={name}>
                  : "bg-blue-500 hover:bg-blue-600"
              ? "bg-[#d2d2d2] cursor-not-allowed"
              : "bg-[#ffffff] hover:bg-[#eee]"
                  ? "bg-gray-400 cursor-not-allowed"
            </button>
            <button
        </button>
        <button
          } catch (error) {
    } catch (error) {
        className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:bg-gray-50"
              className={`px-3 py-1.5 ${
        className={`relative flex flex-col items-center gap-4 p-2 rounded-lg border ${isAIGenerated ? "shadow-[0_0_12px_2px_#3b82f6] shadow-[0_0_0_4px_rgba(59,130,246,0.15)]" : "border-gray-200"} hover:bg-gray-50`}
            className="w-14 h-14 object-cover rounded-lg"
                    className="w-4 h-4"
              className="w-full h-full object-cover"
          className={`w-full px-3 py-1 ${
      console.error("Failed to optimize workflow:", error);
      console.error("No workflow id provided");
            console.error("[WorkflowOption] Error fetching node info:", error);
            console.log("[WorkflowOption] Fetching info for missing nodes");
        console.log("[WorkflowOption] Missing node types:", missingNodeTypes);
            console.log("[WorkflowOption] Received node infos:", nodeInfos);
            const aiMessage = {
      const align = 60;
      const align_y = 50;
      const base_size_x = 250;
      const base_size_y = 60;
      const base_x = firstNode ? firstNode.pos[0] : 0;
      const base_y = firstNode ? firstNode.pos[1] : 0;
      const firstNode = app.graph._nodes_by_id[firstNodeId];
      const firstNodeId = Object.keys(app.graph._nodes_by_id)[0];
  const handleAcceptWorkflow = async (workflow: Workflow) => {
          const inputCount = node.inputs ? node.inputs.length : 0;
    const isAIGenerated = workflow?.source === "AI Generated";
  const [loadingWorkflows, setLoadingWorkflows] = useState<
  const loadWorkflowItemV2 = (workflow: Workflow, index: number) => {
  const loadWorkflowItem = (workflow: Workflow, index: number) => {
  const loadWorkflow = (workflow: any, optimizedParams: any[]) => {
      const max_size_y = 1000;
            const messageContent = {
        const missingNodeTypes = Array.from(nodeTypes).filter(
        const node = app.graph._nodes_by_id[node_id];
      const node_ids = Object.keys(workflow);
            const nodeInfos =
        const nodeTypes = new Set<string>();
      const optimizedResult = await WorkflowChatAPI.getOptimizedWorkflow(
          const outputCount = node.outputs ? node.outputs.length : 0;
          const param_count = Math.max(inputCount, outputCount) + widgetCount;
      const param_y = 20;
    const _response = JSON.parse(content) as ChatResponse;
  // const response = JSON.parse(content) as ChatResponse;
  const [response, setResponse] = useState<ChatResponse | null>(null);
          const size_y = param_y * param_count + base_size_y;
    const successMessage = {
                const target = e.target as HTMLImageElement;
              const target = e.target as HTMLImageElement;
          const widgetCount = node.widgets ? node.widgets.length : 0;
      const widgets = app.graph._nodes_by_id[nodeId].widgets;
    const workflowId = String(workflow.id);
    const workflowId = workflow.id ? String(workflow.id) : "";
  // const workflows = response.ext?.find(item => item.type === 'workflow')?.data || [];
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  }, [content]);
  content,
      content: JSON.stringify({
              content: JSON.stringify(messageContent),
  content: string;
                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56' fill='none'%3E%3Crect width='56' height='56' fill='%23F3F4F6'/%3E%3Cpath d='M28 28C30.2091 28 32 26.2091 32 24C32 21.7909 30.2091 20 28 20C25.7909 20 24 21.7909 24 24C24 26.2091 25.7909 28 28 28Z' fill='%239CA3AF'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.7253 37.6307C19.8278 35.1533 22.6897 33.6 26 33.6H30C33.3103 33.6 36.1722 35.1533 37.2747 37.6307C37.6419 38.4561 37.0611 39.2 36.1694 39.2H19.8306C18.9389 39.2 18.3581 38.4561 18.7253 37.6307Z' fill='%239CA3AF'/%3E%3C/svg%3E";
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56' fill='none'%3E%3Crect width='56' height='56' fill='%23F3F4F6'/%3E%3Cpath d='M28 28C30.2091 28 32 26.2091 32 24C32 21.7909 30.2091 20 28 20C25.7909 20 24 21.7909 24 24C24 26.2091 25.7909 28 28 28Z' fill='%239CA3AF'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.7253 37.6307C19.8278 35.1533 22.6897 33.6 26 33.6H30C33.3103 33.6 36.1722 35.1533 37.2747 37.6307C37.6419 38.4561 37.0611 39.2 36.1694 39.2H19.8306C18.9389 39.2 18.3581 38.4561 18.7253 37.6307Z' fill='%239CA3AF'/%3E%3C/svg%3E";
                  data: nodeInfos.map((info: NodeInfo) => ({
              disabled={loadingWorkflows[workflowId]}
          disabled={loadingWorkflows[workflowId]}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
        </div>
      </div>
      <div
    </div>
                <div className="absolute bottom-full left-0 mb-2 hidden group-hover:!block">
          <div className="absolute left-1/2 top-[-12px] -translate-x-1/2 rounded-lg flex bg-white">
        <div className="aspect-[3/4] rounded-lg overflow-hidden flex-1 w-full">
                  <div className="bg-gray-900 text-white text-xs rounded-md py-2 px-3 min-w-[400px] whitespace-normal break-words">
        <div className="flex-1 break-words flex flex-col h-[4.5rem] justify-between">
        <div className="flex flex-row">
          <div className="flex items-start">
          <div className="flex justify-between items-center mt-1">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-4">
              <div className="relative group">
    <div className="space-y-3 flex justify-center">
                <div className="w-5 h-5 flex items-center justify-center text-gray-500 cursor-help">
            <div className="w-full h-full flex items-center justify-center">
                  d="M0.003166 0v1024h1024V0H0.003166z m962.692789 61.286783v566.902743l-120.857537-118.426494-186.638683 137.466255-287.435012-237.138993L61.28995 705.410873V61.286783h901.406005zM61.28995 962.692788v-172.195431l309.661685-298.34406 282.164349 232.746773 183.104479-134.89221 126.49592 123.962734v248.722194H61.28995z"
                d="M633.12 718.464h-95.392l-34.368-95.68h-160.288l-34.336 95.68H213.344l154.56-419.808h110.656l154.56 419.808z m-209.888-333.888l-61.056 177.696h120.192l-59.136-177.696z"
                d="M682.656 298.656m0 0l85.344 0q0 0 0 0l0 426.656q0 0 0 0l-85.344 0q0 0 0 0l0-426.656q0 0 0 0Z"
                  d="M757.03794 397.199641h0.960159c63.411392 0 118.263062-53.605506 119.733945-117.057756 1.470883-63.901686-51.337895-119.958663-115.321296-122.410134l-4.330933-0.081716c-31.011112 0-61.817935 13.1358-84.555332 36.016199-22.635252 22.819112-35.505476 53.666793-35.301187 84.616619 0.490294 63.942544 54.892529 118.406065 118.814644 118.916788z m-39.999841-160.346653a59.570753 59.570753 0 0 1 42.900748-17.875312h0.143003c30.214384 1.164449 57.098853 29.621945 56.38384 59.734184-0.694584 30.47996-28.00806 57.200998-58.447162 57.200998v30.643391l-0.449436-30.643391c-30.132668-0.245147-57.773007-27.926344-57.997726-58.079442-0.122574-14.749686 6.230823-29.683232 17.466733-40.980428z"
                d="M938.656 256A170.656 170.656 0 0 0 768 85.344H256A170.656 170.656 0 0 0 85.344 256v512A170.656 170.656 0 0 0 256 938.656h512A170.656 170.656 0 0 0 938.656 768V256zM256 170.656h512l6.368 0.256A85.344 85.344 0 0 1 853.312 256v512l-0.224 6.4A85.344 85.344 0 0 1 768 853.312H256l-6.336-0.256A85.344 85.344 0 0 1 170.656 768V256l0.224-6.368A85.344 85.344 0 0 1 256 170.656z"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
        } else {
    } else {
export function WorkflowOption({
              ext: [
        ext: [],
                fill="#1296db"
                  fill="#8a8a8a"
                    fill="none"
          } finally {
    } finally {
    for (const [
      for (const node_id of node_ids) {
          for (const node of Object.values(optimizedResult.workflow)) {
          for (const node of optimizedResult.workflow.nodes) {
      for (const widget of widgets) {
              format: "markdown",
      format: "markdown",
  github_url: string;
            </h3>
          </h3>
          <h3 className="flex-1 font-medium text-sm line-clamp-2 break-all h-10 overflow-hidden">
            <h3 className="font-medium text-sm line-clamp-2 h-10 overflow-hidden">
              height="24"
                height="98"
              id: generateUUID(),
      id: generateUUID(),
    if (loadingWorkflows[workflowId]) {
        if (missingNodeTypes.length > 0) {
        if (node) {
      if (optimizedResult.workflow) {
        if (optimizedResult.workflow.nodes) {
          if (tool_size_y > max_size_y) {
        if (widget.name === paramName) {
    if (!workflow.id) {
    if (workflow.nodes) {
            <img
          <img
import { WorkflowChatAPI } from "../../../apis/workflowChatApi";
import { app } from "../../../utils/comfyapp";
import { ChatResponse, Workflow } from "../../../types/types";
import { generateUUID } from "../../../utils/uuid";
import { Tooltip } from "antd";
import { useEffect, useState } from "react";
import { WorkflowChatAPI } from "../../apis/workflowChatApi";
  installedNodes,
  installedNodes: any[];
interface NodeInfo {
interface WorkflowOptionProps {
        {isAIGenerated && (
        key={index}
  [key: string]: any;
            last_start_x += base_size_x + align;
            last_start_y = base_y;
          last_start_y += size_y + align_y;
        latestInput,
  latestInput,
  latestInput: string;
      let last_start_x = base_x;
      let last_start_y = base_y;
      let tool_size_y = 0;
                loadingWorkflows[workflowId]
            loadingWorkflows[workflowId]
              {loadingWorkflows[workflowId] ? "Loading..." : "Accept"}
          {loadingWorkflows[workflowId] ? "Loading..." : "Accept"}
            loadWorkflow(
        loadWorkflow(
            loadWorkflowItemV2(workflow, index),
              metadata: {
              name: "Assistant",
      name: "Assistant",
  name = "Assistant",
                    name: info.name,
  name: string;
  name?: string;
      nodeId,
      nodeName,
          node.pos[0] = last_start_x;
          node.pos[1] = last_start_y;
          node.size[0] = base_size_x;
          node.size[1] = size_y;
            nodeTypes.add((node as any).class_type);
            nodeTypes.add(node.type);
    ] of optimizedParams) {
  onAddMessage,
            onAddMessage?.(aiMessage);
  onAddMessage?: (message: any) => void;
    onAddMessage?.(successMessage);
              onClick={() => handleAcceptWorkflow(workflow)}
          onClick={() => handleAcceptWorkflow(workflow)}
              onError={(e) => {
            onError={(e) => {
                optimizedParams: optimizedResult.optimized_params,
              optimizedResult.optimized_params,
          optimizedResult.optimized_params,
              optimizedResult.workflow,
          optimizedResult.workflow,
      paramIndex,
      paramName,
                    <path
                <path
                ></path>
              <path
              ></path>
                pendingWorkflow: optimizedResult.workflow,
                p-id="1875"
                  p-id="1876"
                  p-id="1877"
              p-id="25237"
                p-id="25238"
                p-id="25239"
                p-id="25240"
                placement="top"
              ...prev,
        ...prev,
      ...prev,
    Record<string, boolean>
                    repository_url: info.github_url,
      _response.ext?.find((item) => item.type === "workflow")?.data || [],
          return;
      return;
    return (
  return (
              role: "ai",
      role: "tool",
            setLoadingWorkflows((prev) => ({
      setLoadingWorkflows((prev) => ({
    setLoadingWorkflows((prev) => ({
    setResponse(_response);
    setWorkflows(
              src={workflow.image}
            src={workflow.image}
                    stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    strokeWidth={1.5}
                  </svg>
                  <svg
              </svg>
              <svg
            </svg>
            <svg
                target.onerror = null; // 防止循环触发
              target.onerror = null; // 防止循环触发
                target.src =
              target.src =
              text: ``,
          } text-black rounded-lg text-xs`}
        text: "The workflow has been successfully loaded to the canvas",
              } text-white rounded-md transition-colors text-xs`}
                title={
            tool_size_y = 0;
          tool_size_y += size_y + align_y;
              </Tooltip>
              <Tooltip
          try {
    try {
          (type) => !installedNodes.includes(type),
                  type: "node_install_guide",
  useEffect(() => {
      value,
                version="1.1"
              version="1.1"
              viewBox="0 0 1024 1024"
                viewBox="0 0 1026 1024"
                    viewBox="0 0 24 24"
          widget.value = value;
              width="24"
                width="98"
                    {workflow.description}
            {workflow.description && (
        workflow.id,
              [workflowId]: false,
        [workflowId]: false,
      [workflowId]: true,
          {!!workflow.image ? (
        {workflow.image && (
              {workflow.name}
            {workflow.name}
}: WorkflowOptionProps) {
      {workflows.length > 0 && (
          {workflows.map((workflow: Workflow, index: number) =>
                    xmlns="http://www.w3.org/2000/svg"
                xmlns="http://www.w3.org/2000/svg"
              xmlns="http://www.w3.org/2000/svg"
      // 加载优化后的工作流
        // 如果所有节点都已安装，直接加载工作流
    // 将workflow.id转换为字符串，确保可以作为对象的键
      // 布局参数
    // 应用优化后的参数 [节点id，节点名称，参数id，参数名称，参数默认值]
            // 无论成功或失败，重置加载状态
      // 无论成功或失败，重置加载状态
          // 根据参数计算节点的高度
        // 检查是否需要安装节点
          // 检查是否需要换列
            // 没法引导下载节点，直接加载工作流吧
      // 获取优化后的工作流
      // 获取所有节点，并且优化排布
      // 获取第一个节点作为基准位置
    // 设置当前工作流为加载状态
          // 设置节点大小和位置
    // 防止重复点击
