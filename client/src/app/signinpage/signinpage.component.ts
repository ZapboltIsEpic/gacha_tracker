import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signinpage',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="signinpage">
      <form [formGroup]="applyForm" (ngSubmit)="onSubmit()">
        <label>
          Email:
          <input id="email" type="email" formControlName="email">
        </label>
        <label>
          Password:
          <input id="password" type="password" formControlName="password">
        </label>
        <button mat-button type="submit">Submit</button>
      </form>
    </div>
  `,
  styleUrls: ['signinpage.component.css']
})
export class SigninpageComponent {
  applyForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private router: Router, private http: HttpClient) {}

  getData() {
    return this.http.get('http://localhost:3000/api/gachatracker/gachatrackerusers/get/all');
  }

  // temporary function where i have to go through all users, change to more efficient method later
  checkCredentials(email: string, password: string): void {
    this.getData().subscribe((data: any) => {
      const user = data.find((user: any) => user.email === email && user.password === password);
      if (user) {
        console.log('Credentials match:', user);
        // Navigate to homepage
        this.router.navigate(['/']);
        // NEED TO DO: Pass user data, and keep track of user session
      } else {
        console.log('Credentials do not match');
        alert('Login failed');
      }
    });
  }

  onSubmit() {
    const email = this.applyForm.value.email ?? '';
    const password = this.applyForm.value.password ?? '';
    this.checkCredentials(email, password);
  }
}
