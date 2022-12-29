import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './Message';
import { ChatResponse } from './Response';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  // private apiUrl = 'https://damp-beyond-01462.herokuapp.com/api'; 
  private apiUrl = 'http://www.localhost:8080/api'; 

  constructor(private http: HttpClient) { }

  sendMessage(message: Message): Observable<ChatResponse> {
    return this.http.post<ChatResponse>(this.apiUrl+"/df_text_query", message);
  }

}
