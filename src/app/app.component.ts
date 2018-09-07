import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {AuthService} from './services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front';
  log=true
  constructor(
    private routes: Router,
    private authServices: AuthService
  ){}
  logout(){
    this.authServices.logouth()
    .subscribe(res=>{
      this.log=true
      localStorage.removeItem('user')
      this.routes.navigate(['login'])
    })
  }
  isLog(){
    if(localStorage.getItem('user')){
      this.log=false
    }
  }
  ngOnInit() {
    if(localStorage.getItem('user')){
      this.routes.navigate(['home'])
    }else{this.routes.navigate(['login'])}
    setInterval(e=>{
      this.isLog()
    },1000)
  }
   
  }

