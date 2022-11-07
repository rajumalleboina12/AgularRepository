import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-ref',
  template: ` <p>temp-ref works!</p>
    <input type="text" #myInput />
    <button (click)="logMessage(myInput.value)">Login</button>
    <button (click)="logMessage(myInput)">Login-2</button><br />
    <input #phone placeholder="phone number" />
    <button type="button" (click)="callPhone(phone.value)">Call</button>`,
  styles: [],
})
export class TempRefComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  logMessage(value: any) {
    console.log(value);
  }

  callPhone(value: any) {
    console.log(value);
  }
}
