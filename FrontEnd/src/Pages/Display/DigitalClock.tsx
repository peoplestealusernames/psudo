import moment from "moment";
import { Component, CSSProperties, useEffect, useState } from "react";

interface DigitalClockProps {
    style?: CSSProperties;
    DateFormat: string;
    UpdateInterval: number;
}

export function DigitalClock({ style, DateFormat, UpdateInterval }: DigitalClockProps) {
    const [timer, setTimer] = useState<NodeJS.Timer>()
    const [time, setTime] = useState<string>()

    useEffect(() => {
        GetTime()

        if (timer)
            clearInterval(timer);

        setTimer(setInterval(GetTime, UpdateInterval));

        return () => {
            if (timer)
                clearInterval(timer);
        }
    }, [timer])


    function GetTime() {
        setTime(moment().format(DateFormat))
    }

    return (
        <div style={style}> {time} </div>
    );
}