import Calendar from "react-calendar";
import moment from "moment";
import React, { useMemo, useState } from "react";

export default function CalendarHome() {
    const [calendar, setCalendar] = useState(new Date());
    const tableData = useMemo(() => {
        const arr = [
            {
                applier: "NF220003 張群嫄",
                date: "2023/01/02",
                start: "",
                end: "",
                status: 0,
                remark: "元旦補假",
            },
            {
                applier: "NF220003 張群嫄",
                date: "2023/01/03",
                start: "10:25",
                end: "18:30",
                status: 0,
                form: "特休假",
                remark: "特休1小時",
            },
            {
                applier: "NF220003 張群嫄",
                date: "2023/01/04",
                start: "10:30",
                end: "18:30",
                status: 1,
                form: "",
                remark: "",
            },
            {
                applier: "NF220003 張群嫄",
                date: "2023/01/05",
                start: "09:31",
                end: "18:40",
                status: 0,
                remark: "",
            },
            {
                applier: "NF220003 張群嫄",
                date: "2023/01/06",
                start: "09:15",
                end: "18:30",
                status: 0,
                remark: "",
            },
            {
                applier: "NF220003 張群嫄",
                date: "2023/01/07",
                start: "09:15",
                end: "18:30",
                status: 0,
                remark: "",
            },
        ];
        return arr;
    }, []);

    const slectedDate = useMemo(() => {
        if (tableData) {
            const ta = tableData.find(
                (v) =>
                    v.date === moment(new Date(calendar)).format("YYYY/MM/DD")
            );
            if (ta) {
                return ta;
            } else {
                return null;
            }
        }
    }, [tableData, calendar]);

    const errDate = useMemo(() => {
        if (tableData) {
            const arr = tableData.filter((v) => v.remark || v.status !== 0);
            const ta = arr.find(
                (v) =>
                    v.date === moment(new Date(calendar)).format("YYYY/MM/DD")
            );

            if (ta) {
                return ta;
            } else {
                return false;
            }
        }
    }, [tableData, calendar]);

    return (
        <>
            <div
                className={"block block-padding-small block-mt"}
                // style={{ width: "20vw" }}
            >
                <div className={"w-100"}>
                    <Calendar
                        value={calendar}
                        // onChange={setCalendar}
                        //日期格式
                        formatDay={(locale, date) =>
                            new Intl.DateTimeFormat("fr-CA", {
                                day: "2-digit",
                            }).format(date)
                        }
                        //日期下的內容(開始日/所有日期/當前查看的模式)
                        tileContent={({ activeStartDate, date, view }) => {
                            // console.log(activeStartDate, date, view)
                            const arr = tableData.filter((v) => v.remark);
                            return view === "month" &&
                                arr.some(
                                    (v) =>
                                        v.date ===
                                        moment(new Date(date)).format(
                                            "YYYY/MM/DD"
                                        )
                                ) ? (
                                <>
                                    <div>
                                        <label
                                            htmlFor=""
                                            className={"light-gray"}
                                        >
                                            ●
                                        </label>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <label
                                            htmlFor=""
                                            className={"light-gray"}
                                        ></label>
                                    </div>
                                </>
                            );
                        }}
                        // 改變日期顏色(開始日/所有日期/當前查看的模式)
                        tileClassName={({ activeStartDate, date, view }) => {
                            // console.log(activeStartDate, date, view)
                            const arr = tableData.filter((v) => v.status === 1);
                            return view === "month" &&
                                arr.some(
                                    (v) =>
                                        v.date ===
                                        moment(new Date(date)).format(
                                            "YYYY/MM/DD"
                                        )
                                )
                                ? "red"
                                : activeStartDate.getMonth() !== date.getMonth()
                                ? "light-gray"
                                : "";
                        }}
                    />
                </div>
                <hr className={"hr w-100"} />
                <div>
                    <label htmlFor="">
                        打卡時間：{" "}
                        {slectedDate
                            ? slectedDate.start + " / " + slectedDate.end
                            : "- / -"}
                    </label>
                </div>

                <label
                    htmlFor=""
                    className={`${
                        errDate ? (!errDate.remark ? "red" : "") : "light-gray"
                    }`}
                >
                    {errDate
                        ? errDate.remark
                            ? errDate.remark
                            : "異常未處理"
                        : "沒有事件"}
                </label>
            </div>
        </>
    );
}
