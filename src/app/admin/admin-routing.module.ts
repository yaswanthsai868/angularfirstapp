import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import {PagenotfoundComponent} from '../pagenotfound/pagenotfound.component'


const routes: Routes = [
  {path:'admin',component:AdmindashboardComponent,children:[{path:'adminprofile',component:AdminprofileComponent}]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
