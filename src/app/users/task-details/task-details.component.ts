import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit {
  public hora: number = 0;
  public minuto: number = 0;
  public segundos: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  start(){
    setInterval(()=>{
      this.segundos+=1;
      if(this.segundos == 60){
        this.segundos = 0;
        this.minuto +=1;
        if(this.minuto == 60){
          this.minuto=0;
          this.hora+=1;
          if(this.hora = 24){
            this.hora =0;
          }
        }
      }
    }, 1000);
  }
  pausar(){

  }
  parar(){
  }

}
