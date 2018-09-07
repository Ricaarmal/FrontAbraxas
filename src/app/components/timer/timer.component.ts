import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { TareasService } from './../../services/tareas.service';
import {Router} from '@angular/router'


@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
 @Input() seconds: any
 @Input() minutes: any
 @Input() id: any
 @Output() tareas= new EventEmitter();
  seconds2:any
  minutes2:any
  pause= false
  pauseV=false
  contunue=false
  restart=false
  status="pausa"
  tarea:any
  min:any="00"
  sec:any=0
  constructor(
    private tareasService: TareasService,
    private router: Router
  ) { }
  finish(){
    this.pause=true
    this.tarea={
      _id:this.id, 
      time:this.min+":"+this.sec,
      status: "Completada"
    }
    this.tareasService.editTarea(this.tarea)
    .subscribe(res=>{
        this.tareas.emit(res)
        this.pause=true

    })
  }
  fer(){
    if(this.pause)return
    if(this.seconds==0&&this.minutes==0){this.finish()}
    if(this.seconds>=0){ this.seconds-=1; }
    if(this.seconds<0){this.seconds=59; this.minutes-=1; this.minutes="0"+this.minutes}
    if(this.seconds<10){this.seconds="0"+this.seconds}
      document.getElementById("time").innerHTML=this.minutes+":"+this.seconds
  }
  count(){
    if(this.pause)return
    if(this.sec<=59){ this.sec=parseInt(this.sec)+1; }
    if(this.sec==60){this.sec=0; this.min=parseInt(this.min)+1; this.min="0"+this.min}
    if(this.sec<10){this.sec="0"+this.sec}
    
  }
 
  go(){
    this.pauseV=true
    setInterval(e=>{
      this.fer()
      this.count()
    },1000)
  }
  
  paus(){
    if(!this.pause){
      this.pause=true
    }
  }
  cont(){
    this.pause=false
  }
  restar(){
    this.pause=true
    this.seconds=this.seconds2
    this.minutes=this.minutes2
    this.min=0
    this.sec=0
    document.getElementById("time").innerHTML=this.minutes+":"+this.seconds
  }
  
  ngOnInit() {
    document.getElementById("time").innerHTML=this.minutes+":"+this.seconds
    this.seconds2=this.seconds
    this.minutes2=this.minutes
    this.go()

  }


}
