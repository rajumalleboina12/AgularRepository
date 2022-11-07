import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condition',
  template: `
    <h1>I am Condition</h1>
    <p>condition works!</p>
    <h2 *ngIf="displayName; then first; else second">Show Me</h2>

    <ng-template #first>
      <h1>first content</h1>
    </ng-template>

    <ng-template #second>
      <h1>second content</h1>
    </ng-template>
  `,
  styles: [],
})
export class ConditionComponent implements OnInit {
  displayName: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
