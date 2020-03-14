import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TechnologyComponent } from './technology/technology.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { AngularComponent } from './angular/angular.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { ExpressjsComponent } from './expressjs/expressjs.component';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';


const routes: Routes = [
  {path:'',redirectTo:"login",pathMatch:"full"},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:"user/register",component:RegisterComponent},
  {path:"technology",component:TechnologyComponent,children:[
    {path:"js",component:JavascriptComponent},
    {path:"an",component:AngularComponent},
    {path:"njs",component:NodejsComponent},
    {path:"expjs",component:ExpressjsComponent}
  ]},
  {path:"aboutus",component:AboutusComponent},
  {path:"contactus",component:ContactusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
