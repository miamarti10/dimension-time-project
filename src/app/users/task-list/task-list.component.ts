import { GlobaltaskService } from 'src/app/services/GlobaltaskService.service';
import { GlobalTask } from './../../Interface/global-task';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  collection!: GlobalTask[];
  isModalActive: boolean = false;

  constructor(private auth: AngularFireAuth, private globalService: GlobaltaskService) { }

  ngOnInit(): void {
    this.globalService.getGlobalTasks$().subscribe(data => this.collection = data);
  }
  onLogout(){
    this.auth.signOut();
  }
  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }

}
