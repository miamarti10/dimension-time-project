import { AngularFireAuth } from '@angular/fire/auth';
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

  isPaused!: boolean;
  buttonLabel: string = 'PARAR';
  mostrar: boolean = false;
  contador = null;
  fecha= new Date();

  constructor(private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }
  onLogout(){
    this.auth.signOut();
  }
  start(){
    this.mostrar ? this.mostrar = false : this.mostrar = true;

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
  pausar(): void{
    this.isPaused = !this.isPaused;

    if(this.minuto < 24 || this.segundos < 59){
      this.buttonLabel = this.isPaused ? 'REANUDAR' : 'PARAR';
    }
  }
  parar(){
    this.hora = 0;
    this.minuto = 0;
    this.segundos = 0;
    this.contador = null;
  }

}
