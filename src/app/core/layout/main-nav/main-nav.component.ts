import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/shared/authentication.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {
  constructor(private authenticationService: AuthenticationService) {}

  public logout(): void {
    console.log('logout');
    this.authenticationService.logout();
  }
}
