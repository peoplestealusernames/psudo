import DigitalClock from "./DigitalClock";

export function Clocks() {
    return (
        //TODO: better update system that doesnt run every 10 ms
        //TODO: try and get scaling size
        <div className="Clocks" style={{ position: "fixed", top: "0px", left: "0px", backgroundColor: "black" }}>
            <DigitalClock UpdateInterval={100} DateFormat="hh:mm:ss"
                TypoProp={{ color: 'wheat', fontSize: 32, style: { fontFamily: "bit", position: "fixed", top: "0px", left: "0px" } }}
            />
            <DigitalClock UpdateInterval={10} DateFormat="SS a"
                TypoProp={{ color: 'wheat', fontSize: 32, style: { fontFamily: "bit", position: "fixed", top: "50px", left: "0px" } }}
            />
            <DigitalClock UpdateInterval={60000} DateFormat="ddd MMM Do"
                TypoProp={{ color: 'wheat', fontSize: 32, style: { fontFamily: "bit", position: "fixed", top: "100px", left: "0px" } }}
            />
            <DigitalClock UpdateInterval={60000} DateFormat="L"
                TypoProp={{ color: 'wheat', fontSize: 32, style: { fontFamily: "bit", position: "fixed", top: "150px", left: "0px" } }}
            />
        </div>
    );
}
