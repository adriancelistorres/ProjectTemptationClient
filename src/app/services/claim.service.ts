import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { IClaims } from '../Interfaces/IClaims';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  //CREANDO ATRIBUTO PRIVADO '_refreshRequired'
  private _refreshRequired = new Subject<void>();

  //METODO 'RefreshRequired'
  get RefreshRequired() {
    return this._refreshRequired;
  }

  public myAppUrl: string;
  private myApi: string;
  private myApi2: string;
  constructor(private http: HttpClient) 
  {
    this.myAppUrl = environment.endpoint;
    this.myApi = 'claims2';
    this.myApi2 = 'claim2';
  }

  getClaims(): Observable<IClaims[]> {
    return this.http.get<IClaims[]>(
      `${this.myAppUrl}${this.myApi}`
    );
  }

  getOneClaims(id:number): Observable<IClaims> {
    return this.http.get<IClaims>(
      `${this.myAppUrl}${this.myApi2}/${id}`
    );
  }

  addClaim(claim:IClaims): Observable<void> {
    return this.http.post<void>(
      `${this.myAppUrl}${this.myApi2}`,claim
    ).pipe(tap(() => {
      this._refreshRequired.next();
    })
    );
  }
















}
