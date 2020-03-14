import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit{
  dataArray:object={};
  constructor(private ds:DataService) { }
  ngOnInit(): void {
    this.ds.getData().subscribe((data)=>{this.dataArray=data;});
  }
}
