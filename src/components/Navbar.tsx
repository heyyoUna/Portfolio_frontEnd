import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store, { redux_globalMode, redux_store } from "../redux/store";
import { setColor, setLanguage } from "../redux/slices/GobalMode";
import { GetTxt } from "../App";
import { useCallback, useEffect } from "react";

export default function Navbar() {
    const IsLightMode = useSelector(
        (state: redux_store) => state.GlobalMode.IsLight
    );
    const languageMode = useSelector(
        (state: redux_store) => state.GlobalMode.language
    );

    return (
        <>
            <nav id="mainNav">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="w-50 ">
                        <Link to={{ pathname: "/" }}>Home</Link>
                    </div>

                    <div className="d-flex  flex-grow-1 justify-content-around align-items-center  ">
                        <Link to={{ pathname: "/" }}>Link</Link>

                        <div className="dropdown">
                            <div
                                className="dropdown-toggle"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {GetTxt("components")}
                            </div>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to={{
                                            pathname: "/component/calendar",
                                        }}
                                    >
                                        Calendar
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to={{
                                            pathname: "/component/slotMachine",
                                        }}
                                    >
                                        SlotMachine
                                    </Link>
                                </li>
                                <hr />

                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to={{ pathname: "/" }}
                                    >
                                        maybe something else
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="dropdown">
                            <div
                                className="dropdown-toggle"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                key={"languageMode-layout"}
                            >
                                {GetTxt("layout")}
                            </div>
                            <ul className="dropdown-menu">
                                <li>
                                    <span
                                        className="dropdown-item"
                                        onClick={() => {
                                            window.open(
                                                "/layout/github",
                                                "123",
                                                "height=800,width=1200"
                                            );
                                        }}
                                    >
                                        GitHub
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="d-flex flex-column align-items-center">
                            <div id="themeController">
                                <span
                                    id={IsLightMode ? "sun" : "moon"}
                                    className="material-icons"
                                    onClick={(e) => {
                                        const target =
                                            e.target as HTMLSpanElement;
                                        target.classList.add(
                                            IsLightMode
                                                ? "rotateSun"
                                                : "rotateMoon"
                                        );

                                        setTimeout(() => {
                                            store.dispatch(
                                                setColor(!IsLightMode)
                                            );
                                        }, 500);

                                        setTimeout(() => {
                                            target.classList.remove(
                                                "rotateSun",
                                                "rotateMoon"
                                            );
                                        }, 1000);
                                    }}
                                >
                                    {IsLightMode ? "dark_mode" : "wb_sunny"}
                                </span>
                            </div>
                        </div>

                        <div
                            className="border p-1"
                            onClick={() => {
                                store.dispatch(
                                    setLanguage(
                                        languageMode === "EN" ? "TC" : "EN"
                                    )
                                );
                            }}
                        >
                            <span>{languageMode === "EN" ? "TC" : "EN"}</span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
