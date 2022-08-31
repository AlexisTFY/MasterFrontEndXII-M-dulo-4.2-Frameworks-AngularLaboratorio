import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  validLogin: boolean = false;
  userName: string = '';

  constructor() { }

  login(username: string, password: string): boolean {
    if (username === 'Alexis' && password === '123456') {
      this.validLogin = true;
      this.userName = username;
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.validLogin = false;
  }

  isLogged() {
    return this.validLogin;
  }
  getUserName() {
    return this.userName;
  }
}
