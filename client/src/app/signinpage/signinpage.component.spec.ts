import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { SigninpageComponent } from './signinpage.component'
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

describe('SigninpageComponent', () => {
    let component: SigninpageComponent;
    let fixture: ComponentFixture<SigninpageComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [SigninpageComponent], // Declare the component
            imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, CommonModule], // Add necessary modules here (e.g., FormsModule, ReactiveFormsModule)
            providers: [], // Add any required services here
        }).compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(SigninpageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
    it('should create', () => {
        expect(component).toBeDefined();
    });

    // it('should alert when sign in', () => {
        
    // });
});
