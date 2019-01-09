import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: Http) {}

  data = [];

  getList(callback) {
    this.http.get(`./assets/qoutes.json`).subscribe(response => {
      // console.log(response);
      callback(response.json());
    });
  }
}
