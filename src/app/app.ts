import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ams');
  formation: string = 'Angular';
  name: string = 'Mariam Charrada';
  email: string = 'mariam@gmail.com';

}
