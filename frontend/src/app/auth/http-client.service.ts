import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignupDto } from './dto/signup.dto';
import { Observable } from 'rxjs/internal/Observable';
import { SigninDto } from './dto/signin.dto';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  private base = 'http://localhost:3000/auth';
  constructor(private http: HttpClient) { }

  signup(data: SignupDto): Observable<any> {
    return this.http.post(`${this.base}/signup`, data);
  }

  signin(data: SigninDto): Observable<any> {
    return this.http.post(`${this.base}/signin`, data);
  }
}
