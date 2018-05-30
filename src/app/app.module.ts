import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartModule } from 'angular-highcharts';



import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { ChartComponent } from './chart/chart.component';
import { GraphComponent } from './graph/graph.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    ChartModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
