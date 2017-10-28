import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent }   from './navbar.component';
import { FooterComponent } from './footer.component';

import { AuthService } from './auth.service';

import { PromoPageComponent } from './promo-page.component';
import { HomePageComponent } from './home-page.component';
import { PlanPageComponent } from './plan-page.component';

import { DayTableComponent } from './day-table.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        PromoPageComponent,
        HomePageComponent,
        PlanPageComponent,
        DayTableComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatTableModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
