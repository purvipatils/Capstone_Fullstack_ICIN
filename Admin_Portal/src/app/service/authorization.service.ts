import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthorizeUser } from '../model/AuthorizeUser';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  readonly rootUrl ='http://8085/user/';

  constructor(private http: HttpClient) {}

  getRequestData() {
    return this.http.get<AuthorizeUser[]>(this.rootUrl + '/unauthorized/all');
  }

  authorizeAccount(username) {
    return this.http.get(this.rootUrl + username + '/authorize');
  }

  rejectRequest(username) {
    return this.http.get(this.rootUrl + username + '/authorize/cancel');
  }
}