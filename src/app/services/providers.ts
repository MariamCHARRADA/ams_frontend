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

    addProvider(provider: any) {
      return this.http.post('http://127.0.0.1:8081/providers/', provider);
    }

    deleteProvider(id: any) {
      return this.http.delete('http://127.0.0.1:8081/providers/' + id);
    }

    getProviderById(id: any) {
      return this.http.get('http://127.0.0.1:8081/providers/' + id);
      }
      
    updateProvider( provider: any) {
      return this.http.put('http://127.0.0.1:8081/providers/', provider);
    }
}
