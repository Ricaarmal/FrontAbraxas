import { Component, OnInit } from '@angular/core';
import { TareasService } from './../../services/tareas.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any={};
  tareas: any=[]
  edit =false
  new=false
  tarea:any={};
  otro=false
  pass=false
  start=false
  minutes:any
  seconds: any
  finish:any ="No terminado"
  id: any
  tareasFinish=false
  tp=true
  tc=true
  constructor(
    private tareasService: TareasService,
    private router: Router
  ) { }
  history(){
    this.router.navigate(['history'])
  }
  editTarea(id){
    this.edit=id
  }
  random(){
    this.tareasService.random(this.user._id)
    .subscribe(e=>{
      this.update()
    })
  }
  componen(p){
    this.tareas.forEach((e,i) => {
      if(e._id==p._id){
        this.tareas.splice(i,1)
        this.tareas.unshift(p)
      }
    });
    this.id=p._id
    this.start=p._id
    this.minutes=p.duration[0]+p.duration[1]
    this.seconds=p.duration[3]+p.duration[4]
  }
  newTarea(){
    if(this.tarea.duration[0]!=0||this.tarea.duration[1]>2||this.tarea.duration[1]==2 &&this.tarea.duration[3]!=0||this.tarea.duration[4]!=0){
    this.pass=true
    return}
    this.tarea.user=this.user._id
    this.tareasService.newTarea(this.tarea)
    .subscribe(tar=>{
      this.new=false
      alert("Tu tarea fue creada")
      this.update()
    })
   
  }
  duration(){
    this.otro=true
  }
  newTar(){
    this.new=true
  }
  editT(tarea){
    this.tareasService.editTarea(tarea)
    .subscribe(tar=>{
      this.edit=false
      alert("Se edito tu tarea")
      this.update()
    })
  }

  update(){
    this.tareasService.home(this.user._id)
      .subscribe(tareas=>{
        this.tareas=tareas
        this.start=null
        this.tp=true
        this.tc=true
        this.tareas.forEach(e=> {
          if(!e.status){this.tp=false}
          if(e.status){this.tc=false}
        });
    })
  }

  delete(id){
    this.tareasService.deleteTarea(id)
    .subscribe(tarea=>{
      this.edit=false
      this.update()
      alert("Tu tarea fue borrada")
    })
  }
  ngOnInit() {
    if(!localStorage.getItem('user')){
      this.router.navigate(['login'])
    }
    this.user= localStorage.getItem("user")
    this.user=JSON.parse(this.user)
    this.tareasService.home(this.user._id)
    .subscribe(tareas=>{
      this.tareas=tareas
      this.tareas.forEach(e=> {
        if(!e.status){this.tp=false}
        if(e.status){this.tc=false}
      });
     
      
    })
  }

}
