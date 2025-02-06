import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { DataService } from './data.service';
import { FGOServants } from '../shared/models/fgoServants.model';

@Injectable({
  providedIn: 'root', // Makes this service available throughout the app
})
export class ApiService {
    private domain: string | undefined;

    private apiString = "/api/gachatracker"

    constructor(private http : HttpClient, private dataService : DataService) {
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
    // FGO
    // Servants
    getServants(): Observable<any> {
        return this.dataService.getData<FGOServants[]>(`${this.domain}${this.apiString}/fgo/servants/get/all`).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: any): Observable<never> {
        console.error('API error:', error);
        return throwError(() => error);
    }

    // ZZZ
    // Agents
    getAgents(): Observable<any> {
        // can specify datatype instead of any
        return this.dataService.getData<any>(`${this.domain}${this.apiString}/zzz/agents/get/all`).pipe(
            catchError(this.handleError)
        )
    }
}