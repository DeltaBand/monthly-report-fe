import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './core/guards/authentication.guard';

const routes: Routes = [
  {
    path: 'monthly-report',
    loadChildren: () => import('./monthly-report/monthly-report.module').then((m) => m.MonthlyReportModule),
    canActivate: [AuthenticationGuard],
    canActivateChild: [AuthenticationGuard],
  },
  {
    path: '**',
    redirectTo: 'signin',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
