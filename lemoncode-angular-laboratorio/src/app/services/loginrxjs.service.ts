import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginrxjsService {
  public validLogin$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public userName$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    if (username === 'Alexis' && password === '123456') {
      
      this.validLogin$.next(true);
      this.userName$.next(username);
      
      return of(true).pipe(delay(2000));
    } else {
      return of(false).pipe(delay(2000));
    }
  }

  logout() {
    this.validLogin$.next(false);
  }

  isLogged() {
    return this.validLogin$.asObservable();;
  }
  getUserName() {
    return this.userName$.asObservable();;
  }
}