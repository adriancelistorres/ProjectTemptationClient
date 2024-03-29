import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { IPerson } from '../Interfaces/IPerson';
import { IPersonUpdate } from '../Interfaces/IPersonUpdate';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private _refershRequired=  new Subject<void>();

  get RefreshRequired(){
      return this._refershRequired;
  }
  public myAppUrl: string;
  public myAddApi: string;
  public myApi: string;
  public myApi2: string;
  public myapiUpdateClient:string

  constructor(
      private http: HttpClient,
  ){
      this.myAppUrl =  environment.endpoint;
      this.myAddApi = 'addperson';
      this.myApi = 'persons';
      this.myApi2 = "person"
      this.myapiUpdateClient="personclient"
  }

  getPerson(): Observable<IPerson[]>{
    return this.http.get<IPerson[]>(
        `${this.myAppUrl}${this.myApi}`
    );
}

deletePerson(id: number): Observable<void>{
    return this.http.delete<void>(
        `${this.myAppUrl}${this.myApi2}/${id}`
    );
}

addPerson(person: IPerson): Observable<void>{
    return this.http.post<void>(
        `${this.myAppUrl}${this.myAddApi}`,person
    ).pipe(tap(() =>{
        this._refershRequired.next();
    }))
}

updatePerson(id: number, person: IPersonUpdate): Observable<void>{
    return this.http.put<void>(
        `${this.myAppUrl}${this.myapiUpdateClient}/${id}`,person
    ).pipe(tap(() =>{
        this._refershRequired.next();
    }))
}

getOnePerson(id: number): Observable<IPerson>{
    return this.http.get<IPerson>(
        `${this.myAppUrl}${this.myApi2}/${id}`
    ).pipe(tap(() =>{
        this._refershRequired.next();
    }))
}
}
