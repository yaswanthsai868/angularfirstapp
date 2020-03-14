import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {

  data:Array<string>=[]
  constructor(private ds:DataService) { }
  ngOnInit(){
    this.data=this.ds.javaScriptData;
  }
}
