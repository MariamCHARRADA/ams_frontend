import { Component, OnInit } from '@angular/core';
import { Provider } from '../models';
import { Users } from '../services/users';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{

  providers: Provider[] = [
    { id: 1, name: 'Provider 1', email: 'provider1@gmail.com', address: 'Address 1' },
    { id: 2, name: 'Provider 2', email: 'provider2@gmail.com', address: 'Address 2' },
    { id: 3, name: 'Provider 3', email: 'procider2@gmail.com', address: 'Address 3' },
  ];

  /* listUsers: any; */
  listUsers = new BehaviorSubject<any | null>(null);
  
  constructor(private userService: Users) { /* injecting dependency: user service */

   }
  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      {
        next: (data: any) => { /* next = si ok, error = si erreur */
          this.listUsers.next(data);
          console.log(data);
        },
        error: (err) => {
          console.error('Error getting users:', err);
      }
      });
     /* data => {
        this.listUsers = data;
        console.log(this.listUsers);
      },
      error => console.log(error)
    ); */
    
  }
}
