import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Details } from '../details';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  url: string = ' http://localhost:3000/details';
  getDetails() {
    return this.http.get<Details[]>(this.url);
  }
}
