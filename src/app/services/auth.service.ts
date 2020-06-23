import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceConstants } from '../shared/constants/service.constants';

const AUTH_API = ServiceConstants.BASE_URL + ServiceConstants.AUTH_URL;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API , {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

}
