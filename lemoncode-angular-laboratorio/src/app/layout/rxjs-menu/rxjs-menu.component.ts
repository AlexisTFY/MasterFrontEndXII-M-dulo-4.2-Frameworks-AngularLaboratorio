import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginrxjsService } from 'src/app/services/loginrxjs.service';

@Component({
  selector: 'app-rxjs-menu',
  templateUrl: './rxjs-menu.component.html',
  styleUrls: ['./rxjs-menu.component.scss']
})
export class RxjsMenuComponent implements OnInit {
  name!: string;
  isLoging!: boolean;
  constructor(public loginService: LoginrxjsService, private router: Router) {
    this.loginService.userName$.subscribe( name => this.name = name);
    this.loginService.validLogin$.subscribe( value => this.isLoging = value);
   }

  ngOnInit(): void {
  }
  logout() {
    this.loginService.logout();
    this.router.navigate(['/home']);
  }
}
