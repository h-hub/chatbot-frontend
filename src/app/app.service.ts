import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './Message';
import { ChatResponse, Card } from './Response';
import { environment } from './../env/environment';
import { catchError, map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AppService {

  private apiUrl = environment.apiUrl; 

  constructor(private http: HttpClient) { }

  sendMessage(message: Message): Observable<ChatResponse> {
    return this.http.post<ChatResponse>(this.apiUrl+"/df_text_query", message).pipe(
      map(chatResponse => new ChatResponse(chatResponse.response, 
      chatResponse.cards?.map(val => new Card(val.header, val.description, val.imageUrl, val.link))))
    );
  }
}