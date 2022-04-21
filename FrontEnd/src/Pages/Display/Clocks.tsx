import { DigitalClock } from "./DigitalClock";

export function Clocks() {
    return (
        //TODO: better update system that doesnt run every 10 ms
        //TODO: try and get scaling size
        <div className="Clocks">
            <Clock UpdateInterval={100} DateFormat={"hh:mm:ss a"} top={"0px"} />
            <Clock UpdateInterval={60000} DateFormat={"ddd MMM Do"} top={"50px"} />
            <Clock UpdateInterval={60000} DateFormat={"L"} top={"100px"} />
        </div>
    );
}
type Props = { UpdateInterval: number, DateFormat: string, top: string }
function Clock({ UpdateInterval, DateFormat, top }: Props) {
    return <DigitalClock UpdateInterval={UpdateInterval} DateFormat={DateFormat}
        style={{ color: 'white', fontSize: 32, fontFamily: "bit", position: "fixed", top }}
    />
}