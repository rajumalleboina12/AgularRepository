import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class MobileService {
  constructor(private http: HttpClient) {}

  url: string = 'http://localhost:3000/mobiles';
  fetchMobiles() {
    return this.http.get(this.url);
  }

  deleteMobile(id: any) {
    return this.http.delete(this.url + '/' + id);
  }
  postMobile(body: any) {
    return this.http.post(this.url, body);
  }

  putMobile(body: any) {
    return this.http.put(this.url, body);
  }
}
