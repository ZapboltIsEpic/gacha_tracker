import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-signinpage',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="applyForm" (ngSubmit)="onSubmit()">
      <label>
        Email:
        <input id="email" type="email" formControlName="email">
      </label>
      <label>
        Password:
        <input id="password" type="password" formControlName="password">
      </label>
      <button type="submit">Submit</button>
    </form>
  `,
  styles: ``
})
export class SigninpageComponent {
  // @Injectable({
  //   providedIn: 'root'
  // })
  // export class SigninService {
  //   constructor(private http: HttpClient) {}

  //   signin(email: string, password: string) {
  //     return this.http.get(`/api/signin?email=${email}&password=${password}`);
  //   }
  // }

  // constructor(private signinService: SigninService) {}

  // onSubmit() {
  //   const { email, password } = this.applyForm.value;
  //   this.signinService.signin(email, password).subscribe(response => {
  //     console.log('Response from backend:', response);
  //   });
  // }
  applyForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  onSubmit() {
    console.log(this.applyForm.value);
  }
}
