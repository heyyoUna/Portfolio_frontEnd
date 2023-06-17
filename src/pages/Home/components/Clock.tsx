import React, { useState, useEffect, useCallback } from "react";
import img_clock from "../../../img/clock.png";

const Clock: React.FC = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const GetHandRotation = useCallback((unit: number, max: number): string => {
        const rotation = (360 * unit) / max;
        return `rotate(${rotation}deg)`;
    }, []);

    return (
        <div className="clock">
            <div className="clock-face">
                <div
                    className="hand hour-hand"
                    style={{ transform: GetHandRotation(time.getHours(), 12) }}
                />
                <div
                    className="hand minute-hand"
                    style={{
                        transform: GetHandRotation(time.getMinutes(), 60),
                    }}
                />
                <div
                    className="hand second-hand"
                    style={{
                        transform: GetHandRotation(time.getSeconds(), 60),
                    }}
                />

                <div className="markings">
                    <figure>
                        <img
                            src={img_clock}
                            style={{
                                height: "100%",
                                width: "100%",
                            }}
                            alt=""
                        />
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Clock;
