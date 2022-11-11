import { compileDeclarePipeFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MobileService } from './mobile.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private ms: MobileService) {}
  mobiles: any;
  formHeader = 'Add mobile';
  id = null;
  mobileName = '';
  price = '';
  ram = '';
  storage = '';
  showForm = false;
  ngOnInit(): void {
    this.getMobiles();
  }
  getMobiles() {
    this.ms.fetchMobiles().subscribe(
      (response) => {
        this.mobiles = response;
      },
      (error) => {
        console.log('error');
      }
    );
  }
  deleteMobile(id: number) {
    this.ms.deleteMobile(id).subscribe((res) => {
      this.getMobiles();
    });
  }
  openForm(data = null) {
    this.showForm = true;
    if (data) {
      this.mobileName = data['name'];
      this.price = data['price'];
      this.ram = data['ram'];
      this.storage = data['storage'];
      this.id = data['id'];
      this.formHeader = 'Edit Mobile';
    } else {
      this.id = null;
      this.mobileName = '';
      this.price = '';
      this.ram = '';
      this.storage = '';
      this.formHeader = 'Add Mobile';
    }
  }

  closeForm() {
    this.showForm = false;
  }

  saveMobile() {
    this.showForm = false;
    let body = {
      id: this.id,
      name: this.mobileName,
      price: this.price,
      ram: this.ram,
      storage: this.storage,
    };
    if (this.id) {
      body['id'] = this.id;
      this.ms.putMobile(body).subscribe((res) => {
        this.getMobiles();
      });
    } else {
      this.ms.postMobile(body).subscribe((res) => {
        this.getMobiles();
      });
    }
  }
}
