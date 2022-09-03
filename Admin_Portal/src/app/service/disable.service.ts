import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DisableService {
  readonly rootUrl ='http://8085/user/';

  constructor(private http: HttpClient) {}

  disableLoginService(username) {
    return this.http.get(this.rootUrl + username + '/disable');
  }
}
