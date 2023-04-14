import { AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements DoCheck {
  reclamovalidador: boolean |any;
  idperson: number = 0;
  constructor(private cookieservice: CookieService) { }
    
  
  ngDoCheck() {
    this.validaciones()
    }


    validaciones(){
      if(localStorage.getItem("idperson") != null){
        this.reclamovalidador = true;
        console.log("Usuario Existe",this.reclamovalidador)
      }else {
        this.reclamovalidador = false;
        console.log("Usuario NO EXiste",this.reclamovalidador)
      }
    }



}
