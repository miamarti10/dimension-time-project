import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UserTask } from '../Interface/user-task';
import {first} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserTaskService {

constructor(private afs: AngularFirestore) { }

createTask(userTask: UserTask){
  userTask.id = this.afs.createId();
  return this.afs.collection<UserTask>('userTasks').doc(userTask.id).set(userTask);
}
getTask(taskId: string | null, userId: string | null){
  console.log(taskId, userId);
  return this.afs.collection<UserTask>('userTasks', ref =>
  ref.where('userId', '==', userId).where('taskId', '==', taskId)).valueChanges().pipe(first()).toPromise();
  }
getUserTasks(userId: string){
    console.log(userId);
    return this.afs.collection<UserTask>('userTasks', ref =>
    ref.where('userId', '==', userId)).valueChanges().pipe(first()).toPromise();
  }

}
