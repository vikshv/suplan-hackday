import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent }   from './navbar.component';
import { FooterComponent } from './footer.component';

import { AuthService } from './auth.service';

import { PromoPageComponent } from './promo-page.component';
import { HomePageComponent } from './home-page.component';
import { PlanPageComponent } from './plan-page.component';
import { LoginPageComponent } from './login-page.component';

import { DayTableComponent } from './day-table.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        PromoPageComponent,
        HomePageComponent,
        PlanPageComponent,
        LoginPageComponent,
        DayTableComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatTableModule,
        MatFormFieldModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
