import React, { useCallback, useMemo, useState } from "react";
import { create, all } from "mathjs";

export default function Calculator() {
    const math = create(all);
    const [displayValue, setDisplayValue] = useState<string>("0");

    const CalcOnclick = useCallback(
        (value: string) => {
            switch (value) {
                //倒退一個
                case "play_arrow":
                    return setDisplayValue(
                        displayValue.substring(0, displayValue.length - 1)
                    );

                //清空
                case "AC":
                    return setDisplayValue("0");

                //加總
                case "=":
                    const result = math.evaluate(displayValue);
                    return setDisplayValue(result.toString());

                default:
                    return setDisplayValue(
                        displayValue !== "0" ? displayValue + value : value
                    );
            }
        },
        [displayValue]
    );

    const CalcBtns = useMemo((): string[] => {
        return [
            "play_arrow",
            "/",
            "*",
            "AC",
            "7",
            "8",
            "9",
            "-",
            "4",
            "5",
            "6",
            "+",
            "1",
            "2",
            "3",
            "=",
            "0",
            ".",
        ];
    }, []);

    return (
        <div className="calculator">
            <div className="calculator__display">
                <span className="w-100 overflow-hidden">{displayValue}</span>
            </div>
            <div className="calculator__buttons">
                {CalcBtns.map((value, index) => {
                    const isIcon = value === "play_arrow";
                    const isZero = value === "0";
                    const isEnter = value === "=";
                    return (
                        <>
                            <button
                                key={value + index}
                                className={`calculator__button d-flex align-items-center justify-content-center
                                    ${isZero ? "calculator__widerBtn" : ""}
                                    ${isEnter ? "calculator__enter" : ""}
                                    `}
                                onClick={() => CalcOnclick(value)}
                            >
                                <span
                                    className={
                                        isIcon ? "material-icons  p-0" : ""
                                    }
                                >
                                    {value}
                                </span>
                            </button>
                        </>
                    );
                })}
            </div>
        </div>
    );
}
