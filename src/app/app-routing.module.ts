import { AngularFireAuth } from '@angular/fire/auth';
import { TaskListComponent } from './users/task-list/task-list.component';
import { GlobalTasksComponent } from './users/global-tasks/global-tasks.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskDetailsComponent } from './users/task-details/task-details.component';
import { RegisterComponent } from './register/register.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent},
  { path: "task-list", component: TaskListComponent, canActivate: [AngularFireAuthGuard]},
  { path: "task-details/:id", component: TaskDetailsComponent},
  { path: "global-tasks", component: GlobalTasksComponent},
  { path: "**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
