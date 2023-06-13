// import { useSelector } from "react-redux";
// import { redux_store } from "../redux/store";
// import ENTxt from "./locales/en.json";
// import TCTxt from "./locales/tc.json";
// import SCTxt from "./locales/sc.json";

// export default function Lang(): lang_interface {
//     const languageMode = useSelector(
//         (state: redux_store) => state.GlobalMode.language
//     );

//     switch (languageMode) {
//         case "TC":
//             return TCTxt;
//         case "SC":
//             return SCTxt;
//         default:
//             return ENTxt;
//     }
// }

// export interface lang_interface {
//     homepage: string;
// }

export const locales = [
    { code: "en", name: "EN" },
    { code: "tc", name: "繁中" },
    { code: "sc", name: "簡中" },
];
