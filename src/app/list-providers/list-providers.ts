import { Component, OnInit } from '@angular/core';
import { Providers } from '../services/providers';
import { Provider } from '../models';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-providers',
  standalone: false,
  templateUrl: './list-providers.html',
  styleUrl: './list-providers.css',
})
export class ListOfProviders implements OnInit {

  constructor(private providerService: Providers, private router: Router) { /* injecting dependencies */
  }

  listProviders = new BehaviorSubject<Provider[]>([]); /* import type Provider from models */

  ngOnInit(): void {
    this.loadProviders();
  }

  loadProviders() {
        this.providerService.getProviders().subscribe(
      {
        next: (data: any) => { /* next = si ok, error = si error */
          this.listProviders.next(data);
          console.log(data);
        },
        error: (err: any) => {
          console.error('Error getting providers:', err);
        }
      });
    }

    deleteProvider(id: any) {
    this.providerService.deleteProvider(id).subscribe(
      {
        next: (data) => {
          this.loadProviders(); // Refresh the list after deletion
          console.log(data);
        },
        error: (err) => {
          console.error('Error deleting provider:', err); 
        }
      }
    );
  }

}
