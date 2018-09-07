import {Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { TimerComponent } from './components/timer/timer.component';
import { HistoryComponent } from './components/history/history.component';

export const routes: Routes = [
    { path: 'inicio',  component: AppComponent },
    { path: 'login',  component: AuthComponent },
    { path: 'home',  component: HomeComponent, 
        children:[ { path: 'timer',  component: TimerComponent}] },
    { path: 'history',  component: HistoryComponent },

]

