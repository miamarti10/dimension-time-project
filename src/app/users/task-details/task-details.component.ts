import { AngularFireAuth } from '@angular/fire/auth';
import { UserTask } from './../../Interface/user-task';
import { UserTaskService } from './../../services/userTask.service';
import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { GlobalTask } from 'src/app/Interface/global-task';
import { GlobaltaskService } from 'src/app/services/GlobaltaskService.service';
import { ActivatedRoute } from '@angular/router';

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
  contador: any;
  fecha = new Date();

  id: any;
  task!: GlobalTask;
  userTask!: UserTask;
  intervalId!: any;
  tiempofinal!: any ;

  taskId!: string;
  userId!: string;


  constructor(private fs: FirebaseService,
              private globalService: GlobaltaskService,
              private route: ActivatedRoute,
              private userTaskService: UserTaskService) { }

  async ngOnInit(){
    const taskId = this.route.snapshot.paramMap.get('id');
    const user = await this.fs.getUser();
    const userId = await user.uid;
    await this.getTask(taskId, userId);
  }

  async getTask(id: any, userId: any){
    console.log(id);
    const globalTask = await this.globalService.getTask(id);
    console.log(globalTask, 'Global Task');
    const usersTasks = await this.userTaskService.getTask(id, userId);
    console.log(usersTasks, 'Users Tasks');
    this.userTask = usersTasks[0];
    console.log(this.userTask, 'USER TASK');
    if(usersTasks[0] == null){
      const userTask = {'description': globalTask?.description,
                        'name': globalTask?.name,
                        'userId': userId,
                        'taskId': id}
      await this.userTaskService.createTask(userTask);
      this.userTask = userTask;
    }
  }

  onLogout(){
    this.fs.logout();
  }

  start(){
    this.mostrar ? this.mostrar = false : this.mostrar = true;

    this.intervalId = setInterval(()=>{
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
    this.isPaused = !this.isPaused;

    if(this.minuto < 24 || this.segundos < 59){
      this.buttonLabel = this.isPaused ? 'REANUDAR' : 'PARAR';
    }
    clearInterval(this.intervalId);
    delete this.intervalId;
  }

  parar(){
    clearInterval(this.intervalId);
    this.tiempofinal = (`${this.hora} horas : ${this.minuto} minutos: ${this.segundos} segundos`);
    console.log(this.tiempofinal);
  }

}
