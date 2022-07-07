import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/shared/authentication.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
})
export class MainNavComponent {
  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  public navigate(route: any): void {
    this.router.navigate([route]);
  }

  public logout(): void {
    console.log('logout');
    this.authenticationService.logout().subscribe(() => {
      this.router.navigate(['/', 'signin']);
    });
  }
}
