import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  register=false
  auth:any={}
  user:any
  userExistent=false

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  loginTrue(){
    this.register=true;
    
  }
  signup(){
    this.authService.signup(this.auth)
    .subscribe(user=>{
      if(user=="Error"){this.userExistent=true}
      else{
        this.user=user;
        this.register=true;
      }
  })
 
}

loginFalse(){
  this.register=false;
}

log(){
  this.authService.login(this.auth)
    .subscribe(user=>{
      if(user=="Error"){this.userExistent=true}
      else{
        this.user = user
        localStorage.setItem('user', JSON.stringify(user))
        this.router.navigate(['home'])
      }
    })
}

  ngOnInit() {
    if(localStorage.getItem('user')){
      this.router.navigate(['home'])
    }
   }

}
