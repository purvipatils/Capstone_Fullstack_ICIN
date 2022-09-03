import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  readonly url = 'http://8085/';

  constructor(private http: HttpClient) {}

  public getAllUsers() {
    return this.http.get<any[]>(this.url + 'user/all');
  }
}
