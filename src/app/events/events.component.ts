import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `
    <h1>I am event</h1>
    <p>events works!</p>
    <button (click)="onClick($event)">Click Me</button><br />
    <button (click)="msg = 'mymsg'">Click Me</button>
    message:{{ msg }}
  `,
  styles: [],
})
export class EventsComponent implements OnInit {
  msg: string = '';
  constructor() {}

  ngOnInit(): void {}

  onClick(event: any) {
    console.log(event);
    this.msg = event.type;
  }
}
