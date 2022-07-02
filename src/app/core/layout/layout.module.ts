import { NgModule } from '@angular/core';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BaseLayoutComponent, MainNavComponent],
  imports: [MaterialModule, RouterModule],
  exports: [BaseLayoutComponent, MainNavComponent],
})
export class LayoutModule {}
