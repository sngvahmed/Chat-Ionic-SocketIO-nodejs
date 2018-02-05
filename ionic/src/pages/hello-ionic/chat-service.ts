import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
import 'rxjs/add/operator/map'; 

@Injectable()
export class ChatService {

    constructor(private socket: Socket) { }

    sendMessage(msg: string){
        console.log("send message", msg)
        this.socket.emit("textChat", msg);
    }
    
    getMessage() {
        console.log("show here")
        // this.socket.on("messageBroadCast")
        return this.socket.fromEvent<any>("messageBroadCast")
    }
}