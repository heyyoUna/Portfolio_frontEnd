import { createSlice } from "@reduxjs/toolkit";
import { redux_globalMode } from "../store";

const GobalModeSlice = createSlice({
  name: "GlobalMode",
  initialState: {
    //淺色/深色模式
    IsLight: true,

    //語言模式
    language: "TC",
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
