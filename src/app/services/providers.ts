import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Providers {
    constructor(private http: HttpClient) { } // dependency injection of object of type HttpClient to make HTTP requests
  
    getProviders() {
      return this.http.get('http://127.0.0.1:8081/providers/');
    }
}
