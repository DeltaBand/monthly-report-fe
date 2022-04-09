import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from './shared/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService) {
    this.form = this.fb.group({
      email: this.fb.control(null, [Validators.required, Validators.email]),
      password: this.fb.control(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
    if (this.authenticationService.isAuthenticated()) {
      this.authenticationService.authenticate();
    }
  }

  public signin(): void {
    if (this.form.invalid) {
      this.form.updateValueAndValidity();
      console.log('Authentication invalid', this.form);

      return;
    }
    console.log('Authenticating');

    this.authenticationService.authenticate();
  }
}
