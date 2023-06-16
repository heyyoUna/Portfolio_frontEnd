import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { redux_store } from "./redux/store";
import { useSelector } from "react-redux";

//語言版本管理
import { IntlProvider } from "react-intl";
import { createIntl, createIntlCache } from "react-intl";
import enTxt from "./lang/Txt/enTxt";
import tcTxt from "./lang/Txt/tcTxt";

//各分頁
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import SlotMachine from "./pages/SlotMachine";
import GithubLayout from "./pages/Layout/Github";

//樣式

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style/main.scss";
import "material-icons/iconfont/material-icons.css";

//#region 語言版本切換
function IntlMessage() {
    const languageMode = useSelector(
        (state: redux_store) => state.GlobalMode.language
    );

    // 建立語言與文本內容的映射表
    const message: Record<string, any> = {
        EN: enTxt,
        TC: tcTxt,
    };

    // 初始化語言管理工具
    const cache = createIntlCache();
    const intl = createIntl(
        {
            // 設置默認語言
            locale: languageMode,
            messages: message[`${languageMode}`],
        },
        cache
    );

    return intl;
}

//取得會依照語言版本切換的文字
export function GetTxt(txtID: string) {
    return IntlMessage().formatMessage({ id: txtID });
}

//#endregion 語言版本切換

export default function App() {
    const IsLightMode = useSelector(
        (state: redux_store) => state.GlobalMode.IsLight
    );

    return (
        <>
            <IntlProvider
                locale={navigator.language}
                messages={IntlMessage().messages}
            >
                <div id={IsLightMode ? "lighMode" : "darkMode"}>
                    <BrowserRouter>
                        <Routes>
                            <Route
                                path="/component/calendar"
                                element={<Calendar />}
                            />
                            <Route
                                path="/component/slotMachine"
                                element={<SlotMachine />}
                            />

                            <Route
                                path="/layout/github"
                                element={<GithubLayout />}
                            />
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </IntlProvider>
        </>
    );
}
