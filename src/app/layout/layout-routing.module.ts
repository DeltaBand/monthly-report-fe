import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent },
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then((m) => m.HomeModule),
    outlet: 'main-content',
  },
  {
    path: 'monthly-report',
    loadChildren: () => import('../monthly-report/monthly-report.module').then((m) => m.MonthlyReportModule),
    outlet: 'main-content',
  },
  {
    path: 'users',
    loadChildren: () => import('../users/users.module').then((m) => m.UsersModule),
    outlet: 'main-content',
  },
  { path: '**', component: LayoutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
