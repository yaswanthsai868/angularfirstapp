import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import {PagenotfoundComponent} from '../pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path:'user',component:UserdashboardComponent,children:[
    {path:'userprofile',component:UserprofileComponent}
]},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
