import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Users {
  constructor(private http: HttpClient) { } // dependency injection of object of type HttpClient to make HTTP requests

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
