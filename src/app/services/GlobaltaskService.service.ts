import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalTask } from '../Interface/global-task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobaltaskService {

private _url: string = " http://localhost:3000/tasks";

constructor(private http: HttpClient) { }

getGlobalTasks(): Observable<GlobalTask[]>{
  return this.http.get<GlobalTask[]>(this._url);
  }
}
