import { Component } from "react";
import EventEmitter from "events";

class Updater extends Component<{ Clock: Test }> {
    Clock: Test

    constructor(props: any) {
        super(props)
        this.state = { val: "b" }
        this.Clock = props.Clock
    }

    Update(val = "Aye") {
        console.log(val)

        this.setState({
            val
        })
        return
    }

    componentDidMount() {
        this.Clock.on("run", this.Update.bind(this))
    }

    componentWillUnmount() {
        this.Clock.removeListener("run", this.Update.bind(this))
    }

    render() {
        //@ts-ignore
        return <Text color="white" > B {this.state.val} </Text >
    }
}

class Test extends EventEmitter {
    constructor(ms: number) {
        super()
        setInterval(() => this.emit("run"), ms)
    }
}

//<Updater Clock={new Test(5000)} />