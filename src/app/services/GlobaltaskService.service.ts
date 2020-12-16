import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalTask } from '../Interface/global-task';
import { Observable } from 'rxjs';
import { tap, first } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class GlobaltaskService {

private _url: string = " http://localhost:3000/tasks";

constructor(private af: AngularFirestore) { }

  getGlobalTasks$(): Observable<GlobalTask[]>{
    return this.af.collection<GlobalTask>('globalTasks').valueChanges();
    }
  getTask(id: string): Promise<any>{
      console.log(id);
      return this.af.collection<GlobalTask>('globalTasks').doc(id).valueChanges().pipe(first()).toPromise();
  }
  getUserTasks(userId: string){
    console.log(userId);
      return this.af.collection<GlobalTask>('globalTasks').doc(userId).valueChanges().pipe(first()).toPromise();
  }

}
