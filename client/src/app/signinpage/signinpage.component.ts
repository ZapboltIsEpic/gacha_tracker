import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs';
import { LocalStorageService } from '../local-storage.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-signinpage',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, CommonModule],
  template: `
    <div class="signinpage">
      <div [ngSwitch]="SignInPageStatus">
        <div *ngSwitchCase="true">
          <form [class]="form" [formGroup]="applyForm" (ngSubmit)="onSubmit()">
            <label mat-label>
              Email:
              <input id="email" type="email" formControlName="email">
            </label>
            <label>
              Password:
              <input id="password" type="password" formControlName="password">
            </label>
            <button mat-button type="submit">Sign In</button>
          </form>
          <p></p>
          <p>Don't have an account?</p>
          <button mat-button (click)="updateSignInPageStatus()">Sign Up</button>
        </div>
        <div *ngSwitchCase="false">
          <form [class]="form" [formGroup]="applyForm" (ngSubmit)="onSignUp()">
            <label mat-label>
              Email:
              <input id="email" type="email" formControlName="email">
            </label>
            <label>
              Password:
              <input id="password" type="password" formControlName="password">
            </label>
            <button mat-button type="submit">Sign Up</button>
          </form>
          <p></p>
          <p>Have an account?</p>
          <button mat-button (click)="updateSignInPageStatus()" >Sign In</button>
      </div>
    </div>
  `,
  styleUrls: ['signinpage.component.css']
})
export class SigninpageComponent {
  SignInPageStatus = true;

  applyForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  form = 'form';

  constructor(private router: Router, private http: HttpClient, private apiService: ApiService, private localStorageService : LocalStorageService) {}

  onSubmit() {
    const email = this.applyForm.value.email ?? '';
    const password = this.applyForm.value.password ?? '';
    this.checkCredentials(email, password);
  }

  checkCredentials(email: string, password: string): void {
    this.apiService.login(this.applyForm.value).subscribe({
      next: (data: any) => {
        console.log('Credentials match:', data.email);
        alert('Login successful');
        this.localStorageService.setItem('loggedIn', data.email);
        this.router.navigate(['/']);
      },
      error: () => {
        alert('Login failed');
      }
    });
  }

  onSignUp() {
    this.apiService.signUp(this.applyForm.value).subscribe({
      next: (data: any) => {
        alert('Sign up successful');
        console.log('Sign up successful:', data);
      },
      error: () => {
        alert('Sign up failed');
      }
    });
  }

  updateSignInPageStatus() {
    this.SignInPageStatus = !this.SignInPageStatus;
  }
}
