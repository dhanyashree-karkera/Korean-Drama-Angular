import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule, 
    CardModule,
    InputTextModule,
    ReactiveFormsModule,
    FloatLabelModule,
    ButtonModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginForm: FormGroup; 
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const { username, password } = this.loginForm.value;
    
    if (this.loginForm.valid) {
      if (username === 'dhanya' && password === '123') {
        alert('Login Successful!');
        this.router.navigate(['home']);
      } else {
        this.errorMessage = 'Invalid credentials';
      }
    } else {
      this.errorMessage = 'Please fill in all fields';
    }
  }
}