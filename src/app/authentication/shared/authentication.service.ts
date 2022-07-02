import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { BaseService } from 'src/app/core/services/base.service';
import { AuthenticationDto } from './authentication.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService extends BaseService {
  private _isAuthenticated: boolean = false;

  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }

  public authenticate(authentication: AuthenticationDto): Observable<any> {
    return this._create<any>('/auth/authenticate', authentication).pipe(
      map((jwt: any) => {
        console.log('JWT', jwt);
        this._isAuthenticated = true;
        return jwt.jwt;
      })
    );
  }

  public logout(): Observable<any> {
    this._isAuthenticated = false;
    return of(this._isAuthenticated);
  }

  public isAuthenticated(): boolean {
    console.log('IsAuthenticated:', this._isAuthenticated);
    return this._isAuthenticated;
  }
}
