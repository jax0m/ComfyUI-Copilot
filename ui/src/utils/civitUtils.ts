// Copyright (C) 2025 AIDC-AI
// Licensed under the MIT License.

import { userSettingsTable } from "../db-tables/WorkspaceDB";

const CIVIT_API_KEY_STORAGE_KEY = "WORKSPACE_CIVIT_API_KEY_STORAGE_KEY";
const CIVIT_ENABLED_KEY = "civitaiEnabled";

export function getCivitApiKey() {
  return localStorage.getItem(CIVIT_API_KEY_STORAGE_KEY);
}

export function setCivitApiKey(apiKey: string) {
  localStorage.setItem(CIVIT_API_KEY_STORAGE_KEY, apiKey);
}

/**
 * Check if CivitAI API access is enabled.
 * Disabled by default for privacy. User must explicitly enable it.
 */
export function isCivitaiEnabled(): boolean {
  return localStorage.getItem(CIVIT_ENABLED_KEY) === 'true';
}

/**
 * Enable or disable CivitAI API access.
 */
export function setCivitaiEnabled(enabled: boolean): void {
  if (enabled) {
    localStorage.setItem(CIVIT_ENABLED_KEY, 'true');
  } else {
    localStorage.removeItem(CIVIT_ENABLED_KEY);
  }
}

export function getCivitModelDownloadUrl(modelVersionID: string) {
  return `https://civitai.com/api/download/models/${modelVersionID}`;
}

export function getCivitModelPageUrl(modelID: string, modelVersionID?: string) {
  if (!modelVersionID) {
    return `https://civitai.com/models/${modelID}`;
  }
  return `https://civitai.com/models/${modelID}?modelVersionId=${modelVersionID}`;
}

export function getHgModelInfoUrlFromDownloadUrl(downloadUrl: string) {
  if (!downloadUrl.includes("huggingface")) return;
  const infoPageUrl = downloadUrl.replace("/resolve/", "/blob/");
  return infoPageUrl;
}

interface ResponsePartial {
  id: number;
  modelId: number;
  name: string;
  model: {
    name: string;
    type: string;
    nsfw: boolean;
  };
  images: {
    url: string;
    nsfwLevel: number;
    width: number;
    height: number;
    hash: string;
  }[];
}

export async function fetchCivitModelFromHashKey(filehash: string): Promise<{
  modelName?: string;
  civitModelID?: string;
  civitModelVersionID?: string;
  imageUrl?: string;
}> {
  // CivitAI API access is disabled by default for privacy
  if (!isCivitaiEnabled()) {
    return {};
  }

  try {
    const url = `https://civitai.com/api/v1/model-versions/by-hash/${filehash}`;
    const resp = await fetch(url);
    const json: ResponsePartial = await resp.json();
    let image_url: string | undefined;
    const showNsfwThumbnail = await userSettingsTable?.getSetting(
      "showNsfwModelThumbnail",
    );
    if (showNsfwThumbnail === true) {
      image_url = json?.images?.[0]?.url;
    } else if (!json.model.nsfw) {
      const sfwImage = json.images.find((i) => i.nsfwLevel == 1);
      image_url = sfwImage?.url;
    }

    return {
      modelName: json.model.name,
      civitModelID: String(json.modelId),
      civitModelVersionID: String(json.id),
      imageUrl: image_url ?? undefined,
    };
  } catch (e) {
    return {};
  }
}
