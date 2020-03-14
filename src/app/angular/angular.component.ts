import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {

  data:Array<string>=[];
  constructor(private ds:DataService) { }

  ngOnInit() {
    this.data=this.ds.angularData;
  }

}
