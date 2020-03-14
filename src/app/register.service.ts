import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  //injecting HttpCLient object
  constructor(private hc:HttpClient) { }
  
  //method to make httppost request
  doRegister(userObject):Observable<any>
  {
    return this.hc.post('/user/register',userObject);
  }
}
