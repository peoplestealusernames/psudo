import { Component } from "react";

class UpdaterWS extends Component {
    ws?: WebSocket

    constructor(props: any) {
        super(props)
        this.state = { val: "b" }
    }

    onmessage(e: any) {
        const data = JSON.parse(e.data);
        console.log(data)
        this.setState({
            val: data
        })
        return
    }

    componentDidMount() {
        if (this.ws) {
            this.ws.close()
        }

        this.ws = new WebSocket("ws://localhost:8080")
        console.log("Connect");

        this.ws.onmessage = this.onmessage.bind(this)
    }

    componentWillUnmount() {
        if (this.ws) {
            this.ws.close()
        }
    }

    render() {
        //@ts-ignore
        return <text color="white" > B {this.state.val} </text >
    }
}