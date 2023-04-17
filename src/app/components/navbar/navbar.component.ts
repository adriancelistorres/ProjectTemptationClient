import { AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements DoCheck{

  reclamovalidador: boolean |any;
  idperson: number = 0;
  inicio_crear: Boolean = false
  perfil: Boolean = false
  constructor(private cookiesService: CookieService,
    private router: Router) { }

    ngDoCheck(): void {
      this.validaciones()
      if (this.cookiesService.get("tokenclient") != "") {
        this.perfil = true
        this.inicio_crear = false
      } else {
        this.inicio_crear = true
        this.perfil=false
      }
    }
  
  cerrarCesion() {
    localStorage.clear()
    this.cookiesService.deleteAll()
    this.router.navigate(['/menu'])
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
