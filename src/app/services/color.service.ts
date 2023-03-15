import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from '../environments/environment';
import { IColor } from '../Interfaces/IColor';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private _refreshRequired=new Subject<void>();

  get RefreshRequired(){
    return this._refreshRequired;
  }

  public myAppUrl: string;
  private myApi: string;
  private myApi2: string;

  constructor(
    private http: HttpClient,

  ) {
    this.myAppUrl = environment.endpoint;
    this.myApi = 'colors2';
    this.myApi2 = 'color2';
   }

   getColors(): Observable<IColor[]> {
    return this.http.get<IColor[]>(
      `${this.myAppUrl}${this.myApi}`,
    );
  }

  getOneColor(id:number):Observable<IColor>{
    return this.http.get<IColor>(
      `${this.myAppUrl}${this.myApi2}/${id}`,
    ).pipe(tap(()=>{
      this._refreshRequired.next();
    }));
  }
}
