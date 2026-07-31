
                        />
                        },
                      ))}
                      />
                      >
                      }));
                    ) : (
                    )}
                    >
                    },
                    }}
                  ) : (
                  )}
                  />
                  : ""}
                  >
                  }
                  }));
                  }`}
                ) : (
                )}
                />
                </>
                <>
                >
                }`}
                }}
              ) : (
              ))}
              )}
              />
              >
              } 
            )}
            .
            />
            >
          >
          }
        >
        }
      );
      }
      }),
      });
      },
      };
    () =>
    ) {
    [],
    }
    });
    };
  );
  }, []);
  };
 */
/*
}
      }, 500),
            </a>
            </a>{" "}
            <a
        {/* Action Buttons */}
                  active={activeTab === tab}
                        [activeTab]: {
                    [activeTab]: {
              {activeTab === "LMStudio" && (
            {activeTab !== "LMStudio" && (
              {activeTab === "OpenAI" && (
            and&nbsp;
                  API Key
            {/* API Key */}
            : "API key is valid!"
}: ApiKeyModalProps) {
            {apikeymodel_title}
 * @Author: 晴知 qingli.hql@alibaba-inc.com
            {/* Base URL */}
                      : "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white"
                    : "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white"
                  ? "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white"
                      ? "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                    ? "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                  : "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                                        bg-gray-50 dark:bg-gray-700
                                        bg-gray-50 dark:bg-gray-700 
                                    bg-gray-50 dark:bg-gray-700 
                                bg-gray-50 dark:bg-gray-700
                                bg-gray-50 dark:bg-gray-700 
                      ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400"
                    ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400"
                      : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400"
                    : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400"
      body: JSON.stringify({
                  </button>
                  <button
                </button>
                <button
              </button>
              <button
            </button>
            <button
          </button>
          <button
            By clicking the "Send" button below and submitting your information
    // Call configuration updated callback if OpenAI config has changed
            Cancel
    } catch (e) {
      } catch (error) {
    } catch (error) {
    // Check if it looks like LMStudio URL
    // Check if OpenAI configuration has changed
    // Check if Workflow LLM configuration has changed
                        <circle
                        ></circle>
                      <circle
                      ></circle>
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 dark:text-gray-400 
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 dark:text-gray-400 
                        className="animate-spin h-4 w-4 text-gray-500"
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              className="flex-1"
                        className="h-4 w-4"
                      className="h-4 w-4"
              className="mb-4"
          className="mb-4"
                  className={`mt-2 text-xs p-2 rounded-md ${
                          className="opacity-25"
                        className="opacity-25"
                          className="opacity-75"
                        className="opacity-75"
                  className={`px-4 py-2 rounded-lg font-medium text-xs transition-colors ${
                className={`px-4 py-2 rounded-lg font-medium text-xs transition-colors ${
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 
            className="px-5 py-2.5 text-gray-700 bg-white dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 
                className={`text-xs p-2 rounded-md ${
              className="underline underline-offset-2"
              className={`w-28 py-2.5 ${
              className="w-4 h-4"
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg pr-12 text-xs
                  className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg pr-12 text-xs
                    className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg text-xs
                className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg text-xs
        </CollapsibleCard>
        <CollapsibleCard
            ComfyUI Copilot API Key
        console.error("Failed to fetch RSA public key:", error);
        console.log("checkEmailValid", value);
  const [activeTab, setActiveTab] = useState<string>(TAB_LIST[0]);
  const { apikeymodel_title } = useLanguage();
  const [apiKey, setApiKey] = useState(initialApiKey);
const BASE_URL = config.apiBaseUrl;
  const checkEmailValid = useMemo(
  const { countDown, start } = useCountDown(60);
    const data = await response.json();
  const [email, setEmail] = useState("");
    const fetchPublicKey = async () => {
  const handleLoadWorkflowLLMModels = async () => {
  const handleSave = () => {
  const handleSendEmail = async () => {
  const handleTabChange = (tab: string) => {
  const handleVerifyOpenAiKey = async () => {
  const handleVerifyWorkflowLLMKey = async () => {
    const hasOpenaiConfigChanged =
    const hasWorkflowConfigChanged =
      const ids = await WorkflowChatAPI.listModelsFromLLM(
  const [isEmailValid, setIsEmailValid] = useState(false);
    const isLMStudio =
      const isValid = await verifyOpenAiApiKey(
      const isValid = await verifyOpenAiApiKey(openaiApiKey, openaiBaseUrl);
  const [loading, setLoading] = useState(false);
    const map: Record<string, Record<string, string>> = {};
  const [modalContent, setModalContent] = useState("");
  const [modalOepn, setModalOpen] = useState(false);
  const [openaiApiKey, setOpenaiApiKey] = useState("");
  const [openaiBaseUrl, setOpenaiBaseUrl] = useState("");
    const previousOpenaiApiKey = localStorage.getItem("openaiApiKey") || "";
    const previousOpenaiBaseUrl = localStorage.getItem("openaiBaseUrl") || "";
    const previousWorkflowLLMApiKey =
    const previousWorkflowLLMBaseUrl =
    const previousWorkflowLLMModel =
          const publicKey = await fetchRsaPublicKey();
        const reg = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const response = await fetch(`${BASE_URL}/api/user/create`, {
  const [rsaPublicKey, setRsaPublicKey] = useState<string | null>(null);
    const savedOpenaiApiKey = localStorage.getItem("openaiApiKey");
    const savedOpenaiBaseUrl = localStorage.getItem("openaiBaseUrl");
        const savedPublicKey = localStorage.getItem("rsaPublicKey");
    const savedWorkflowLLMApiKey = localStorage.getItem("workflowLLMApiKey");
    const savedWorkflowLLMBaseUrl = localStorage.getItem("workflowLLMBaseUrl");
    const savedWorkflowLLMModel = localStorage.getItem("workflowLLMModel");
  const [showOpenaiApiKey, setShowOpenaiApiKey] = useState(false);
  const [showWorkflowLLMApiKey, setShowWorkflowLLMApiKey] = useState(false);
const TAB_LIST = ["OpenAI", "LMStudio"];
  const [tabStrMap, setTabStrMap] = useState<Record<
    const username = email?.split("@")?.[0] || "";
  const [verificationResult, setVerificationResult] = useState<{
  const [verifyingKey, setVerifyingKey] = useState(false);
  const [verifyingWorkflowLLM, setVerifyingWorkflowLLM] = useState(false);
  const [workflowLLMApiKey, setWorkflowLLMApiKey] = useState("");
  const [workflowLLMBaseUrl, setWorkflowLLMBaseUrl] = useState("");
  const [workflowLLMModel, setWorkflowLLMModel] = useState("");
  const [workflowLLMModelsLoading, setWorkflowLLMModelsLoading] =
  const [workflowLLMModels, setWorkflowLLMModels] = useState<string[]>([]);
  const [workflowVerificationResult, setWorkflowVerificationResult] = useState<{
        "Content-Type": "application/json",
// Copyright (C) 2025 AIDC-AI
              ) : countDown > 0 ? (
                          cx="12"
                        cx="12"
                          cy="12"
                        cy="12"
                    </datalist>
                    <datalist id="workflow-llm-models">
 * @Date: 2024-12-12 21:28:03
      debounce((value: string) => {
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBK                            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              disabled={loading || !isEmailValid || countDown > 0}
                disabled={verifyingKey}
                  disabled={verifyingWorkflowLLM}
                    disabled={workflowLLMModelsLoading}
                    </div>
                  </div>
                  <div>
                </div>
                <div
              </div>
              <div
            </div>
          </div>
          <div>
        </div>
      </div>
    </div>
                    <div className="absolute inset-y-0 right-3 flex items-center">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 w-[480px] max-h-[80vh] shadow-2xl overflow-y-auto">
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-10 flex items-center justify-center">
          <div className="flex flex-row justify-between">
              <div className="flex items-center gap-2">
            <div className="flex items-center mb-2">
              <div className="flex items-center mt-2">
        <div className="flex justify-end gap-3">
                  <div className="mb-1">
                <div className="mb-1">
                                <div className="mb-1"><strong>🔗 For LMStudio:</strong> http://localhost:1234/v1 (leave API key empty)</div>
                                <div className="mb-1"><strong>🌐 For OpenAI:</strong> https://api.openai.com/v1 (requires API key)</div>
              <div className="mb-4">
            <div className="mb-4">
            <div className="mb-4 text-xs text-gray-500 dark:text-gray-400">
        <div className="mb-6">
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                <div className="relative">
              <div className="relative">
                <div className="relative flex-1">
          <div className="relative mb-4">
          <div className="relative mb-4 flex flex-row gap-2">
            <div className="text-sm text-red-600 dark:text-red-300">
          <div className="text-xs text-gray-600">
                            </div>koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
                                <div><strong>⚙️ For Custom:</strong> Any OpenAI-compatible server URL</div>
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      // Do not auto-select a model; keep input unchanged so datalist shows all
        } else {
    } else {
        email,
              Email
                {!!email && email !== "" && !isEmailValid
          error instanceof Error
            ? error.message
export function ApiKeyModal({
            : "Failed to verify connection",
    fetchPublicKey();
    // Fetch RSA public key
 * @FilePath: /comfyui_copilot/ui/src/components/chat/ApiKeyModal.tsx
                          fill="currentColor"
                        fill="currentColor"
              fill="currentColor"
                        fill="none"
                      fill="none"
    } finally {
                                        focus:border-blue-500 dark:focus:border-blue-400 
                                    focus:border-blue-500 dark:focus:border-blue-400 
                                focus:border-blue-500 dark:focus:border-blue-400 
                                        focus:outline-none"
                                    focus:outline-none"
                                focus:outline-none"
                                        focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20
                                    focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20
                                focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20
        </h2>
        <h2 className="text-xl text-gray-900 dark:text-white font-semibold mb-6">
            </h3>
            <h3 className="text-sm text-gray-900 dark:text-white font-medium">
    handleLoadWorkflowLLMModels();
      (hasOpenaiConfigChanged || hasWorkflowConfigChanged) &&
      headers: {
                                        hover:text-gray-700 dark:hover:text-gray-200 transition-colors bg-transparent border-none"
                                    hover:text-gray-700 dark:hover:text-gray-200 transition-colors bg-transparent border-none"
              href="https://cdn.contract.alibaba.com/terms/c_end_product_protocol/20250219150239949/20250219150239949.html?lng=en"
              onClick={(e) => {
                if (!window.confirm("This will open an external page (terms of service) in a new tab. Continue?")) {
                  e.preventDefault();
                }
              }}
              href="https://cdn.contract.alibaba.com/terms/privacy_policy_full/20250219145958852/20250219145958852.html?lng=en"
              onClick={(e) => {
                if (!window.confirm("This will open an external page (privacy policy) in a new tab. Continue?")) {
                  e.preventDefault();
                }
              }}
    if (
    if (!!data?.data) {
    if (!email || email === "" || !isEmailValid) return;
  if (!isOpen) return null;
    if (openaiApiKey.trim()) {
    if (!openaiApiKey.trim() && !isLMStudio) {
    if (openaiBaseUrl.trim()) {
    if (!rsaPublicKey && !isLMStudio) {
    if (savedOpenaiApiKey) {
    if (savedOpenaiBaseUrl) {
        if (savedPublicKey) {
    if (savedWorkflowLLMApiKey) {
    if (savedWorkflowLLMBaseUrl) {
    if (savedWorkflowLLMModel) {
    if (workflowLLMApiKey.trim()) {
    if (!workflowLLMApiKey.trim() && !isLMStudio) {
    if (workflowLLMBaseUrl.trim()) {
    if (!workflowLLMBaseUrl || workflowLLMBaseUrl.trim() === "") {
    if (workflowLLMModel.trim()) {
import CollapsibleCard from "../ui/CollapsibleCard";
import { WorkflowChatAPI } from "../../apis/workflowChatApi";
import { config } from "../../config";
import { debounce } from "lodash";
import { fetchRsaPublicKey, verifyOpenAiApiKey } from "../../utils/crypto";
import Input from "../ui/Input";
import LoadingIcon from "../ui/Loading-icon";
import Modal from "../ui/Modal";
import StartLink from "../ui/StartLink";
import TabButton from "../ui/TabButton";
import useCountDown from "../../hooks/useCountDown";
import { useEffect, useMemo, useState } from "react";
import useLanguage from "../../hooks/useLanguage";
import { WorkflowChatAPI } from "../../apis/workflowChatApi";
  }, [initialApiKey]);
  initialApiKey = "",
  initialApiKey?: string;
                  <input
                <input
              <input
            <Input
interface ApiKeyModalProps {
            : "Invalid API key. Please check and try again.",
          : isLMStudio
          ? isLMStudio
  isOpen,
  isOpen: boolean;
              isPassword={true}
                </label>
              </label>
            </label>
          </label>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">
                <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mt-2 mb-2">
 * @LastEditors: ai-business-hql ai.bussiness.hql@gmail.com
 * @LastEditTime: 2025-10-16 11:49:08
// Licensed under the MIT License.
                    list="workflow-llm-models"
        {/* LLM Configuration */}
              LLM Configuration (OpenAI / LMStudio / Custom)
            ? "LMStudio connection failed. Please check if LMStudio server is running."
            ? "LMStudio connection successful!"
              {loading ? (
                <LoadingIcon />
                !loading && isEmailValid && countDown === 0
    // Load OpenAI configuration from localStorage
      localStorage.getItem("workflowLLMApiKey") || "";
      localStorage.getItem("workflowLLMBaseUrl") || "";
      localStorage.getItem("workflowLLMModel") || "";
      localStorage.removeItem("openaiApiKey");
      localStorage.removeItem("openaiBaseUrl");
      localStorage.removeItem("workflowLLMApiKey");
      localStorage.removeItem("workflowLLMBaseUrl");
      localStorage.removeItem("workflowLLMModel");
      localStorage.setItem("openaiApiKey", openaiApiKey.trim());
      localStorage.setItem("openaiBaseUrl", openaiBaseUrl.trim());
          localStorage.setItem("rsaPublicKey", publicKey);
      localStorage.setItem("workflowLLMApiKey", workflowLLMApiKey);
      localStorage.setItem("workflowLLMBaseUrl", workflowLLMBaseUrl.trim());
      localStorage.setItem("workflowLLMModel", workflowLLMModel.trim());
        {/* Main API Key */}
      map[tab] = {
        message:
        message: e instanceof Error ? e.message : "Failed to fetch models",
        message: isValid
        message: "Please enter an API key or use LMStudio URL (localhost:1234)",
        message: "Please enter Workflow LLM Server URL first",
        message: "RSA public key not available. Please try again later.",
    message: string;
      method: "POST",
      </Modal>
      <Modal open={modalOepn} onClose={() => setModalOpen(false)}>
                  models(note: only some very powerful closed-source models can
  > | null>(null);
  } | null>(null);
                    onChange={(e) => {
                onChange={(e) => {
                  onChange={(e) => setWorkflowLLMApiKey(e.target.value)}
                onChange={(e) => setWorkflowLLMBaseUrl(e.target.value)}
                    onChange={(e) => setWorkflowLLMModel(e.target.value)}
                  onClick={() =>
            onClick={handleSave}
              onClick={handleSendEmail}
                  onClick={() => handleTabChange(tab)}
                onClick={handleVerifyOpenAiKey}
                  onClick={handleVerifyWorkflowLLMKey}
            onClick={onClose}
                    onClick={() => setShowOpenaiApiKey(!showOpenaiApiKey)}
    onClose();
  onClose,
  onClose: () => void;
      onConfigurationUpdated
      onConfigurationUpdated();
  onConfigurationUpdated,
  onConfigurationUpdated?: () => void;
  onSave,
    onSave(apiKey);
  onSave: (apiKey: string) => void;
        openaiApiKey: "",
                          openaiApiKey: e.target.value,
      openaiApiKey.trim() !== previousOpenaiApiKey ||
        openaiBaseUrl: "",
                      openaiBaseUrl: e.target.value,
      openaiBaseUrl.includes(":1234") ||
      openaiBaseUrl.includes(":1235");
      openaiBaseUrl.toLowerCase().includes("127.0.0.1") ||
      openaiBaseUrl.toLowerCase().includes("localhost") ||
      openaiBaseUrl.trim() !== previousOpenaiBaseUrl;
  // OpenAI configuration
                        <option value={m} key={m} />
                        <path
                        ></path>
                      <path
                      ></path>
              <path d="M498.894518 100.608396c-211.824383 0-409.482115 189.041494-409.482115 422.192601 0 186.567139 127.312594 344.783581 295.065226 400.602887 21.13025 3.916193 32.039717-9.17701 32.039717-20.307512 0-10.101055 1.176802-43.343157 1.019213-78.596056-117.448946 25.564235-141.394311-49.835012-141.394311-49.835012-19.225877-48.805566-46.503127-61.793368-46.503127-61.793368-38.293141-26.233478 3.13848-25.611308 3.13848-25.611308 42.361807 2.933819 64.779376 43.443441 64.779376 43.443441 37.669948 64.574714 98.842169 45.865607 122.912377 35.094286 3.815909-27.262924 14.764262-45.918819 26.823925-56.431244-93.796246-10.665921-192.323237-46.90017-192.323237-208.673623 0-46.071292 16.498766-83.747379 43.449581-113.332185-4.379751-10.665921-18.805298-53.544497 4.076852-111.732757 0 0 35.46063-11.336186 116.16265 43.296085 33.653471-9.330506 69.783343-14.022365 105.654318-14.174837 35.869952 0.153496 72.046896 4.844332 105.753579 14.174837 80.606853-54.631248 116.00813-43.296085 116.00813-43.296085 22.935362 58.18826 8.559956 101.120049 4.180206 111.732757 27.052123 29.584806 43.443441 67.260893 43.443441 113.332185 0 162.137751-98.798167 197.850114-192.799074 208.262254 15.151072 13.088086 28.65155 38.804794 28.65155 78.17957 0 56.484456-0.459464 101.94381-0.459464 115.854635 0 11.235902 7.573489 24.381293 29.014824 20.2543C825.753867 867.330798 933.822165 709.10924 933.822165 522.700713c0-233.155201-224.12657-422.192601-434.927647-422.192601L498.894518 100.608396z"></path>
                placeholder={`${activeTab === "OpenAI" ? "https://api.openai.com/v1" : "http://localhost:1234/v1"}`}
                    placeholder="e.g. gpt-4o-mini, claude-3-5-sonnet, llama-3.1-70b"
                placeholder="e.g. https://api.openai.com/v1 or http://localhost:1234/v1"
                  placeholder="Enter workflow LLM API key (if required)"
              placeholder="Enter your API key"
              placeholder="Enter your Email"
                    placeholder="Enter your OpenAI API key "
                                        placeholder-gray-500 dark:placeholder-gray-400
                                    placeholder-gray-500 dark:placeholder-gray-400
                                placeholder-gray-500 dark:placeholder-gray-400
                  ? "Please enter a valid email"
        <p>{modalContent}</p>
                        ...prev,
                    ...prev,
                          ...prev?.[activeTab],
                      ...prev?.[activeTab],
              Privacy Policy
                          r="10"
                        r="10"
    Record<string, string>
              rel="noopener noreferrer"
                    (requires API key)
                `Resend in ${countDown}s`
      return;
  return (
                        rounded-lg font-medium transition-colors"
                            rounded-lg font-medium transition-colors flex justify-center items-center`}
            Save
    // Save or clear OpenAI API key in localStorage
    // Save or clear OpenAI base URL
    // Save or clear Workflow LLM API key
    // Save or clear Workflow LLM base URL
    // Save or clear Workflow LLM model
    // Save the main API key
                "Send"
                Server URL
    setActiveTab(tab);
          Set API Key
    setApiKey(initialApiKey);
        setIsEmailValid(reg.test(value));
              setIsValueValid={checkEmailValid}
    setLoading(false);
    setLoading(true);
      setModalContent(data?.message || "Send email failed");
      setModalContent("Send email successfully, please check your email");
    setModalOpen(true);
                      setOpenaiApiKey(e.target.value);
      setOpenaiApiKey(savedOpenaiApiKey);
    setOpenaiApiKey(tabStrMap?.[tab]?.openaiApiKey || "");
                  setOpenaiBaseUrl(e.target.value);
      setOpenaiBaseUrl(savedOpenaiBaseUrl);
    setOpenaiBaseUrl(tabStrMap?.[tab]?.openaiBaseUrl || "");
          setRsaPublicKey(publicKey);
          setRsaPublicKey(savedPublicKey);
                    setShowWorkflowLLMApiKey(!showWorkflowLLMApiKey)
    setTabStrMap(map);
                      setTabStrMap((prev) => ({
                  setTabStrMap((prev) => ({
              setValue={setApiKey}
              setValue={setEmail}
      setVerificationResult({
    setVerificationResult(null);
      setVerifyingKey(false);
    setVerifyingKey(true);
      setVerifyingWorkflowLLM(false);
    setVerifyingWorkflowLLM(true);
      setWorkflowLLMApiKey(savedWorkflowLLMApiKey);
      setWorkflowLLMBaseUrl(savedWorkflowLLMBaseUrl);
      setWorkflowLLMModel(savedWorkflowLLMModel);
      setWorkflowLLMModels(ids);
      setWorkflowLLMModelsLoading(false);
      setWorkflowLLMModelsLoading(true);
      setWorkflowVerificationResult({
    setWorkflowVerificationResult(null);
                    {showOpenaiApiKey ? (
                  {showWorkflowLLMApiKey ? (
                    </span>
                  </span>
              </span>
              <span>
                    <span className="flex items-center text-xs">
                  <span className="flex items-center text-xs">
    start();
          </StartLink>
          <StartLink className="flex justify-start items-end">
    string,
                          stroke="currentColor"
                        stroke="currentColor"
                      stroke="currentColor"
                          strokeLinecap="round"
                        strokeLinecap="round"
                          strokeLinejoin="round"
                        strokeLinejoin="round"
                          strokeWidth={2}
                        strokeWidth={2}
                          strokeWidth="4"
                        strokeWidth="4"
                    <strong>⚙️ For Custom:</strong> Any OpenAI-compatible server
                    <strong>🌐 For OpenAI:</strong> https://api.openai.com/v1
                  <strong>Optional:</strong> If you don't set, the workflow will
                  <strong>� For LMStudio:</strong> http://localhost:1235/v1
    success: boolean;
        success: false,
        success: isValid,
                  support this, and they require at least 8192 context) for
                      </svg>
                      <svg
                    </svg>
                    <svg
            </svg>
            <svg
                  {tab}
                </TabButton>
                <TabButton
    TAB_LIST?.forEach((tab) => {
              {TAB_LIST?.map((tab) => (
              target="_blank"
              Terms of Use
                                        text-gray-900 dark:text-white
                                    text-gray-900 dark:text-white
                                text-gray-900 dark:text-white
                        text-white rounded-lg font-medium transition-colors"
          title={
            to us, you agree to our&nbsp;
    // Trigger fetching models immediately after clicking verify
      try {
    try {
                    type="button"
                  type="button"
                    type={showOpenaiApiKey ? "text" : "password"}
                  type={showWorkflowLLMApiKey ? "text" : "password"}
                    type="text"
                type="text"
                    URL
  useEffect(() => {
        username,
    useState(false);
                  use the Claude4 model provided by us. If you need to use other
              value={apiKey}
              value={email}
                    value={openaiApiKey}
                value={openaiBaseUrl}
                  value={workflowLLMApiKey}
                value={workflowLLMBaseUrl}
                    value={workflowLLMModel}
            {verificationResult && (
            {/* Verification Result */}
                {verificationResult.message}
                  verificationResult.success
                    "Verify"
                  "Verify"
            {/* Verify Button */}
                      Verifying...
                    Verifying...
                  verifyingKey
                {verifyingKey ? (
                    verifyingWorkflowLLM
                  {verifyingWorkflowLLM ? (
              viewBox="0 0 1024 1024"
                        viewBox="0 0 24 24"
                      viewBox="0 0 24 24"
                  workflow Debug and modification, please set it.
        workflowLLMApiKey,
                Workflow LLM API Key
            {/* Workflow LLM API Key */}
      workflowLLMApiKey.trim() !== previousWorkflowLLMApiKey ||
        workflowLLMApiKey.trim() || undefined,
        workflowLLMBaseUrl,
            {/* Workflow LLM Base URL */}
      workflowLLMBaseUrl.includes(":1234") ||
      workflowLLMBaseUrl.includes(":1235");
      workflowLLMBaseUrl.toLowerCase().includes("127.0.0.1") ||
      workflowLLMBaseUrl.toLowerCase().includes("localhost") ||
        workflowLLMBaseUrl.trim(),
      workflowLLMBaseUrl.trim() !== previousWorkflowLLMBaseUrl ||
  // Workflow LLM configuration
              Workflow LLM Configuration (Optional)
        {/* Workflow LLM Configuration (Optional) */}
                Workflow LLM Model
            {/* Workflow LLM Model */}
                  {!workflowLLMModelsLoading && (
                  {workflowLLMModelsLoading && (
                      {workflowLLMModels.map((m) => (
      workflowLLMModel.trim() !== previousWorkflowLLMModel;
                Workflow LLM Server URL
              {workflowVerificationResult && (
                  {workflowVerificationResult.message}
                    workflowVerificationResult.success
                        xmlns="http://www.w3.org/2000/svg"
                      xmlns="http://www.w3.org/2000/svg"
