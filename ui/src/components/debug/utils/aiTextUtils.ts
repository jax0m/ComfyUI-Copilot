
    });
  >,
  }
  }));
  });
 */
) => {
/**
};
  aiGeneratedTexts: string[],
  aiSelectedTexts: { [key: string]: boolean },
  aiWritingModalText: string,
  aiWritingNodeId: string,
  aiWritingParamName: string,
  // Also update paramTestValues
      await WorkflowChatAPI.generateSDPrompts(aiWritingModalText);
  } catch (error) {
  // Close the modal
    console.error("Error generating text:", error);
  const currentTexts = [...(textInputs[textKey] || [])];
    const generatedTexts =
      const index = parseInt(key.replace("text", "")) - 1;
    const newSelectedTexts: { [key: string]: boolean } = {};
  const selectedTexts = Object.entries(aiSelectedTexts)
  const textKey = `${aiWritingNodeId}_${aiWritingParamName}`;
  const updatedTexts = [...(textInputs[textKey] || []), ...selectedTexts];
// Copyright (C) 2025 AIDC-AI
export const addSelectedTexts = (
export const handleAiWriting = async (
export const openAiWritingModal = (
export const toggleTextSelection = (
    .filter(([_, isSelected]) => isSelected)
  } finally {
    generatedTexts.forEach((text, index) => {
  if (!aiWritingModalText.trim()) {
  if (selectedTexts.length === 0) {
import { StateKey } from "../ParameterDebugInterfaceNew";
import { WorkflowChatAPI } from "../../../apis/workflowChatApi";
import { WorkflowChatAPI } from "../../apis/workflowChatApi";
// Licensed under the MIT License.
    .map(([key]) => {
      newSelectedTexts[`text${index + 1}`] = false;
    nodeId: string,
  nodeId: string,
    paramName: string,
  paramName: string,
    // Pre-select all generated texts
    ...prev,
    React.SetStateAction<{ [key: string]: boolean }>
    return;
      return aiGeneratedTexts[index];
  setAiGeneratedTexts([]);
    setAiGeneratedTexts(generatedTexts);
  setAiGeneratedTexts: React.Dispatch<React.SetStateAction<string[]>>,
  setAiSelectedTexts({});
    setAiSelectedTexts(newSelectedTexts);
  setAiSelectedTexts((prev) => ({
  setAiSelectedTexts: React.Dispatch<
    setAiWritingError("Failed to generate text variations. Please try again.");
  setAiWritingError(null);
    setAiWritingError("Please enter some text to generate variations");
  setAiWritingError: React.Dispatch<React.SetStateAction<string | null>>,
    setAiWritingLoading(false);
  setAiWritingLoading(false);
  setAiWritingLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setAiWritingLoading(true);
  setAiWritingModalText("");
  setAiWritingModalText: React.Dispatch<React.SetStateAction<string>>,
  setAiWritingModalVisible(false);
  setAiWritingModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
  setAiWritingModalVisible(true);
  setAiWritingNodeId(nodeId);
  setAiWritingNodeId: React.Dispatch<React.SetStateAction<string>>,
  setAiWritingParamName(paramName);
  setAiWritingParamName: React.Dispatch<React.SetStateAction<string>>,
  task_id: string,
    ...textInputs,
  textInputs: { [nodeId_paramName: string]: string[] },
    [textKey]: [...currentTexts, ...selectedTexts],
    [textKey]: !prev[textKey],
  textKey: string,
  try {
  updateParamTestValues: (
  updateParamTestValues(aiWritingNodeId, aiWritingParamName, updatedTexts);
  updateState: (key: StateKey, value: any) => void,
  updateState(StateKey.TextInputs, {
    values: any[],
  ) => void,
 * 处理AI文本生成
 * 处理文本选择切换
 * 打开AI写作模态框
 * 添加选中的文本到文本输入列表
