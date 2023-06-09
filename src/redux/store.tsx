import GobalModeReducer from "./slices/GobalMode";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    GlobalMode: GobalModeReducer,
  },
});

export interface redux_store {
  GlobalMode: redux_globalMode;
}

export interface redux_globalMode {
  IsLight: boolean;
  language: "TC" | "SC" | "EN";
}
