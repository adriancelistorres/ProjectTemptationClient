import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILoginUser } from '../Interfaces/IloginUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public myAppUrl: string;
  // private myApi: string;

  constructor(private http:HttpClient) {
    this.myAppUrl = environment.endpoint;
    // this.myApi = 'login';
  }

  login(userlogin:ILoginUser):Observable<string>{
    return this.http.post<string>(`${this.myAppUrl}login`,userlogin)
  }
}
