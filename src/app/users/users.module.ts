import { DateComponent } from './Date/Date.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { GlobalTasksComponent } from './global-tasks/global-tasks.component';
import { TaskDetailsComponent } from './task-details/task-details.component';



@NgModule({
  declarations: [
    TaskListComponent,
    GlobalTasksComponent,
    TaskDetailsComponent,
    DateComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UsersModule { }
