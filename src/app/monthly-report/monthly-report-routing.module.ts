import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthlyReportComponent } from './monthly-report.component';

const routes: Routes = [
  { path: '', component: MonthlyReportComponent },
  { path: '**', component: MonthlyReportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonthlyReportRoutingModule {}
