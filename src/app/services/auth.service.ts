import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url= 'http://localhost:3000'

  constructor(
    private http: HttpClient,
    private jwtHelpers: JwtHelperService
  ) { }

  sigin(user:any){
    return this.http.post(`${this.url}/user/signin`, user)
  }

  isAuth():boolean{
    const token = localStorage.getItem('token');
    if(this.jwtHelpers.isTokenExpired(token) || !localStorage.getItem('token')){
      return false
    }
    return true
  }
}
