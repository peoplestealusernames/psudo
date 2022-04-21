import { JsonDB } from 'node-json-db'
import { Config } from 'node-json-db/dist/lib/JsonDBConfig';
import { WebSocket, WebSocketServer } from 'ws';

const db = new JsonDB(new Config("myDataBase", true, false, '/'));

const wss = new WebSocketServer({ port: 8080 }, () => { console.log("Open") })

wss.on('connection', (socket: WebSocket) => {
    console.log("Sock")
    Loop(socket)
})

async function Loop(socket: WebSocket, n = 0) {
    await Wait(1000)
    while (socket.readyState == socket.OPEN) {
        socket.send(n, console.log)
        n++;
        await Wait(1000);
    }
}

function Wait(ms: number): Promise<void> {
    return new Promise((res, rej) => {
        setInterval(res, ms)
    })
}