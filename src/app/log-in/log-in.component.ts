import { Component, OnInit } from '@angular/core';
import { Details } from '../details';
import { ServiceService } from '../Rest/service.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  details: Details[] = [];
  FullName: string = '';
  p: number = 1;
  constructor(private ss: ServiceService) {}
  ngOnInit(): void {
    this.ss.getDetails().subscribe((response) => {
      this.details = response;
    });
  }
  Search() {
    if (this.FullName == '') {
      this.ngOnInit();
    } else {
      this.details = this.details.filter((res) => {
        return res.FullName.toLocaleLowerCase().match(
          this.FullName.toLocaleLowerCase()
        );
      });
    }
  }
}
