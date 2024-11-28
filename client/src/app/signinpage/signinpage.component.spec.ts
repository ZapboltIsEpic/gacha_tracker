import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { SigninpageComponent } from './signinpage.component'
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { LocalStorageService } from '../local-storage.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('SigninpageComponent', () => {
    let component: SigninpageComponent;
    let fixture: ComponentFixture<SigninpageComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            // declarations: [SigninpageComponent], // Declare the component
            imports: [SigninpageComponent,], // Add necessary modules here (e.g., FormsModule, ReactiveFormsModule)
            providers: [
                provideHttpClient(), 
                provideHttpClientTesting(), 
                ApiService, 
                LocalStorageService], // Add any required services here
        }).compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(SigninpageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
    // tests
    it('should create', () => {
        expect(component).toBeDefined();
    });
    it('should alert when sign in', () => {
        spyOn(window, 'alert');
        component.onSubmit();
        component.applyForm.setValue({ email: 'test@example.com', password: 'password' });
        expect(window.alert).toHaveBeenCalled(); 
    });
});
