// Stub for WorkspaceDB - provides user settings storage
// This is a simplified implementation that uses localStorage

interface Table {
  getSetting(key: string): Promise<any>;
  setSetting(key: string, value: any): Promise<void>;
}

class UserSettingsTable implements Table {
  private readonly STORAGE_KEY = 'comfyui_copilot_user_settings';

  private async getSettings(): Promise<Record<string, any>> {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch (e) {
      return {};
    }
  }

  private async saveSettings(settings: Record<string, any>): Promise<void> {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(settings));
    } catch (e) {
      console.error('Failed to save user settings:', e);
    }
  }

  async getSetting(key: string): Promise<any> {
    const settings = await this.getSettings();
    return settings[key];
  }

  async setSetting(key: string, value: any): Promise<void> {
    const settings = await this.getSettings();
    settings[key] = value;
    await this.saveSettings(settings);
  }
}

export const userSettingsTable = new UserSettingsTable();
export type { Table };
