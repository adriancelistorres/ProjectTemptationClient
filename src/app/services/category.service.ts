import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../environments/environment';
import { ICategory } from '../Interfaces/ICategorty';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private _refreshRequired = new Subject<void>();

  get RefreshRequired() {
    return this._refreshRequired;
  }


  public myAppUrl: string;
  public myApi: string;
  public myApi2: string;

  constructor(
    private http: HttpClient,
  ) { 
    this.myAppUrl = environment.endpoint;
    this.myApi = 'categorys2';
    this.myApi2 = 'category2';
  }

  getCategory(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(
      `${this.myAppUrl}${this.myApi}`,
    );
  }

  getOneCategory(id: number): Observable<ICategory> {
    return this.http.get<ICategory>(
      `${this.myAppUrl}${this.myApi2}/${id}`,
    );
  }
}
