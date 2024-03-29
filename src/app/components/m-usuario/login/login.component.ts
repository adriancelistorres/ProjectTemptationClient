import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { ILoginUser } from 'src/app/Interfaces/IloginUser';
import { LoginService } from 'src/app/services/login.service';
import jwt_decode from 'jwt-decode';
import { ErrorService } from 'src/app/utils/error/error.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loading: boolean = false;
  routeo : any
   rol:number|any;
   person: number|any;

  constructor(
    private toastr: ToastrService,
    private _loginService: LoginService,
    private router: Router,
    private _errorServie: ErrorService,
    private cookiesService: CookieService, // private localstorage:Storage
    // private sharedService: DatasharingService
  ) {
    // this.cookiesService.delete('token');
    // this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.cookiesService.delete('tokenclient');
    this.router.navigate(['/login']);
    // this.login ();
  }

  login() {
    if (this.username == '' || this.password == '') {
      this.toastr.error('todos los campos son obligatorios', 'Error');
      return;
    }

    const user: ILoginUser = {
      username: this.username,
      password: this.password,
    };
    this.loading = true;


    setTimeout(() => {
      this._loginService.login(user).subscribe({
        next: (token) => {
          // this.loading = true;
          // this.localstorage.setItem('token',`${JSON.stringify(token)}`)
          this.cookiesService.set('tokenclient', JSON.stringify(token));
          const tok:any=token
          // console.log('uno',tok);
          const finalToken = tok['token'];
          // console.log('dos',finalToken);
          const decodedToken:any = jwt_decode(finalToken);
          console.log('tres',decodedToken);
          const role = decodedToken.rol;
          const name = decodedToken.name;
          const lastname = decodedToken.lastname;
          const username = decodedToken.username;
          const dni = decodedToken.dni;
          const idperson = decodedToken.idperson;


          // console.log('rol:', role);
          this.rol = role;
          localStorage.setItem('rollogin', this.rol);
          localStorage.setItem('idperson', idperson);
          localStorage.setItem('username', username);
          localStorage.setItem('name', name);
          localStorage.setItem('lastname', lastname);
          localStorage.setItem('dni', dni);
          // let idAlmaceneado = localStorage.getItem('idperson');

          let idpersonAlmacenado = localStorage.getItem('idperson')
          let rolAlmacenado = localStorage.getItem('rollogin');
          let nameAlmacenado = localStorage.getItem('rollogin');
          let lastnameAlmacenado = localStorage.getItem('rollogin');
          let usernameAlmacenado = localStorage.getItem('rollogin');
          let dniAlmacenado = localStorage.getItem('rollogin');

          console.log('LOGloginPERSON',idpersonAlmacenado);
          console.log('LOGloginrol',rolAlmacenado);
          console.log('El rol guardado en la clase es:', rolAlmacenado); // mostramos el valor del rol en la consola

        },
        error: (e: HttpErrorResponse) => {
          this._errorServie.msjError(e);
          this.loading = false;
        },
      });
       const url :any = localStorage.getItem('url');
       this.routeo = `${url.replace(/"/g, '')}`;
       console.log("url",url)
       this.router.navigate([this.routeo ]);
      


    }, 1000);

  }


  // disparador(){
  //   this.sharedService.disparador.emit({
  //     data:LoginComponent.rol,}
  //   )
  // }


  // msjError(e:HttpErrorResponse){
  //   if(e.error.msg){
  //     this.toastr.error(e.error.msg,'ERROR');
  //   }else{
  //     this.toastr.error('ocurrio un error','Error')
  //   }
  // }
}
