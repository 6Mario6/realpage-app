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
    return this.http.get(
     `${this.urlAPI}/Users`
    );
  }



}
