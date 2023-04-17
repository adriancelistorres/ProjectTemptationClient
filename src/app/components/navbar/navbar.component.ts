import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements DoCheck{

  inicio_crear: Boolean = false
  perfil: Boolean = false
  constructor(private cookiesService: CookieService,
    private router: Router) { }

    ngDoCheck(): void {
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
}
