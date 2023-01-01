import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Message } from './Message';
import { ChatResponse, Type } from './Response';
import Cookies from 'universal-cookie';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Chatbot Frontend';
  chats: ChatResponse[] = [];
  chat: Message | undefined;;
  cookie:Cookies = new Cookies();

  constructor(private appService: AppService) {}


  ngOnInit(): void {

    if(this.cookie.get('userID') === undefined){
      this.cookie.set('userID', uuid() ,{ path: '/'});
    }

    this.chat = new Message("Hi", this.cookie.get('userID'));

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

    this.appService.sendMessage(new Message(message, this.cookie.get('userID'))).subscribe(
      chatResponse => 
      {
        chatResponse = new ChatResponse(chatResponse.response, chatResponse.cards, chatResponse.quickReply),
        chatResponse.setType(Type.BOT),
        this.chats.push(chatResponse)
      });

  }

  sendQuickReply(payload: String){

    let yourChat = new ChatResponse(payload);
    yourChat.setType(Type.USER);
    this.chats.push(yourChat)

    this.appService.sendMessage(new Message(payload, this.cookie.get('userID'))).subscribe(
      chatResponse => 
      {
        chatResponse = new ChatResponse(chatResponse.response, chatResponse.cards, chatResponse.quickReply),
        chatResponse.setType(Type.BOT),
        this.chats.push(chatResponse)
      });
  }

}
