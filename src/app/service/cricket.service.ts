import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CricketService {
  constructor(private http: HttpClient) {}
  private baseUrl: string = 'http://localhost:3006';
  getPlayers() {
    return this.http.get(`${this.baseUrl}/players`);
  }
  getPlayer(id: number) {
    return this.http.get(`${this.baseUrl}/players/${id}`);
  }
}
