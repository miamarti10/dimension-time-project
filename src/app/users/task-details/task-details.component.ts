import { UserTask } from './../../Interface/user-task';
import { UserTaskService } from './../../services/userTask.service';
import { FirebaseService } from './../../services/firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalTask } from 'src/app/Interface/global-task';
import { GlobaltaskService } from 'src/app/services/GlobaltaskService.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit, OnDestroy {
  public hora: number = 0;
  public minuto: number = 0;
  public segundos: number = 0;

  isPaused!: boolean;
  buttonLabel: string = 'PARAR';
  mostrar: boolean = false;
  contador = null;
  fecha= new Date();

  id: any;
  public subscribe!: Subscription;
  task!: GlobalTask;
  userTask!: UserTask;

  collection!: GlobalTask[];
  constructor(private fs: FirebaseService,
              private globalService: GlobaltaskService,
              private route: ActivatedRoute,
              private userTaskService: UserTaskService) { }

  async ngOnInit(){
    const taskId = this.route.snapshot.paramMap.get('id');
    const user = await this.fs.getUser();
    const userId = await user.uid;
    console.log('TaskID:', taskId);
    console.log('userId:', userId);
    this.userTaskService.getTask$(taskId, userId).subscribe(data => {this.userTask = data[0];  console.log(this.userTask)});
  /*  this.id = this.route.snapshot.paramMap.get('id');
    this.subscribe = this.globalService.getGlobalTasks$().subscribe(data => this.collection = data); */
  }
  existTask(){

  }
  onLogout(){
    this.fs.logout();
  }
  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
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
