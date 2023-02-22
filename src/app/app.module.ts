import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SvgBatteryComponent } from './svg-battery/svg-battery.component';
import { NgChartsModule } from 'ng2-charts';
import { AgularPositionComponent } from './agular-position/agular-position.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SvgBatteryComponent,
    AgularPositionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
