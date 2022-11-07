import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { CricketService } from '../service/cricket.service';
@Component({
  selector: 'app-view-players',
  templateUrl: './view-players.component.html',
  styleUrls: ['./view-players.component.css'],
})
export class ViewPlayersComponent implements OnInit {
  players: Player[] = [];
  constructor(private service: CricketService) {}

  ngOnInit(): void {
    console.log('ngOnInit() function....');
    this.getAllPlayers();
  }
  getAllPlayers() {
    console.log('getAllPlayers() function....');
    this.service.getPlayers().subscribe(
      (res: any) => {
        console.log(res);
        this.players = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
