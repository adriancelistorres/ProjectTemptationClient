import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from '../environments/environment';
import { IBrand } from '../Interfaces/IBrand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private _refreshRequired = new Subject<void>();

  get RefreshRequired(){
      return this._refreshRequired;
  }
  public myAppUrl: string;
  private myApi: string;
  private myApi2: string;
  constructor(
    private http: HttpClient,

  ) { 
    this.myAppUrl =  environment.endpoint;
    this.myApi =  "brands2";
    this.myApi2 = "brand2";
  }

  getBrands(): Observable<IBrand[]>{
    return this.http.get<IBrand[]>(
        `${this.myAppUrl}${this.myApi}`,
    )
  }

getOneBrand(id:number):Observable<IBrand>{
  return this.http.get<IBrand>(
      `${this.myAppUrl}${this.myApi2}/${id}`,
  ).pipe(tap(() =>{
      this._refreshRequired.next();
  }))
}

}
