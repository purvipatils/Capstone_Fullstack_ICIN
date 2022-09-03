import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EnableService {
  readonly rootUrl ='http://8085/user/';
  constructor(private http: HttpClient) {}

  enableLoginService(username) {
    return this.http.get(this.rootUrl + username + '/enable');
  }
}