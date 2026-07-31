
                        }
                      }}
                    />
                    }}
                  >
                )}
                >
              })),
            ))}
            {
            },
          );
          ],
          ];
          },
        );
        }
        });
        },
        };
      )}
      }
      },
    );
    }
    }));
    });
    };
  );
  }, []);
  };
}
        alert("Error checking required nodes. Please try again.");
      alert("Please select a upstream node first before adding a subgraph.");
      app.canvas.emitAfterChange();
    app.canvas.emitBeforeChange();
      arrows: {
        arrows: "to",
  avatar,
  avatar: string;
          await WorkflowChatAPI.batchGetNodeInfo(missingNodeTypes);
        background: "#2B7CE9",
          bold: true,
        bold: true,
        border: "#1B5BB1",
        borderWidth: 2,
                </button>
                <button
      } catch (error) {
                    className="fixed -translate-y-full 
                  className="px-3 py-1.5 bg-blue-500 text-white rounded-md 
      color: {
        color: "#000000",
      color: "#000000",
          color: "#FFFFFF",
        color: "#FFFFFF",
          color: "rgba(0,0,0,0.2)",
        console.error("[DownstreamSubgraphs] Error fetching node info:", error);
        console.log(
    console.log(
        console.log("[DownstreamSubgraphs] Created AI message:", aiMessage);
    console.log("[DownstreamSubgraphs] Entry node ID:", entryNodeId);
        console.log("[DownstreamSubgraphs] Fetching info for missing nodes");
    console.log("[DownstreamSubgraphs] Missing node types:", missingNodeTypes);
        console.log("[DownstreamSubgraphs] Received node infos:", nodeInfos);
      console.warn("[DownstreamSubgraphs] No node selected");
        const aiMessage = {
  const checkAndLoadSubgraph = async (node: Subgraph) => {
  const convertToVisFormat = (subgraph: Subgraph) => {
  const createNetwork = useCallback((el: HTMLElement, node: Subgraph) => {
    const entryNodeId = entryNode?.id;
    const entryNode = nodes.find((node) => node.id === 0);
    const handleNodeSelection = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
    const installedNodeTypes = installedNodes;
    const links = node.json.links;
  const loadSubgraphToCanvas = (node: Subgraph, selectedNode: any) => {
        const messageContent = {
    const missingNodeTypes = requiredNodeTypes.filter(
  const networkRef = useRef<Network | null>(null);
    const newNetwork = new Network(el, visData, {
        const nodeInfos =
    const nodeMap = {};
          const nodePosNew = [
  const nodes =
    const nodes = node.json.nodes;
        const origin_node = nodeMap[link["origin_id"]];
          const posEntryNew = [selectedNode._pos[0], selectedNode._pos[1]];
          const posEntryOld = entryNode?.pos;
    const requiredNodeTypes = nodes.map((node) => node.type);
  const response = JSON.parse(content) as ChatResponse;
  const { selectedNode, installedNodes } = state;
    const selectedNode = Object.values(app.canvas.selected_nodes)[0];
      const selectedNodes = app.canvas.selected_nodes;
  const { state, dispatch } = useChatContext();
        const target_node = nodeMap[link["target_id"]];
    const visData = convertToVisFormat(node);
    const visEdges = subgraph.json.links.map((link) => ({
    const visNodes = subgraph.json.nodes.map((node) => ({
  content,
          content: JSON.stringify(messageContent),
  content: string;
// Copyright (C) 2025 AIDC-AI
                          createNetwork(el, node);
      ?.data || [];
              data: nodeInfos.map((info) => ({
          direction: "UD",
        dispatch({
        dispatch({ type: "SET_SELECTED_NODE", payload: null });
                    <div
                  </div>
                  <div
              </div>
          </div>
        </div>
    </div>
          <div className="flex flex-wrap gap-2">
    <div className="rounded-lg bg-gray-500 p-3 text-gray-700 text-xs break-words overflow-visible">
        <div className="space-y-3">
              <div key={node.name} className="relative group">
    document.addEventListener("click", handleNodeSelection);
      document.removeEventListener("click", handleNodeSelection);
      "[DownstreamSubgraphs] All required nodes are installed, proceeding to load subgraph",
          "[DownstreamSubgraphs] Created message content:",
      "[DownstreamSubgraphs] Installed node types:",
}: DownstreamSubgraphsProps) {
      "[DownstreamSubgraphs] Required node types:",
      "[DownstreamSubgraphs] Starting checkAndLoadSubgraph with node:",
        dragNodes: false,
        dragView: false,
      edges: {
      } else {
          enabled: true,
        enabled: true,
export function DownstreamSubgraphs({
          ext: [
          face: "arial",
        face: "arial",
    } finally {
        font: {
      font: {
      for (const link of links) {
      for (const node of nodes) {
          format: "markdown",
      from: link.origin_id,
        hierarchical: {
        hierarchicalRepulsion: {
                                             hover:bg-blue-600 transition-colors text-xs"
                {hoveredNode === node.name && (
          id: generateUUID(),
      id: node.id,
                        if (el) {
    if (entryNodeId !== null) {
    if (missingNodeTypes.length > 0) {
      if (networkRef.current) {
    if (networkRef.current) {
        if (node.id !== entryNodeId) {
      if (Object.keys(selectedNodes ?? {}).length) {
        if (origin_node && target_node) {
    if (!selectedNode) {
import { addNodeOnGraph } from "../../../utils/graphUtils";
import { WorkflowChatAPI } from "../../../apis/workflowChatApi";
import { app } from "../../../utils/comfyapp";
import { ChatResponse, Message, Subgraph } from "../../../types/types";
import { generateUUID } from "../../../utils/uuid";
import { Network } from "vis-network";
import { useChatContext } from "../../../context/ChatContext";
import { useState, useRef, useEffect, useCallback } from "react";
import { WorkflowChatAPI } from "../../apis/workflowChatApi";
      installedNodeTypes,
      interaction: {
interface DownstreamSubgraphsProps {
      label: node.type,
      layout: {
                      left: "calc(var(--mouse-x, 0) + 16px)",
          levelSeparation: 150,
// Licensed under the MIT License.
            link["origin_slot"],
            link["target_slot"],
    loadSubgraphToCanvas(node, selectedNode);
        margin: 12,
      margin: 12,
        maximum: 200,
          messageContent,
          metadata: {
        minimum: 100,
          name: "Assistant",
  name = "Assistant",
                name: info.name,
  name?: string;
        networkRef.current.destroy();
      networkRef.current.destroy();
    networkRef.current = newNetwork;
        networkRef.current = null;
      node,
          nodeDistance: 200,
      nodeMap[entryNodeId] = selectedNode;
          nodeMap[node.id] = addNodeOnGraph(node.type, { pos: nodePosNew });
                  {node.name}
            node.pos[0] + posEntryNew[0] - posEntryOld[0],
            node.pos[1] + posEntryNew[1] - posEntryOld[1],
      nodes: {
      {nodes.length > 0 && (
            {nodes.map((node: Subgraph) => (
          nodeSpacing: 200,
                  [{node.tags.join(", ")}]
  onAddMessage,
        onAddMessage?.(aiMessage);
  onAddMessage?: (message: Message) => void;
                  onClick={() => checkAndLoadSubgraph(node)}
                  onMouseEnter={() => setHoveredNode(node.name)}
                  onMouseLeave={() => setHoveredNode(null)}
          origin_node.connect(
                </p>
        padding: 10,
      padding: 10,
          payload: Object.values(selectedNodes),
                <p className="text-xs ml-3 text-white">
            pendingSubgraph: node,
      physics: {
                      ref={(el) => {
                repository_url: info.github_url,
      requiredNodeTypes,
    response.ext?.find((item) => item.type === "downstream_subgraph_search")
        return;
      return;
    return () => {
  return (
    return { nodes: visNodes, edges: visEdges };
          role: "ai",
                                                 rounded-md shadow-lg mb-2 border border-gray-700"
        shadow: {
        shape: "box",
      shape: "box",
          size: 16,
        size: 16,
          size: 5,
        smooth: {
        solver: "hierarchicalRepulsion",
          sortMethod: "directed",
          springLength: 200,
                    style={{
                      style={{ width: "100%", height: "300px" }}
            target_node,
          text: ``,
        to: { enabled: true, scaleFactor: 1.2 },
      to: link.target_id,
                      top: "calc(var(--mouse-y, 0) - 8px)",
      try {
    try {
      (type) => !installedNodeTypes.includes(type),
              type: "node_install_guide",
          type: "SET_SELECTED_NODE",
          type: "straightCross",
  useEffect(() => {
        width: 2,
      width: 2,
      widthConstraint: {
                                                 z-[9999] w-[500px] p-4 bg-gray-800 text-white text-xs 
        zoomView: false,
          // 保存原始的subgraph信息，用于后续加载
    // 创建其他所有节点
    // 只在组件挂载时添加事件监听
      // 处理所有连接
  // 将 Subgraph 转换为 vis.js 格式的函数
        // 构造消息内容 - 修改为显示按钮列表格式
    // 检查所有节点是否已安装
  // 添加清理函数
