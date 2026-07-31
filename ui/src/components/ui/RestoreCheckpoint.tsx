
        }
      }
      }`}
    >
    }
  );
  };
 */
/*
}) => {
}: {
};
      alert("Failed to restore workflow checkpoint. Please try again.");
        alert("No workflow data found in checkpoint.");
          // API format - use loadApiJson
          //   app.loadApiJson(workflowToLoad);
          app.loadGraphData(workflowToLoad);
 * @Author: ai-business-hql qingli.hql@alibaba-inc.com
        await WorkflowChatAPI.restoreWorkflowCheckpoint(checkpointId);
    </button>
    <button
    } catch (error) {
        checkpointData.workflow_data_ui || checkpointData.workflow_data;
  checkpointId,
  checkpointId: number;
      className={`flex flex-row items-center gap-1 p-1 rounded transition-colors ${
      console.error("Failed to restore checkpoint:", error);
        console.error("No workflow data found in checkpoint");
        console.log(`Restored workflow checkpoint ${checkpointId}`);
      const checkpointData =
  const handleRestore = async () => {
  const [isRestoring, setIsRestoring] = useState(false);
const RestoreCheckpoint = ({
      const workflowToLoad =
 * @Date: 2025-07-30 16:30:22
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
      disabled={isRestoring}
        } else {
      } else {
export default RestoreCheckpoint;
 * @FilePath: /comfyui_copilot/ui/src/components/ui/RestoreCheckpoint.tsx
    } finally {
        if (checkpointData.workflow_data_ui) {
    if (isRestoring) return;
      if (workflowToLoad) {
import { app } from "../../utils/comfyapp";
import { WorkflowChatAPI } from "../../apis/workflowChatApi";
import { loadApiWorkflowWithMissingNodes } from "../../utils/comfyuiWorkflowApi2Ui";
import { Undo2 } from "lucide-react";
import { useState } from "react";
import { WorkflowChatAPI } from "../../apis/workflowChatApi";
        isRestoring
 * @LastEditors: ai-business-hql qingli.hql@alibaba-inc.com
 * @LastEditTime: 2025-08-06 11:30:42
          loadApiWorkflowWithMissingNodes(workflowToLoad);
        // Load workflow to canvas
      onClick={handleRestore}
        onRestore();
  onRestore,
  onRestore: () => void;
  return (
      setIsRestoring(false);
    setIsRestoring(true);
      <span className="text-xs">Restore checkpoint</span>
          ? "text-gray-400 cursor-not-allowed"
          : "text-gray-500 hover:!bg-gray-100 hover:!text-gray-600"
  title,
  title?: string;
      title={title || `Restore checkpoint ${checkpointId}`}
    try {
          // UI format - use loadGraphData
      <Undo2 size={12} />
      // Use UI format if available, otherwise use API format
