import React, { useState, useEffect } from "react";

const Clock: React.FC = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const formatTime = (value: number) => {
        return value < 10 ? `0${value}` : value.toString();
    };

    const hours = formatTime(time.getHours());
    const minutes = formatTime(time.getMinutes());
    const seconds = formatTime(time.getSeconds());

    const getRotationStyle = (value: number, total: number) => {
        const rotation = (value / total) * 360;
        const transition = value === 0 ? "none" : "transform 1s linear";
        return {
            transform: `rotate(${rotation}deg)`,
            transition,
        };
    };

    const getMinuteRotationStyle = () => {
        const totalSeconds = time.getSeconds() + time.getMinutes() * 60;
        const rotation = (totalSeconds / 3600) * 360;
        const transition = totalSeconds === 0 ? "none" : "transform 60s linear";
        return {
            transform: `rotate(${rotation}deg)`,
            transition,
        };
    };

    return (
        <div className="clock">
            <div
                className="hour-hand"
                style={getRotationStyle(time.getHours() % 12, 12)}
            ></div>
            <div className="minute-hand" style={getMinuteRotationStyle()}></div>
            <div
                className="second-hand"
                style={getRotationStyle(time.getSeconds(), 60)}
            ></div>
            <div className="center"></div>
            <div className="time">
                <span className="hour">{hours}</span>
                <span className="minute">{minutes}</span>
                <span className="second">{seconds}</span>
            </div>
        </div>
    );
};

export default Clock;
