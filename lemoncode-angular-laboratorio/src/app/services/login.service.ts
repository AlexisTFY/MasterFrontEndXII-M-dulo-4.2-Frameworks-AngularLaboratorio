import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  validLogin: boolean = false;
  userName: string = '';

  constructor() {
    const userName = localStorage.getItem('username')
    if(userName) {
      this.validLogin = true;
      this.userName = userName;
    }
   }

  login(username: string, password: string): boolean {
    if (username === 'Alexis' && password === '123456') {
      this.validLogin = true;
      localStorage.setItem('username', username);
      this.userName = username;
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.validLogin = false;
    localStorage.removeItem('username');
  }

  isLogged() {
    return this.validLogin;
  }
  getUserName() {
    return this.userName;
  }
}
