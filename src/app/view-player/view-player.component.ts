import { NonNullAssert } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../player';
import { CricketService } from '../service/cricket.service';
@Component({
  selector: 'app-view-player',
  templateUrl: './view-player.component.html',
  styleUrls: ['./view-player.component.css'],
})
export class ViewPlayerComponent implements OnInit {
  player: Player = {
    id: null,
    name: '',
    country: '',
    category: '',
    image: '',
  };
  constructor(private service: CricketService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.getPlayer(id);
  }
  getPlayer(id: number) {
    this.service.getPlayer(id).subscribe(
      (res: any) => {
        this.player = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
