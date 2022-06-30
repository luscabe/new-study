import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';  
import { Router } from '@angular/router'

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class MainService {
    url: string
    apiKey: string
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
  constructor(public http: HttpClient, private router: Router) {
    this.url = 'https://gateway.marvel.com:443/v1/public'
    this.apiKey = 'apikey=cadb35f8866ad3ed2483d11f125cfc14'
  }
  
  getCharacters(): Observable<any>{
    return this.http.get<any>(`${this.url}/characters?${this.apiKey}`)
  }

  getOffsetCharacters(offset: number = 0): Observable<any>{
    return this.http.get<any>(`${this.url}/characters?${this.apiKey}&offset=${offset}`)
  }

}