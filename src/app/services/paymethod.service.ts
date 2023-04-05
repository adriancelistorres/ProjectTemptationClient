import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { TokenInterceptorService } from '../shared/token/token-interceptor.service';
import { environment } from 'src/environments/environment';
import { IPaymentMethod } from '../Interfaces/IPaymentMethod';

@Injectable({
  providedIn: 'root'
})
export class PaymethodService {
  private _refreshRequired = new Subject<void>();

  get RefreshRequered(){
    return this._refreshRequired;
  }

  private myAppUrl: string;
  private myApi: string;
  private myApi2: string;
  constructor(
    private http: HttpClient,
    private _tokenservice: TokenInterceptorService
  ) { 
    this.myAppUrl = environment.endpoint;
    this.myApi = 'paymentmethods2';
    this.myApi2 = 'paymentmethod2'
  }

  getpayMethod(): Observable<IPaymentMethod[]>{
    return this.http.get<IPaymentMethod[]>(
      `${this.myAppUrl}${this.myApi}`,

    )
  }

  addpayMethod(paymethod: IPaymentMethod): Observable<void>{
    return this.http.post<void>(
      `${this.myAppUrl}${this.myApi2}`,paymethod,
    ).pipe(
      tap(()=>{
        this._refreshRequired.next();
      })
    )
  }


  getOnepayMethod(id: number): Observable<IPaymentMethod>{
    return this.http.get<IPaymentMethod>(
      `${this.myAppUrl}${this.myApi2}/${id}`,
    ).pipe(tap(()=>{
      this._refreshRequired.next();
    }));
  }
}
