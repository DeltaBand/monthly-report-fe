import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private _isAuthenticated: boolean = false;

  public authenticate(): Observable<any> {
    this._isAuthenticated = true;
    return of(this._isAuthenticated);
  }

  public logout(): Observable<any> {
    this._isAuthenticated = false;
    return of(this._isAuthenticated);
  }

  public isAuthenticated(): boolean {
    return this._isAuthenticated;
  }
}
