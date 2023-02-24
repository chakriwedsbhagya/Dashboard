import { NgModule , CUSTOM_ELEMENTS_SCHEMA, Inject, Injector} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SvgBatteryComponent } from './svg-battery/svg-battery.component';
import { NgChartsModule } from 'ng2-charts';
import { AgularPositionComponent } from './agular-position/agular-position.component';
import { NgxView360Module } from 'ngx-view360';

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
    NgChartsModule,
    NgxView360Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const towerDashboard = createCustomElement(AppComponent, {injector})
    customElements.define('tower-dashboard', towerDashboard);
  }
 }
