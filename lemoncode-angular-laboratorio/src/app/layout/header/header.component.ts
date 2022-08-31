import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { LoginrxjsService } from 'src/app/services/loginrxjs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoging!: boolean;
  constructor(public loginService: LoginService, public loginServicerxjs: LoginrxjsService) { 
    this.loginServicerxjs.validLogin$.subscribe( value => this.isLoging = value);
  }

  ngOnInit(): void {
  }

}
