import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// declare var tns:any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit  {

  ngOnInit(): void {
    const url = this.router.url;
    localStorage.setItem('url',url);
    console.log("URL",url);
  }
  constructor( private router:Router,) {
    this.ngOnInit()
  }
}
