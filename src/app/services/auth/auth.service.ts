import { Injectable } from '@angular/core';
import { ServerHttpService } from '../../config/server-http.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User, FormRegister } from '../../model/auths';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private server: ServerHttpService, private http: HttpClient) {}
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.server.REST_API_SERVER}/users`);
  }
  public handleRegister(form: FormRegister): Observable<FormRegister> {
    return this.http.post<FormRegister>(
      `${this.server.REST_API_SERVER}/users`,
      form
    );
  }
}
