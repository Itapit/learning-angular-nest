import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';
import { SignupDto } from '../dto/signup.dto';
import { SigninDto } from '../dto/signin.dto';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private readonly base = `${environment.apiUrl}/auth`;
  constructor(private readonly http: HttpClient) { }

  signup(data: SignupDto): Observable<any> {
    return this.http.post(`${this.base}/signup`, data);
  }

  signin(data: SigninDto): Observable<any> {
    return this.http.post(`${this.base}/signin`, data);
  }
}