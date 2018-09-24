import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ISuperhero } from './Superhero';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  private _url = "\assets\\Data\\Superhero.json";

  constructor(private http: HttpClient) {
   }

   getData(): Observable<ISuperhero[]> {
     return this.http.get<ISuperhero[]>(this._url);
   }
}
