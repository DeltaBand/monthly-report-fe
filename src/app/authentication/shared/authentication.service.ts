import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private _isAuthenticated: boolean = false;

  constructor(private router: Router) {}

  public authenticate(redirect = true): Observable<any> {
    this._isAuthenticated = true;
    if (redirect) this.router.navigate(['home']);
    return of(this._isAuthenticated);
  }

  public logout(redirect = true): Observable<any> {
    this._isAuthenticated = false;
    if (redirect) this.router.navigate(['signin']);
    return of(this._isAuthenticated);
  }

  public isAuthenticated(): boolean {
    return this._isAuthenticated;
  }
}
