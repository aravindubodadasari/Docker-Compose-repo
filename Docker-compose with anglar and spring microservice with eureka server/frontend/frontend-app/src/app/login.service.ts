import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 //baseUrl:string ="http://localhost:9090/login";
baseUrl:string ="http://18.212.164.128:9090/login";
  constructor(public httpClient:HttpClient) { }

  signIn(login:any):Observable<string> {
    return this.httpClient.post(this.baseUrl+"/signIn",login,{responseType:'text'})
  }

  signUp(login:any):Observable<string> {
    return this.httpClient.post(this.baseUrl+"/signUp",login,{responseType:'text'})
  }

}
