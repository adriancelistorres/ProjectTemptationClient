import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ISize } from '../Interfaces/ISize';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SizeService {

  public myAppUrl: string;
  private myApi: string;
  private myApi2: string;

  constructor(
    private http: HttpClient,
    ) {
      this.myAppUrl = environment.endpoint;
      this.myApi = 'sizes2';
      this.myApi2 = 'size2';
     }

     getSize(): Observable<ISize[]> {
    return this.http.get<ISize[]>(
      `${this.myAppUrl}${this.myApi}`
    );
  }


  getOneSize(id: number): Observable<ISize> {
    return this.http.get<ISize>(
      `${this.myAppUrl}${this.myApi2}/${id}`
    );
  }

}
