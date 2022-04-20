import DigitalClock from "./DigitalClock";
import { Clocks } from "./Clocks";

export function Display() {
    return (
        //TODO: better update system that doesnt run every 10 ms
        <div className="Display" style={{ width: 1080, height: 1920, backgroundColor: "black" }}>
            <Clocks />
        </div>
    );
}