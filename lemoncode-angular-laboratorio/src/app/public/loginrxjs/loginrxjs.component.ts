import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginrxjsService } from 'src/app/services/loginrxjs.service';

@Component({
  selector: 'app-loginrxjs',
  templateUrl: './loginrxjs.component.html',
  styleUrls: ['./loginrxjs.component.scss']
})
export class LoginrxjsComponent implements OnInit {
  userName!: string;
  userPassword!: string;
  loginUserTried: boolean = false
  hasErrors: boolean = false;
  errorFields: string[] = [];
  loginError: boolean = false;
  loading: boolean = false;

  constructor(private loginService: LoginrxjsService, private router: Router) { 
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
    this.loading = true;
    this.loginUserTried = true;
    this.checkErrors();
    if (this.hasErrors) {
      return;
    }
    this.loginService.login(this.userName, this.userPassword).subscribe( value => {
      if (value) {
          this.router.navigate(['/dashboard']);
        } else {
          this.loginError = true;
        }
        this.loading = false;
    });
  }
}
