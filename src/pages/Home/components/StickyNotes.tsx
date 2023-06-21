import { useCallback, useMemo, useRef, useState } from "react";

type bgColor = "_yellow" | "_green" | "_pink" | "_blue" | "_gray";
interface note_state {
    id: number;
    value: string;
    //背景顏色
    bgColor: bgColor;
    //是否開啟，顏色選擇器
    colorSelect: boolean;
}
export default function StickyNotes() {
    const emptyNote: note_state = useMemo(() => {
        return { id: 0, value: "", bgColor: "_yellow", colorSelect: false };
    }, []);
    const [note, setNote] = useState<Array<note_state>>([emptyNote]);

    const stickynoteBg: bgColor[] = useMemo(() => {
        return ["_yellow", "_green", "_pink", "_blue", "_gray"];
    }, []);

    return (
        <>
            <div
                className="d-flex flex-wrap stickyNotes"
                key={JSON.stringify(note)}
            >
                {note.map((value, index) => {
                    //各自的背景色
                    const bg = "noteBg" + value.bgColor;
                    return (
                        <>
                            <div
                                className={` m-1 ${bg}`}
                                key={value.id + value.value + index}
                            >
                                <div className="w-100 d-flex justify-content-between">
                                    {!value.colorSelect ? (
                                        <>
                                            <button
                                                onClick={() => {
                                                    setNote((prev) => {
                                                        const lastone =
                                                            prev[
                                                                prev.length - 1
                                                            ];
                                                        const newOne: note_state =
                                                            {
                                                                ...emptyNote,
                                                                id:
                                                                    lastone.id +
                                                                    1,
                                                                value: "",
                                                            };

                                                        return [
                                                            ...prev,
                                                            newOne,
                                                        ];
                                                    });
                                                }}
                                            >
                                                +
                                            </button>
                                            <div className="d-flex">
                                                <button
                                                    onClick={() => {
                                                        setNote((prev) => {
                                                            const ta =
                                                                prev.find(
                                                                    (v) =>
                                                                        v.id ===
                                                                        value.id
                                                                );
                                                            if (ta) {
                                                                ta.colorSelect =
                                                                    true;
                                                            }
                                                            return [...prev];
                                                        });
                                                    }}
                                                >
                                                    ...
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        const arr: Array<note_state> =
                                                            JSON.parse(
                                                                JSON.stringify(
                                                                    note
                                                                )
                                                            );
                                                        const ta =
                                                            arr.findIndex(
                                                                (v) =>
                                                                    v.id ===
                                                                    value.id
                                                            );
                                                        if (ta !== -1) {
                                                            arr.splice(ta, 1);
                                                        }
                                                        setNote(arr);
                                                    }}
                                                >
                                                    X
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="d-flex">
                                                {stickynoteBg.map(
                                                    (val, idx) => {
                                                        const colorOption =
                                                            "noteBg" + val;
                                                        const isSelect =
                                                            bg === colorOption;

                                                        return (
                                                            <>
                                                                <div
                                                                    key={
                                                                        val +
                                                                        idx
                                                                    }
                                                                    className={`m-1 border noteBg d-flex justify-content-center align-items-center ${colorOption}`}
                                                                    onClick={() => {
                                                                        setNote(
                                                                            (
                                                                                prev
                                                                            ) => {
                                                                                const ta =
                                                                                    prev.find(
                                                                                        (
                                                                                            v
                                                                                        ) =>
                                                                                            v.id ===
                                                                                            value.id
                                                                                    );
                                                                                if (
                                                                                    ta
                                                                                ) {
                                                                                    ta.bgColor =
                                                                                        val;
                                                                                }
                                                                                return [
                                                                                    ...prev,
                                                                                ];
                                                                            }
                                                                        );
                                                                    }}
                                                                >
                                                                    {isSelect && (
                                                                        <>
                                                                            <span className="material-icons">
                                                                                done
                                                                            </span>
                                                                        </>
                                                                    )}
                                                                </div>
                                                            </>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </>
                                    )}
                                </div>

                                <textarea
                                    name=""
                                    id=""
                                    className={`${bg}`}
                                    cols={40}
                                    rows={10}
                                    style={{
                                        color: "#fff",
                                        resize: "both",
                                    }}
                                    placeholder="請填入文字..."
                                    onClick={() => {
                                        if (value.colorSelect) {
                                            setNote((prev) => {
                                                const ta = prev.find(
                                                    (v) => v.id === value.id
                                                );
                                                if (ta) {
                                                    ta.colorSelect = false;
                                                }
                                                return [...prev];
                                            });
                                        }
                                    }}
                                    onBlur={(e) => {
                                        setNote((prev) => {
                                            const ta = prev.find(
                                                (v) => v.id === value.id
                                            );
                                            if (ta) {
                                                ta.value = e.target.value;
                                            }
                                            return [...prev];
                                        });
                                    }}
                                    defaultValue={value.value}
                                ></textarea>
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
}
