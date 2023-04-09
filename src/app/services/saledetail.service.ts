import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { IOrder } from '../Interfaces/IOrder';
import { ISaleDetail } from '../Interfaces/ISaleDetail';
import { TokenInterceptorService } from '../shared/token/token-interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class SaledetailService {

  private _refreshRequired = new Subject<void>();

  public myAppUrl: string;
  private myApi: string;
  private myApiAddDetail:string;
  constructor(
    private http: HttpClient,
    private _tokenservice: TokenInterceptorService
  ) {
    this.myAppUrl = environment.endpoint;
    this.myApi = "lastOrder";
    this.myApiAddDetail="saledetail";
  }
  get RefreshRequired() {
    return this._refreshRequired;
  }
  getLastOrder(): Observable<IOrder> {

    return this.http.get<IOrder>(
      `${this.myAppUrl}${this.myApi}`
      ,this._tokenservice.interceptor()
    ).pipe(tap(()=>{
      this.RefreshRequired.next();
    }));
  }
  addDetailSale(detailincome: ISaleDetail): Observable<void>{
    return this.http.post<void>(
      `${this.myAppUrl}${this.myApiAddDetail}`, detailincome,
      this._tokenservice.interceptor()
    ).pipe(tap(()=>{
      this._refreshRequired.next();
    }))
  }
}
