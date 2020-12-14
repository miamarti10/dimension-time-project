import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-Date',
  templateUrl: './Date.component.html',
  styleUrls: ['./Date.component.scss']
})
export class DateComponent implements OnInit {

  constructor() { }
  currentTime: any;

  ngOnInit() {
    this.currentTime=moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
  }

}
