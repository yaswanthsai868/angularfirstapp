import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private hc:HttpClient) { }

  username:string;
  userLoginStatus:boolean=false;

  //method to make http post req
  doLogin(userObj):Observable<any>
  {
    return this.hc.post('/user/login',userObj);
  }
  doLogout()
  {
    localStorage.removeItem('token');
  }
}
