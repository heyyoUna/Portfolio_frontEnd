import { createSlice } from "@reduxjs/toolkit";
import { redux_globalMode, languageType } from "../store";

const locale = navigator.language;

function InitalLang(locale: string): languageType {
    switch (locale) {
        case "zh-TW":
            return "TC";
        case "zh-CN":
            return "SC";
        default:
            return "EN";
    }
}

const GobalModeSlice = createSlice({
    name: "GlobalMode",
    initialState: {
        //淺色/深色模式
        IsLight: true,

        //語言模式
        language: InitalLang(locale),
    } as redux_globalMode,

    reducers: {
        setColor: (state, action) => {
            state.IsLight = action.payload;
        },
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
    },
});

export const { setColor, setLanguage } = GobalModeSlice.actions;
export default GobalModeSlice.reducer;
