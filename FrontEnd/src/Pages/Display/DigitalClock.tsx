import moment from "moment";
import { Component } from "react";
import { Typography, TypographyProps } from "@mui/material"

interface DigitalClockProps {
    TypoProp?: TypographyProps;
    DateFormat: string;
    UpdateInterval: number;
}


export default class DigitalClock extends Component<DigitalClockProps> {
    timer?: NodeJS.Timer;
    TypoProp?: TypographyProps;

    DateFormat: string
    UpdateInterval: number

    constructor(props: DigitalClockProps) {
        super(props);

        this.UpdateInterval = props.UpdateInterval
        this.DateFormat = props.DateFormat
        this.TypoProp = props.TypoProp
        this.state = { time: this.GetTime() };
    }

    render() {
        return (
            //@ts-ignore
            <Typography {...this.TypoProp}> {this.state.time} </Typography>
        );
    }

    componentDidMount() {
        this.timer = setInterval(() => this.setState({ time: this.GetTime() }), this.UpdateInterval);
    }

    componentWillUnmount() {
        //@ts-ignore
        clearInterval(this.timer);
    }

    GetTime() {
        return moment().format(this.DateFormat)
    }
}