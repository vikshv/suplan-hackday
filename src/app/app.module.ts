import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';

import { AuthService } from './auth.service';
import { PlanService } from './plan.service';

import { AppComponent } from './app.component';
import { NavbarComponent }   from './navbar.component';
import { FooterComponent } from './footer.component';

import { PromoPageComponent } from './promo-page.component';
import { HomePageComponent } from './home-page.component';
import { PlanPageComponent } from './plan-page.component';
import { LoginPageComponent } from './login-page.component';

import { DayTableComponent } from './day-table.component';
import { RepastTableComponent } from './repast-table.component';
import { RecipeTableComponent } from './recipe-table.component';
import { ProductTableComponent } from './product-table.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        PromoPageComponent,
        HomePageComponent,
        PlanPageComponent,
        LoginPageComponent,
        DayTableComponent,
        RepastTableComponent,
        RecipeTableComponent,
        ProductTableComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        MatInputModule
    ],
    providers: [
        AuthService,
        PlanService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
