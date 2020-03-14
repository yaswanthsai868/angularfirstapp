import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  ngOnInit()
  {
    this.ls.userLoginStatus=false;
    this.ls.doLogout();
  }
  
  constructor(private ls:LoginService,private router:Router)
  {}
  readData(userObj)
  {
    this.ls.doLogin(userObj).subscribe((result)=>{
      if(result['message']=="Username doesn't exist")
      {
        alert("Username doesn't exist");
      }
      else if(result['message']=="Invalid password")
      {
        alert('Invalid password')
      }
      else
      {
        alert("Login successful for "+result['message'])
        this.ls.username=result['message'];
        this.ls.userLoginStatus=true;
        localStorage.setItem("token",result['token'])
        this.router.navigateByUrl('/user')
      }
    })
  }
}
