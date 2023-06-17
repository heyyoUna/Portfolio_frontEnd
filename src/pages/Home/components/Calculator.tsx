import React, { useCallback, useMemo, useState } from "react";
import { create, all } from "mathjs";

export default function Calculator() {
    const math = create(all);
    const [displayValue, setDisplayValue] = useState<string>("0");

    const HandleClick = useCallback(
        (value: string) => {
            console.log(displayValue !== "0" ? displayValue + value : value);
            setDisplayValue(
                displayValue !== "0" ? displayValue + value : value
            );
        },
        [displayValue]
    );

    const HandleClear = useCallback(() => {
        setDisplayValue("0");
    }, []);

    const handleCalculate = useCallback(() => {
        try {
            const result = math.evaluate(displayValue);
            setDisplayValue(result.toString());
        } catch (error) {
            setDisplayValue("Error");
        }
    }, [displayValue]);

    const CalcBtnsLeft = useMemo((): string[] => {
        return [
            "play_arrow",
            "/",
            "*",
            "7",
            "8",
            "9",
            "4",
            "5",
            "6",
            "1",
            "2",
            "3",
            "0",
            ".",
        ];
    }, []);
    const CalcBtnsRight = useMemo((): string[] => {
        return ["-", "+", "="];
    }, []);

    return (
        <div className="calculator">
            <div className="calculator__display">
                <span>{displayValue}</span>
            </div>
            <div className="d-flex">
                <div className="calculator__buttons">
                    {CalcBtnsLeft.map((value, index) => {
                        const isIcon = value === "play_arrow";
                        const isZero = value === "0";
                        return (
                            <>
                                <button
                                    key={value + index}
                                    className={`calculator__button d-flex align-items-center justify-content-center
                                    ${isZero ? "calculator__widerBtn" : ""}`}
                                    onClick={() => HandleClick(value)}
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
                <div className="d-flex flex-column">
                    <div className="calculator__buttons">
                        {CalcBtnsRight.map((value, index) => {
                            return (
                                <>
                                    <button
                                        key={value + index}
                                        className={`calculator__button
                                        calculator_heigherBtn
                                        d-flex align-items-center justify-content-center
                                 `}
                                        onClick={() => HandleClick(value)}
                                    >
                                        <span>{value}</span>
                                    </button>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
            {/* 
            <div className="calculator__buttons">
                <button
                    className="calculator__button"
                    onClick={() => HandleClick("7")}
                >
                    <span className="material-icons  p-0">play_arrow</span>
                </button>
                <button
                    className="calculator__button"
                    onClick={() => HandleClick("8")}
                >
                    <span>/</span>
                </button>
                <button
                    className="calculator__button"
                    onClick={() => HandleClick("9")}
                >
                    <span>*</span>
                </button>
                <button
                    className="calculator__button"
                    onClick={() => HandleClick("+")}
                >
                    -
                </button>

                <button
                    className="calculator__button"
                    onClick={() => HandleClick("7")}
                >
                    <span>7</span>
                </button>
                <button
                    className="calculator__button"
                    onClick={() => HandleClick("8")}
                >
                    <span>8</span>
                </button>
                <button
                    className="calculator__button"
                    onClick={() => HandleClick("9")}
                >
                    <span>9</span>
                </button>
                <button
                    className="calculator__button"
                    onClick={() => HandleClick("+")}
                >
                    <span>+</span>
                </button>
                <button
                    className="calculator__button"
                    onClick={() => HandleClick("4")}
                >
                    <span>4</span>
                </button>
                <button
                    className="calculator__button"
                    onClick={() => HandleClick("5")}
                >
                    <span>5</span>
                </button>
                <button
                    className="calculator__button"
                    onClick={() => HandleClick("6")}
                >
                    <span>6</span>
                </button>
                <button
                    className="calculator__button"
                    onClick={() => HandleClick("-")}
                >
                    <span>7</span>
                </button>
                <button
                    className="calculator__button"
                    onClick={() => HandleClick("1")}
                >
                    <span>8</span>
                </button>
                <button
                    className="calculator__button"
                    onClick={() => HandleClick("2")}
                >
                    2
                </button>
                <button
                    className="calculator__button"
                    onClick={() => HandleClick("3")}
                >
                    3
                </button>
                <button
                    className="calculator__button"
                    onClick={() => HandleClick("*")}
                >
                    *
                </button>
                <button
                    className="calculator__button"
                    onClick={() => HandleClick("0")}
                >
                    0
                </button>
                <button
                    className="calculator__button"
                    onClick={() => HandleClick(".")}
                >
                    .
                </button>
                <button
                    className="calculator__button"
                    onClick={() => handleCalculate()}
                >
                    =
                </button>
                <button
                    className="calculator__button"
                    onClick={() => HandleClick("/")}
                >
                    /
                </button>
                <button
                    className="calculator__button calculator__button--clear"
                    onClick={() => HandleClear()}
                >
                    Clear
                </button>
            </div> */}
        </div>
    );
}
