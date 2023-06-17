import { useMemo, useState } from "react";
import Navbar from "../../components/Navbar";
import { DndProvider } from "react-dnd";
import Clock from "./components/Clock";
import Calculator from "./components/Calculator";

export default function Home() {
    return (
        <>
            <div
                className="h-100 d-flex flex-column"
                style={{
                    display: "grid",
                    gridTemplateRows: "auto 1fr",
                }}
            >
                <Navbar />
                <div className="home " style={{ gridRow: "2" }}>
                    <div>
                        <Clock />
                        <div className="m-2">
                            <Calculator />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
