import { Component } from '@angular/core';
import { Player } from '../players';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hello-angular';
  currentItem: string = 'waterbottle';
  zzz(player: Player) {
    console.log(player.id + ' ' + player.name + ' ' + player.country);
  }
  today: number = Date.now();
}
