import { Component, OnInit } from '@angular/core';
import { TareasService } from './../../services/tareas.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  user: any={};
  tareas: any=[]
  updated_at:any=[]
  time:any=[]
  incidence:any=[]
  constructor(
    private tareasService: TareasService,
    private router: Router
  ) { }

  public lineChartData:Array<any> = [
    {data: [6, 9, 4, 8, 5, 2, 4], label: 'Tareas'}
  ];
  public lineChartLabels:Array<any> = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  return(){
    this.router.navigate(["home"])
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
      this.tareas.forEach((e,i) => {
        if(e.time!="No terminado"){
          this.time.push(e.time[0]+e.time[1]+e.time[3]+e.time[4])
          this.updated_at.push(e.updated_at[6]+e.updated_at[8]+e.updated_at[9])
          }
      });
    });
    
    
  }
}
