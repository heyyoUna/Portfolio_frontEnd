import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { redux_store } from "./redux/store";
import { useSelector } from "react-redux";

//語言版本管理
import { IntlProvider } from "react-intl";
import { intl, getMessagesByLocale, getSupportedLocales } from "./lang";
import { createIntl, createIntlCache } from "react-intl";
import { locales } from "./lang/locales";
import enMessages from "./lang/locales/en.json";
import tcMessages from "./lang/locales/tc.json";
import SCTxt from "./lang/locales/sc.json";

//各分頁
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import SlotMachine from "./pages/SlotMachine";

//樣式

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style/main.scss";
import "material-icons/iconfont/material-icons.css";

export default function App() {
    //#region 語言版本
    // 建立語言與文本內容的映射表
    const message: Record<string, any> = {
        EN: enMessages,
        TC: tcMessages,
        SC: SCTxt,
    };

    // 初始化語言管理工具
    const cache = createIntlCache();
    const intl = createIntl(
        {
            // 設置默認語言
            locale: "tc",
            messages: message["tc"],
        },
        cache
    );

    // 根據語言代碼獲取對應的文本內容
    const getMessagesByLocale = (locale: string) => message[locale];

    // 獲取支援的語言列表
    const getSupportedLocales = () => locales;

    //#endregion 語言版本

    const IsLightMode = useSelector(
        (state: redux_store) => state.GlobalMode.IsLight
    );

    return (
        <>
            <IntlProvider locale={navigator.language} messages={intl.messages}>
                <div id={IsLightMode ? "lighMode" : "darkMode"}>
                    <BrowserRouter>
                        <Routes>
                            <Route
                                path="/smallFx/Calendar"
                                element={<Calendar />}
                            />
                            <Route
                                path="/smallFx/SlotMachine"
                                element={<SlotMachine />}
                            />
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </IntlProvider>
        </>
    );
}
