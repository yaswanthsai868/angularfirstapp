import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  constructor(private robj:RegisterService,private router:Router) { }
  submitForm(userObj)
  {
    console.log(userObj);
    this.robj.doRegister(userObj).subscribe((req)=>{
      if(req['message']=='User already exists')
      {
        alert('username already existed');
      }
      if(req['message']=='Registration successful')
      {
        alert("registration successful");
        this.router.navigateByUrl('/login');
      }
    });
  }

}
