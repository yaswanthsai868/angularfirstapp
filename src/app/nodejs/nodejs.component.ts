import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-nodejs',
  templateUrl: './nodejs.component.html',
  styleUrls: ['./nodejs.component.css']
})
export class NodejsComponent implements OnInit {

  data:any;
  constructor(private ds:DataService) { }

  ngOnInit() {
    this.data=this.ds.nodeData;
  }

}
