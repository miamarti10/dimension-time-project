import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  password = new FormControl('', [Validators.required]);

  constructor(private fb: FormBuilder, private auth: AngularFireAuth, private router: Router) {

  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z]).{7,}")]],
      ConfirmPassword: ['', [Validators.required,
                            Validators.pattern("(?=.*[a-z])(?=.*[A-Z]).{7,}")]],
    });
  }
  createUser(){
    const{email, password} = this.registerForm.value;
    this.auth.createUserWithEmailAndPassword(email, password).then(user => {
      console.log('RegisterComponent => createUser => user', user);
      this.router.navigate(['/task-list']);
    })
    console.log(this.registerForm.value);

  }

}
