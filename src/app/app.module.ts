import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgApexchartsModule } from 'ng-apexcharts';
import { PiechartComponent } from './piechart/piechart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadchartComponent } from './loadchart/loadchart.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { CrowdsourcepageComponent } from './crowdsourcepage/crowdsourcepage.component';
import { HomepageComponent } from './homepage/homepage.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { DatatimexComponent } from './datatimex/datatimex.component';
import {MatGridListModule} from '@angular/material/grid-list';

const  appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'crowdsource', component: CrowdsourcepageComponent}
] ;

@NgModule({
  declarations: [
    AppComponent,
    PiechartComponent,
    LoadchartComponent,
    CrowdsourcepageComponent,
    HomepageComponent,
    DatatimexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatGridListModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
