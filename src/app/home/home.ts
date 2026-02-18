import { Component } from '@angular/core';
import { Provider } from '../models';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  providers: Provider[] = [
    { id: 1, name: 'Provider 1', email: 'provider1@gmail.com', address: 'Address 1' },
    { id: 2, name: 'Provider 2', email: 'provider2@gmail.com', address: 'Address 2' },
    { id: 3, name: 'Provider 3', email: 'procider2@gmail.com', address: 'Address 3' },
  ];
}
