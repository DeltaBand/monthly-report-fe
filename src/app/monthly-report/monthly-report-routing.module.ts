import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthlyReportComponent } from './monthly-report.component';

const routes: Routes = [
  { path: '', component: MonthlyReportComponent },
  {
    path: 'users',
    loadChildren: () => import('../users/users.module').then((m) => m.UsersModule),
    outlet: 'main-content',
  },
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then((m) => m.HomeModule),
    outlet: 'main-content',
  },
  { path: '**', component: MonthlyReportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonthlyReportRoutingModule {}
