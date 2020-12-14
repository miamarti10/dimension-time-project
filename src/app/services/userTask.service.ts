import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UserTask } from '../Interface/user-task';

@Injectable({
  providedIn: 'root'
})
export class UserTaskService {

constructor(private afs: AngularFirestore) { }

createTask(userTask: UserTask){
  userTask.id = this.afs.createId();
  return this.afs.collection<UserTask>('userTasks').doc(userTask.id).set(userTask);
}
getTask$(taskId: string | null, userId: string | null){
  return this.afs.collection<UserTask>('userTasks', ref =>
  ref.where('userId', '==', userId).where('taskId', '==', taskId)).valueChanges();
  }
  /* getByNameAndId(){
    return this.afs.collection<User>('users', ref =>
    ref.where('name','==','sara').where('id','==','Lir0KR4sX5YhPA7MKgesedSJgv12')).valueChanges();
  } */


}
