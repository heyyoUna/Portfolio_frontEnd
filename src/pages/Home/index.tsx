import { useMemo, useState } from "react";
import Navbar from "../../components/Navbar";
import { DndProvider } from "react-dnd";
import Clock from "./components/Clock";
import Calculator from "./components/Calculator";
import StickyNotes from "./components/StickyNotes";
import CalendarHome from "./components/CalendarHome";

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
                <div className="home d-flex flex-wrap" style={{ gridRow: "2" }}>
                    <div className="m-5">
                        <Clock />
                    </div>

                    <div className="m-5">
                        <Calculator />
                    </div>

                    <div className="m-5">
                        <StickyNotes />
                    </div>

                    <div className="m-5">
                        <CalendarHome />
                    </div>
                </div>
            </div>
        </>
    );
}
