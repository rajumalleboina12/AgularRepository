import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
    <h1>I am class binding</h1>
    <p>class-binding works!</p>
    <h2>welcome : {{ name }}</h2>
    <h2 class="text-success">My Angular</h2>
    <h2 [class]="successClass">My Angular</h2>
    <h2 [class.text-danger]="hasError">Error Alert</h2>
    <h2 [ngClass]="messageClasses">My Angular</h2>
  `,
  styles: [
    `
      .text-success {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
    `,
  ],
})
export class ClassBindingComponent implements OnInit {
  name = 'sachin';
  hasError = true;
  isSpecial = true;

  messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  };
  successClass = 'text-success';
  constructor() {}

  ngOnInit(): void {}
}
