import { createIntl, createIntlCache } from "react-intl";
import { locales } from "./locales";

import enMessages from "./locales/en.json";
import tcMessages from "./locales/tc.json";
import SCTxt from "./locales/sc.json";

// 建立語言與文本內容的映射表
const message: Record<string, any> = {
    EN: enMessages,
    TC: tcMessages,
    SC: SCTxt,
};

// 初始化語言管理工具
const cache = createIntlCache();
export const intl = createIntl(
    {
        // 設置默認語言
        locale: "tc",
        messages: message["tc"],
    },
    cache
);

// 根據語言代碼獲取對應的文本內容
export const getMessagesByLocale = (locale: string) => message[locale];

// 獲取支援的語言列表
export const getSupportedLocales = () => locales;
