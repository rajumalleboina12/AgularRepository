import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from 'src/players';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() item = '';

  @Output() something = new EventEmitter<Player>();
  constructor() {}
  ngOnInit(): void {}

  yyy() {
    let plr: Player = {
      id: 1,
      name: 'sachin',
      country: 'india',
    };
    this.something.emit(plr);
  }
}
