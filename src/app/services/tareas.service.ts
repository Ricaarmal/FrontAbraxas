import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import {map} from 'rxjs/operators'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  //url="http://localhost:3000"
  url=""

  constructor(
    private http: Http
  ) { }

  home(id): Observable<string>{
    return this.http.get(this.url + '/home/'+id,{withCredentials:true})
    .pipe(map(res=>res.json()))
  }

  newTarea(tarea): Observable<string>{
    return this.http.post(this.url + '/tarea', tarea,{withCredentials:true})
    .pipe(map(res=>res.json()))
  }

  editTarea(tarea): Observable<string>{
    return this.http.put(this.url + '/tarea/'+tarea._id, tarea,{withCredentials:true})
    .pipe(map(res=>res.json()))
  }

  deleteTarea(id): Observable<string>{
    return this.http.delete(this.url + '/tarea/'+id,{withCredentials:true})
    .pipe(map(res=>res.json()))
  }

  miRecord(id): Observable<string>{
    return this.http.get(this.url + '/record/'+id,{withCredentials:true})
    .pipe(map(res=>res.json()))
  }

  random(id): Observable<string>{
    return this.http.get(this.url + '/random/'+id,{withCredentials:true})
    .pipe(map(res=>res.json()))
  }
}
