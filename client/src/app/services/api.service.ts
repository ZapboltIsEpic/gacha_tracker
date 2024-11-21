import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root', // Makes this service available throughout the app
})
export class ApiService {
    private domain: string | undefined;

    private apiString = "/api/gachatracker"

    constructor(private http : HttpClient) {
        this.domain = environment.domain;
    }

    // User-related API calls
    login(payload: any): Observable<any> {
        return this.http.post(`${this.domain}${this.apiString}/gachatrackerusers/login`, payload).pipe(
            catchError(this.handleError)
        );
    }
    signUp(payload: any): Observable<any> {
        return this.http.post(`${this.domain}${this.apiString}/gachatrackerusers/create`, payload).pipe(
            catchError(this.handleError)
        );
    }

    // Game-related API calls

    private handleError(error: any): Observable<never> {
        console.error('API error:', error);
        return throwError(() => error);
    }
}