import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store, { redux_globalMode, redux_store } from "../redux/store";
import { setColor } from "../redux/slices/GobalMode";

export default function Navbar() {
    const IsLightMode = useSelector(
        (state: redux_store) => state.GlobalMode.IsLight
    );

    return (
        <>
            <nav>
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
                                小功能
                            </div>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to={{
                                            pathname: "/smallFx/Calendar",
                                        }}
                                    >
                                        Calendar
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="dropdown-item"
                                        to={{
                                            pathname: "/smallFx/SlotMachine",
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
                                    {IsLightMode ? "wb_sunny" : "dark_mode"}
                                </span>
                            </div>
                        </div>

                        <div>
                            <span></span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
