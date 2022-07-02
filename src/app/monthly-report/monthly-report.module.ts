import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonthlyReportRoutingModule } from './monthly-report-routing.module';
import { LayoutModule } from '../core/layout/layout.module';
import { MonthlyReportComponent } from './monthly-report.component';

@NgModule({
  declarations: [MonthlyReportComponent],
  imports: [CommonModule, MonthlyReportRoutingModule, LayoutModule],
})
export class MonthlyReportModule {}
