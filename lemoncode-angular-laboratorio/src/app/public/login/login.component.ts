import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName!: string;
  userPassword!: string;
  loginUserTried: boolean = false
  hasErrors: boolean = false;
  errorFields: string[] = [];
  loginError: boolean = false;

  constructor(private loginService: LoginService, private router: Router) { 
  }

  ngOnInit(): void {
  }

  checkErrors() {
    if (!this.loginUserTried) {
      return
    }
    this.hasErrors = false;
    this.errorFields = [];

    if (!this.userName) {
      this.hasErrors = true;
      this.errorFields.push('user_name_empty');
    } 
    if (!this.userPassword) {
      this.hasErrors = true;
      this.errorFields.push('user_password_empty');
    } 
  }

  login() {
    this.loginUserTried = true;
    this.checkErrors();
    if (this.hasErrors) {
      return;
    }
    if (this.loginService.login(this.userName, this.userPassword)) {
      this.router.navigate(['/dashboard']);
    } else {
      this.loginError = true;
    }
  }
}
