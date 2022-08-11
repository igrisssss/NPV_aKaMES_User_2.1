import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { User } from 'src/app/interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'Application/json' })
  };

  apiUrl = 'https://62df66dd9c47ff309e856e91.mockapi.io';

  constructor(private _http: HttpClient) { }

  getAllUser(): Observable<User[]> {
    return this._http.get<User[]>(this.apiUrl + '/user/').pipe(
    )
  }

  getById(id: number) {
    return this._http.get<User>(this.apiUrl + '/user/' + id);
  }

  createNewUser(params: any) {
    return this._http.post(this.apiUrl + '/user/', params);
  }

  deleteUser(id: number): Observable<object> {
    return this._http.delete<User>(this.apiUrl + '/user/' + id);
  }

  editUser(id: number, params: any) {
    return this._http.put(this.apiUrl + '/user/' + id, params);
  }
}
