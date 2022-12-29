import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './Message';
import { ChatResponse } from './Response';
import { environment } from './../env/environment';



@Injectable({
  providedIn: 'root'
})
export class AppService {

  private apiUrl = environment.apiUrl; 

  constructor(private http: HttpClient) { }

  sendMessage(message: Message): Observable<ChatResponse> {
    return this.http.post<ChatResponse>(this.apiUrl+"/df_text_query", message);
  }

}
