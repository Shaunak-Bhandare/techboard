import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  // display data
  navbarDisplay:any =[];

  ngOnInit(): void {

    this._services.topHeading().subscribe((result)=>{
      console.log(result);
      this.navbarDisplay = result.articles;
    })

  }

}
