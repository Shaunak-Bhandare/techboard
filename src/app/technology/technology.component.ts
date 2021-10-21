import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  // display data
  technologyDisplay:any = [];

  ngOnInit(): void {

    this._services.techNews().subscribe((result)=>{
      this.technologyDisplay = result.articles;
    })
  }

}
