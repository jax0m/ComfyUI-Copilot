import { app } from "../utils/comfyapp"
import showcases from '../../../public/showcase/showcase.json';
import showcases_en from '../../../public/showcase/showcase_en.json';
import { useMemo } from "react";

const useLanguage = () => {
    const language = app.extensionManager.setting.get('Comfy.Locale')

    const languageData = useMemo(() => {
        let showcase_title = ''
        let showcase_list = showcases_en
        switch (language) {
          case 'zh':
            showcase_title = '欢迎使用ComfyUI Copilot!'
            showcase_list = showcases
            break;
          case 'en':
          default:
            showcase_title = 'Welcome to ComfyUI Copilot!'
            showcase_list = showcases_en
            break;
        }
        return {
          showcase_title,
          showcase_list
        };
    }, [language])

    return languageData
}

export default useLanguage