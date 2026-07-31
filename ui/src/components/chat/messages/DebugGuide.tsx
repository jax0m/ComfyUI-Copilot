
                }}
              !(
              ),
              />
            }),
            },
            }`}
          );
          )}
          >
          }
          });
          };
        );
        }
        }),
      )) {
      }
      }),
      });
      };
    ) {
    );
    }
    };
  );
  };
}
        abortControllerRef.current = new AbortController();
      abortControllerRef.current = null;
        abortControllerRef?.current?.signal || undefined,
          accumulatedText = result.text;
          // Add new checkpoint data
  avatar,
  avatar: string;
      await handleQueueError(messageId);
      await saveCheckpointBeforeDebug();
    </BaseMessage>
    <BaseMessage name={name}>
          </button>
          <button
    } catch (error) {
    } catch (error: unknown) {
          {!!checkpointId && (
              checkpoint_id: checkpointData.version_id,
                checkpointId={checkpointId}
              checkpoint_type: "debug_start",
            className={`debug-btn bg-debug-btn text-sm text-[#fff] rounded-lg px-4 py-2 ${
      console.error("Error calling debug agent:", error);
      console.error("Failed to parse message content:", error);
      console.error("Failed to save checkpoint before debug:", error);
        console.log(
                  console.log("Workflow restored from checkpoint");
        const checkpointData = await WorkflowChatAPI.saveWorkflowCheckpoint(
  const checkpointId = persistedCheckpointId || localCheckpointId;
    const debugStartCheckpoint = response.ext.find(
  const { dispatch, abortControllerRef } = useChatContext();
      const errorMessage = {
      const errorObj = error as any;
          const filteredExt = updatedExt.filter(
  const handleDebugClick = async () => {
  const handleQueueError = async (messageId: string) => {
  const [isDebugging, setIsDebugging] = useState(false);
  const [localCheckpointId, setLocalCheckpointId] = useState<number | null>(
          const message = {
    const message = {
    const messageId = generateUUID();
  const persistedCheckpointId = useMemo(() => {
      const prompt = await app.graphToPrompt();
  const response = useMemo(() => {
  const saveCheckpointBeforeDebug = async () => {
      const sessionId = localStorage.getItem("sessionId") || "";
  const [showStreamingMessage, setShowStreamingMessage] = useState(false);
  const [streamingText, setStreamingText] = useState("");
          const updatedExt = [...(response.ext || [])];
          const updatedMessage = {
  }, [content]);
  content,
            content: JSON.stringify({
        content: JSON.stringify({
      content: JSON.stringify({
  content: string;
      // Continue with debug even if checkpoint save fails
            data: {
}: DebugGuideProps) {
            debugGuide: true,
        debugGuide: true,
      debugGuide: true,
          "debug_start",
      debugStartCheckpoint &&
      debugStartCheckpoint.data &&
      debugStartCheckpoint.data.checkpoint_id
            disabled={isDebugging}
      dispatch({ type: "SET_LOADING", payload: false });
      dispatch({ type: "SET_LOADING", payload: true });
            </div>
        </div>
      </div>
      <div className="bg-gray-100 pt-4 px-4 pb-3 rounded-lg">
        <div className="flex justify-between items-start">
        <div className="flex justify-end mt-2">
        <div className="flex justify-end mt-4">
            <div className="ml-2 flex-shrink-0">
export function DebugGuide({
          ext: [],
        ext: [],
              ext: filteredExt,
              ext: finalExt || [],
          ext: finalExt || [],
          filteredExt.push({
            finalExt = result.ext;
    } finally {
            finished: false,
      finished: false,
        finished: true,
      for await (const result of WorkflowChatAPI.streamDebugAgent(
            format: "debug_guide" as const,
            format: "markdown",
        format: "markdown",
      format: "markdown",
      // Get current workflow for context
            id: messageId,
        id: messageId,
      id: messageId,
            id: messageId || generateUUID(),
    if (
      if (!!abortControllerRef) {
    if (isDebugging) return;
        if (onUpdateMessage && response) {
    if (!response || !response.ext) return null;
  if (!response) return null;
          if (result.ext) {
        if (result.text) {
      if (sessionId && prompt) {
import { app } from "../../../utils/comfyapp";
import { WorkflowChatAPI } from "../../../apis/workflowChatApi";
import { BaseMessage } from "./BaseMessage";
import { generateUUID } from "../../../utils/uuid";
import { queuePrompt } from "../../../utils/queuePrompt";
import RestoreCheckpoint from "../../ui/RestoreCheckpoint";
import { useChatContext } from "../../../context/ChatContext";
import { useEffect, useMemo, useState } from "react";
import { WorkflowChatAPI } from "../../apis/workflowChatApi";
interface DebugGuideProps {
            {isDebugging ? "Analyzing..." : "Debug Errors"}
              isDebugging ? "cursor-not-allowed" : "cursor-pointer"
            (item: any) =>
      (item: any) =>
                item.data?.checkpoint_type === "debug_start"
          item.data?.checkpoint_type === "debug_start"),
                item.type === "debug_checkpoint" &&
        (item.type === "debug_checkpoint" &&
              item.type !== "debug_start_checkpoint" &&
        item.type === "debug_start_checkpoint" ||
      let accumulatedText = "";
      let finalExt: any = null;
      let response = JSON.parse(content);
  messageId,
  messageId?: string; // Add messageId prop to track the current message
            name: "Assistant",
        name: "Assistant",
      name: "Assistant",
  name = "Assistant",
  name?: string;
    null,
  onAddMessage,
    onAddMessage?.(message);
  onAddMessage?: (message: any) => void;
            onClick={handleDebugClick}
                onRestore={() => {
      onUpdateMessage?.({
  onUpdateMessage,
      onUpdateMessage?.(errorMessage);
          onUpdateMessage?.(message);
  onUpdateMessage?: (message: any) => void;
          onUpdateMessage(updatedMessage);
  // Parse checkpointId from ext data (for persistence across page reloads)
          <p className="text-gray-700 text-sm flex-1">{response.text}</p>
        prompt,
          prompt.output, // API format
          prompt.workflow, // UI format
          // Remove any existing debug_start_checkpoint
  }, [response]);
              <RestoreCheckpoint
          {/* Restore checkpoint icon */}
  return (
      return debugStartCheckpoint.data.checkpoint_id;
      return null;
    return null;
      return response;
            role: "ai" as const,
        role: "ai" as const,
      role: "ai" as const,
      // Save checkpoint before debugging
          `Saved debug start checkpoint: ${checkpointData.version_id}`,
          sessionId,
      setIsDebugging(false);
        setLocalCheckpointId(checkpointData.version_id);
      setShowStreamingMessage(false);
              text: accumulatedText,
          text: accumulatedText,
          text: `I encountered an error while analyzing your workflow: ${errorObj.message || "Unknown error"}`,
              text: response.text,
        text: "🔍 Starting workflow analysis...\n",
    try {
            type: "debug_start_checkpoint",
        // Update the current debug guide message to include checkpoint_id in ext data
  // Use persisted checkpoint ID if available, otherwise use local state
      // Use the streaming debug agent API
      // 创建新的 AbortController
