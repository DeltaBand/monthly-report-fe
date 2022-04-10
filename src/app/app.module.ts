import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AuthenticationModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/mor' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
