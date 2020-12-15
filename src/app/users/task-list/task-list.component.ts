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

}
