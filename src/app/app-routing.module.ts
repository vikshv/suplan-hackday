import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PromoPageComponent } from './promo-page.component';
import { HomePageComponent } from './home-page.component';
import { LoginPageComponent } from './login-page.component';
import { AboutPageComponent } from './about-page.component';

import { PlanPageComponent } from './plan-page.component';
import { RepastTableComponent } from './repast-table.component';
import { RecipeTableComponent } from './recipe-table.component';
import { ProductTableComponent } from './product-table.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
    { path: '', redirectTo: '/promo', pathMatch: 'full' },
    { path: 'promo', component: PromoPageComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'plan', component: PlanPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'plan/:day', component: RepastTableComponent },
    { path: 'plan/:day/:repast', component: RecipeTableComponent },
    { path: 'plan/:day/:repast/:recipe', component: ProductTableComponent },
    { path: 'plan/:day/:repast/:recipe/:product', component: ProductComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
