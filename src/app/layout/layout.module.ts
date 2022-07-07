import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [LayoutComponent, MainNavComponent],
  imports: [MaterialModule, RouterModule, LayoutRoutingModule],
  exports: [LayoutComponent, MainNavComponent],
})
export class LayoutModule {}
