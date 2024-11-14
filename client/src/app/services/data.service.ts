import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    constructor(private http: HttpClient) {}

    getData<T>(apiUrl: string): Observable<any> {
        return this.http.get<T>(apiUrl);
    }
}