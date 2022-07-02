import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [CommonModule, AuthenticationRoutingModule, ReactiveFormsModule, MatFormFieldModule, MaterialModule],
  exports: [AuthenticationComponent],
})
export class AuthenticationModule {}
