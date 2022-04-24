import moment from "moment";
import { CSSProperties, useEffect, useRef, useState } from "react";

interface DigitalClockProps {
    style?: CSSProperties;
    DateFormat: string;
    UpdateInterval: number;
}

//let N = 0;
export function DigitalClock({ style, DateFormat, UpdateInterval }: DigitalClockProps) {
    const timerRef = useRef<NodeJS.Timer | null>(null)
    const [time, setTime] = useState<string>()

    useEffect(() => {
        GetTime()

        if (timerRef.current)
            clearInterval(timerRef.current);

        timerRef.current = setInterval(GetTime, UpdateInterval);

        return () => {
            if (timerRef.current)
                clearInterval(timerRef.current);
        }
    }, [timerRef])


    function GetTime() {
        setTime(moment().format(DateFormat))
        //N++;
        //setTime(N.toString())
    }

    return (
        <div style={style}> {time} </div>
    );
}