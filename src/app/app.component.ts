import { Component } from '@angular/core';
import { Employee } from '../employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  employees: Employee[] = [
    {
      id: 1,
      name: 'raju',
      country: 'India',
      address: 'hyderabad',
    },
    {
      id: 2,
      name: 'Sharath',
      country: 'India',
      address: 'Delhi',
    },
    {
      id: 3,
      name: 'Avinash',
      country: 'India',
      address: 'Banglore',
    },
  ];
}
