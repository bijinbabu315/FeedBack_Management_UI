import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceConstants } from '../shared/constants/service.constants';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ })
  };
  getAllEvents$(): Observable<any> {
    return this.http.post(ServiceConstants.BASE_URL + ServiceConstants.EVENTS_LIST, this.httpOptions );
  }
}
