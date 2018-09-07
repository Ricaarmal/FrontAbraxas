import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import {map} from 'rxjs/operators'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   //url="http://localhost:3000"
   url=""
  constructor(
    private http: Http
  ) { }



  signup(obj): Observable<string>{
    return this.http.post(this.url + '/signup', obj)
    .pipe(map(res=>res.json()))
  }

  login(obj): Observable<string>{
    return this.http.post(this.url + '/login', obj, {withCredentials:true})
    .pipe(map(res=>res.json()))
  }

  logouth(): Observable<string>{
    return this.http.get(this.url + '/logout')
    .pipe(map(res=>res.json()))
  }






}
