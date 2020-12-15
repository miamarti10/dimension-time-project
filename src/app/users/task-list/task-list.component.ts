import { FirebaseService } from './../../services/firebase.service';
import { GlobaltaskService } from 'src/app/services/GlobaltaskService.service';
import { GlobalTask } from './../../Interface/global-task';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { UserTaskService } from 'src/app/services/userTask.service';
import { UserTask } from 'src/app/Interface/user-task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  collection!: UserTask[];
  isModalActive: boolean = false;

  userTask!: UserTask;

  constructor(private fb: FirebaseService,
              private globalService: GlobaltaskService,
              private userTaskService: UserTaskService) { }

  async ngOnInit(){
  const user =  await this.fb.getUser();
    await this.getUserTasks(user.uid);
  }
  onLogout(){
    this.fb.logout();
  }
  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }

  async getUserTasks(userId: any){
  this.collection = await this.userTaskService.getUserTasks(userId);
  }
/*  const globalTask = await this.globalService.getTask(id);
  console.log(globalTask);
  const usersTasks = await this.userTaskService.getTask(id, userId);
  console.log(usersTasks);
  this.userTask = usersTasks[0];
  console.log(this.userTask, 'USER TASK');
  if(usersTasks[0] == null){
    const userTask = {'description': globalTask?.description,
                      'name': globalTask?.name,
                      'userId': userId,
                      'taskId': id}
    await this.userTaskService.createTask(userTask);
    this.userTask = userTask;
  } */
}
