import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /* isSignedIn=false; */
  myForm!: FormGroup;
  submitted = false;
  error!: string;
  formGroup: any;
  errorValidator = 0;

  constructor(
    public firebaseService: FirebaseService,
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z]).{7,}")]],
    });
  }
  onLogin(){
    const {email, password} = this.myForm.value;
    this.auth.signInWithEmailAndPassword(email, password)
    .then(() => this.router.navigate(['/task-list']))
    .catch((error) => {
      if(error.code == 'auth/user-not-found'){
        this.errorValidator = 1;
      } else if(error.code == 'auth/wrong-password'){
        this.errorValidator = 2;
      }
      this.error = error.message;
      console.log(this.error);
  });
  }

  submit(){

  }
}


  /* ngOnInit(): void {
    if(localStorage.getItem('user')!==null)
    this.isSignedIn=true
    else
    this.isSignedIn=false
  }
  async onSignup(email:string, password:string){
    await this.firebaseService.signup(email,password);if(this.firebaseService.isLoggedIn)this.isSignedIn=true
  }
  async onSignin(email:string, password:string){
    await this.firebaseService.signup(email,password);if(this.firebaseService.isLoggedIn)this.isSignedIn=true
  }
  handleLogout(){
    this.isSignedIn = false

  } */

