import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {
  private urlAPI = environment.apiBaseUrl;
  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get(`${this.urlAPI}/Users`);
  }

  getUserByID(id) {
    return this.http.get(`${this.urlAPI}/Users/${id}`);
  }

  saveUser(params) {
    return this.http.post(`${this.urlAPI}/Users`, params);
  }

}
