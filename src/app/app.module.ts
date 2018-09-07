import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { RouterModule } from "@angular/router";
import {HttpModule} from '@angular/http';
import { ChartsModule } from 'ng2-charts';
//routes
import {routes} from './routes'

//services
import {AuthService} from './services/auth.service';
import {TareasService} from './services/tareas.service';
//compnents
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import {TimerComponent} from './components/timer/timer.component';
import { HistoryComponent } from './components/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    TimerComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule,
    ChartsModule
  ],
  providers: [
    AuthService,
    TareasService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
