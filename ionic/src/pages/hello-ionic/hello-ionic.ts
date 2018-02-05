import { Component } from '@angular/core';
import { ChatService } from './chat-service';
import { appendNgContent } from '@angular/core/src/view/ng_content';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
    messages: Array<string> = []
    chatMsg = ""

    constructor(private chatService :ChatService) {
        var self = this;
        chatService.getMessage().subscribe(function(message){
            self.appendToMessages(message)
        });
    }

    sendMsg(){
        this.chatService.sendMessage(this.chatMsg)
        this.appendToMessages(this.chatMsg)
        this.chatMsg = ""
    }

    appendToMessages(message){
        this.messages.push(message)
    }
}
