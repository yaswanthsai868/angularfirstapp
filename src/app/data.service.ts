import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient){}

  javaScriptData:Array<string>=["dynamic datatypes","for-of loop","Prototypes"]
  angularData:Array<string>=["modules","components","services","directives"]
  nodeData:Array<string>=["Node","javascript","Npm"]
  expressJsData:Array<string>=["javascript","Express"]
  signInData:SignIn=new SignIn();
  signUpData:SignUp=new SignUp();
  getData():Observable<object>
  {
    return this.hc.get<object>('https://reqres.in/api/users');
  }
}
export class SignIn{
  constructor(){}
  private email:string;
  private password:string;
  setEmail(email:string):void
  {
    this.email=email;
  }
  setPassword(password:string):void
  {
    this.password=password;
  }
  getEmail():string
  {
    return this.email;
  }
  getPassword():string
  {
    return this.password;
  }
}
export class SignUp{
  constructor(){}
  private first:string;
  private last:string;
  private email:string;
  private password:string;
  private rPassword:string;
  setFirst(first:string):void
  {
    this.first=first;
  }
  setLast(last:string):void
  {
    this.last=last;
  }
  setEmail(email:string):void
  {
    this.email=email;
  }
  setPassword(password:string):void
  {
    this.password=password;
  }
  setRPassword(rPassword:string):void
  {
    this.rPassword=rPassword;
  }
  getFirst():string
  {
    return this.first;
  }
  getLast():string
  {
    return this.last;
  }
  getEmail():string
  {
    return this.email;
  }
  getPassword():string
  {
    return this.password;
  }
  getRPassword():string
  {
    return this.rPassword;
  }
  verifyPassword():boolean
  {
    if(this.password===this.rPassword)
    {
      return true;
    }
    return false;
  }
}