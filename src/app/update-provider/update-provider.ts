import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Providers } from '../services/providers';
import { BehaviorSubject } from 'rxjs';
import { Provider } from '../models';

@Component({
  selector: 'app-update-provider',
  standalone: false,
  templateUrl: './update-provider.html',
  styleUrl: './update-provider.css',
})
export class UpdateProvider implements OnInit {

  idProvider: any;
  provider: Provider | null = null; //to synchronize the provider's data with the form
  providerName: any;
  providerEmail: any;
  providerAddress: any;

  constructor(private activatedRoute: ActivatedRoute, private providerService: Providers, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      //step 1: get the provider's id from the route parameters
      this.idProvider = params['id']; //id = name of the parameter in the route
      console.log(this.idProvider);
      //step 2: get the provider's data from the backend using the id and store it in a variable
      this.providerService.getProviderById(this.idProvider).subscribe(
        {
          next: (data: any) => {
            this.provider = data; //store the provider's data in a variable to display it in the form

            this.providerName = data.name;
            this.providerEmail = data.email;
            this.providerAddress = data.address;
          },
          error: (err) => {
            console.error('Error getting provider:', err);
          }
        }
      );
    });
  }

  updateProvider() {
    let providerUpdate = {
      id: this.idProvider,
      name: this.providerName,
      email: this.providerEmail,
      address: this.providerAddress
    }

    this.providerService.updateProvider(providerUpdate).subscribe(
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
