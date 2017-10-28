import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PromoPageComponent } from './promo-page.component';
import { HomePageComponent } from './home-page.component';
import { PlanPageComponent } from './plan-page.component';
import { LoginPageComponent } from './login-page.component';
import { RepastTableComponent } from './repast-table.component';

const routes: Routes = [
    { path: '', redirectTo: '/promo', pathMatch: 'full' },
    { path: 'promo', component: PromoPageComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'plan', component: PlanPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'plan/:day', component: RepastTableComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
