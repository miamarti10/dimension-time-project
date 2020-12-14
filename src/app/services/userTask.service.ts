import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UserTask } from '../Interface/user-task';

@Injectable({
  providedIn: 'root'
})
export class UserTaskService {

constructor(private fs: AngularFirestore) { }

createTask(userTask: UserTask){
  userTask.id = this.fs.createId();
  return this.fs.collection<UserTask>('userTasks').doc(userTask.id).set(userTask);
}
getTask$(taskId: string | null, userId: string | null): Observable<UserTask[]>{
  return this.fs.collection<UserTask>('userTasks').valueChanges();
  }

}
