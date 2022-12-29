import { Component } from '@angular/core';
import { AppService } from './app.service';
import {Chat} from './Chat';
import { Message } from './Message';
import { ChatResponse, Type } from './Response';
import { catchError, map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Chatbot Frontend';
  chats: ChatResponse[] = [];
  chat: Message = new Message("Hi");

  constructor(private appService: AppService) {}


  ngOnInit(): void {

    let yourChat = new ChatResponse(this.chat.text);
    yourChat.setType(Type.USER);
    this.chats.push(yourChat)

    this.appService.sendMessage(this.chat).subscribe(
      chatResponse => 
      {
        chatResponse = new ChatResponse(chatResponse.response),
        chatResponse.setType(Type.BOT),
        this.chats.push(chatResponse)
      });
  }

  send(message: String): void {
    
    let yourChat = new ChatResponse(message);
    yourChat.setType(Type.USER);
    this.chats.push(yourChat)

    this.appService.sendMessage(new Message(message)).subscribe(
      chatResponse => 
      {
        chatResponse = new ChatResponse(chatResponse.response),
        chatResponse.setType(Type.BOT),
        this.chats.push(chatResponse)
      });

  }

}
