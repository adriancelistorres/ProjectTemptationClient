import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IProducts } from '../Interfaces/IProducts';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private _refreshRequired = new Subject<void>();

  get RefreshRequired(){
      return this._refreshRequired;
  }

  public myAppUrl: string;
  private myApi2: string;
  private myApi3: string;


  constructor(private http: HttpClient) {
    this.myAppUrl =  environment.endpoint;
    this.myApi2 = "products2";
    this.myApi3 = "product2";
   }

    getProducts(): Observable<IProducts[]>{
      return this.http.get<IProducts[]>(
          `${this.myAppUrl}${this.myApi2}`
      )
  }
  getOneProduct(id:number):Observable<IProducts>{
    return this.http.get<IProducts>(
        `${this.myAppUrl}${this.myApi3}/${id}`
    )
}






}
