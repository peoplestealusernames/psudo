import { Clocks } from "./Clocks";
import { Weather } from "./Weather";

export function Display() {
    return (
        <div className="Display" style={{ width: 1080, height: 1920, backgroundColor: "black" }}>
            <Clocks />
            <Weather />
        </div>
    );
}