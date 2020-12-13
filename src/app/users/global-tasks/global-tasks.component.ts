import { GlobalTask } from './../../Interface/global-task';
import { Component, OnInit } from '@angular/core';
import { GlobaltaskService } from 'src/app/services/GlobaltaskService.service';

@Component({
  selector: 'app-global-tasks',
  templateUrl: './global-tasks.component.html',
  styleUrls: ['./global-tasks.component.scss']
})
export class GlobalTasksComponent implements OnInit {

  constructor(private _globaltask: GlobaltaskService ) {}

  Iglobaltasks!: GlobalTask[];

  ngOnInit(): void {
    this._globaltask.getGlobalTasks().subscribe((data) => {
      this.Iglobaltasks = data;
    });
  }
}
