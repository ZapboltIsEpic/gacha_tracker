import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('http://localhost:3000/api/gachatracker/gachatrackerusers/get/all');
  }

  // temporary function where i have to go through all users, change to more efficient method later
  checkCredentials(email: string, password: string): void {
    this.getData().subscribe((data: any) => {
      const user = data.find((user: any) => user.email === email && user.password === password);
      if (user) {
        console.log('Credentials match:', user);
      } else {
        console.log('Credentials do not match');
      }
    });
  }

  onSubmit() {
    const email = this.applyForm.value.email ?? '';
    const password = this.applyForm.value.password ?? '';
    this.checkCredentials(email, password);
  }
}
