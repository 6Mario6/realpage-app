import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {
  private urlAPI = environment.apiBaseUrl;
  private users = [];
  constructor(private http: HttpClient) {
  }

  setUsers(users) {
    this.users = users;
  }

  getUsers() {
   return this.users;
  }

  addNewUser(user) {
    this.users.unshift(user);
  }

  getUsersList() {
    return this.http.get(`${this.urlAPI}/Users`).pipe(map((response: any) => {
      return this.users.length > 0 ? this.users : response;
    }));
  }

  getUserByID(id) {
    return this.http.get(`${this.urlAPI}/Users/${id}`);
  }

  saveUser(params) {
    return this.http.post(`${this.urlAPI}/Users`, params);
  }

  updateUser(id, params) {
    return this.http.put(`${this.urlAPI}/Users/${id}`, params);
  }

  deleteUserByID(id) {
    return this.http.delete(`${this.urlAPI}/Users/${id}`);
  }

}
