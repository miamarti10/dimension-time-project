import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalTask } from '../Interface/global-task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobaltaskService {

private _url: string = " http://localhost:3000/tasks";

constructor(/* private http: HttpClient,  */private af: AngularFirestore) { }

/* getGlobalTasks(): Observable<GlobalTask[]>{
  return this.http.get<GlobalTask[]>(this._url);
  } */
  getGlobalTasks$(): Observable<GlobalTask[]>{
    return this.af.collection<GlobalTask>('globalTasks').valueChanges();
    }
  getTask$(id: string): Observable<GlobalTask | undefined> {
      return this.af.collection<GlobalTask>('globalTasks').doc(id).valueChanges();
  }
      /* getMovie$(id: string): Observable<MovieInterface> {
        return this.http.get<MovieInterface>(`${environment.url}${id}`);
      } */

      /* getById$(id): Observable<User> {

        return this.afs.collection<User>('users').doc(id).valueChanges();

      } */
}
