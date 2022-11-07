import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  template: `
    <p>style-binding works!</p>
    <h1 [style.color]="raju">I am Style Binding</h1>
    <h2 [style.color]="'orange'">Angular</h2>
    <h2 [style.color]="hasError ? 'red' : 'green'">React</h2>
    <h2 [style.color]="mystyle">JavaScript</h2>
    <h2 [ngStyle]="titleStyles">Express</h2>
    <h2 [style.color]="sal > 45000 ? 'red' : 'green'">{{ sal }}</h2>
  `,
  styles: [],
})
export class StyleBindingComponent implements OnInit {
  raju = 'blue';
  hasError = true;
  mystyle = 'blue';

  titleStyles = {
    color: 'yellow',
    fontStyle: 'brown',
  };

  sal: number = 46000;
  constructor() {}

  ngOnInit(): void {}
}
