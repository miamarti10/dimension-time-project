import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
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

  constructor(public firebaseService: FirebaseService, private fb: FormBuilder,
    public service: AuthService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }



  submit() {}

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


}
