import { useMemo, useState } from "react";
import Navbar from "../../components/Navbar";
import { DndProvider } from "react-dnd";

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
                <div style={{ gridRow: "2" }}>
                    <div></div>
                </div>
            </div>
        </>
    );
}
