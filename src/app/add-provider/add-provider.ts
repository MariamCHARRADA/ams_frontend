import { Component, OnInit } from '@angular/core';
import { Providers } from '../services/providers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-provider',
  standalone: false,
  templateUrl: './add-provider.html',
  styleUrl: './add-provider.css',
})
export class AddProvider implements OnInit {

  constructor(private providerService: Providers, private router:Router) { /* injecting dependencies */
  }

  ngOnInit(): void {
  }

  addProvider(provider: any) {
    // Logic to add a provider goes here
    this.providerService.addProvider(provider).subscribe(
      {
        next: (data) => {
          this.router.navigate(['/providers']); //once you get the data, redirect
          console.log(data);
        },
        error: (err) => {
          console.error('Error adding provider:', err);
        }
      }
    );
  }


}
