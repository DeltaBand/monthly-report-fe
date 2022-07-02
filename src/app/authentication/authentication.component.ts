import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationDto } from './shared/authentication.model';
import { AuthenticationService } from './shared/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private router: Router) {
    this.form = this.fb.group({
      email: this.fb.control(null, [Validators.required, Validators.email]),
      password: this.fb.control(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
    console.log('Auth init');
  }

  public signin(): void {
    if (this.form.invalid) {
      this.form.updateValueAndValidity();
      return;
    }

    this.authenticationService.authenticate(this.buildAuthentication()).subscribe((jwt) => {
      this.router.navigate(['monthly-report']);
    });
  }

  private buildAuthentication(): AuthenticationDto {
    return {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
    };
  }
}
