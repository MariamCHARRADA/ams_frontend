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

  names: string[] =['mariam', 'heDi', 'yaZId', 'SAMi'];
  
  logoUrl: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLgGTCvrhfoPoHExHkZ2ZOBHoVSOTYHSiHur7Ctz4mgw&s';   /* property binding target */
  logoWidth: number = 150;               /* another property binding example */
  
  showAlert() {
    alert('Danger button clicked!');
  };

}
