import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlanService } from './plan.service';
import { Location } from '@angular/common';

@Component({ 
    selector: 'product',
    styleUrls: ['product.component.css'],
    templateUrl: 'product.component.html',
})
export class ProductComponent {
    dayIndex: number = 0;
    repastIndex: number = 0;
    recipeIndex: number = 0;
    productIndex: number = 0;

    product: any;
    breadcrumb: Array<any>;

    constructor(public plan: PlanService, public location: Location) {
        const [ , , dayIndex, repastIndex, recipeIndex, productIndex ] = window.location.pathname.split('/');

        this.dayIndex = this.parseInt(dayIndex);
        this.repastIndex = this.parseInt(repastIndex);
        this.recipeIndex = this.parseInt(recipeIndex);
        this.productIndex = this.parseInt(productIndex);

        this.product = {
            ...this.getProductLink()
        };

        const date = new Date(this.plan.days[this.dayIndex].date);
        this.breadcrumb = [
            date.toLocaleDateString(),
            this.plan.days[this.dayIndex].repasts[this.repastIndex].name,
            this.plan.days[this.dayIndex].repasts[this.repastIndex].recipes[this.recipeIndex].name
        ];
    }

    parseInt(val) {
        return parseInt(val, 10);
    }

    getProductLink() {
        return this.plan.days[this.dayIndex].repasts[this.repastIndex].recipes[this.recipeIndex].products[this.productIndex];
    }
    
    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        const product = this.getProductLink();

        product.name = this.product.name;
        product.protein = this.product.protein;
        product.fat = this.product.fat;
        product.carbohydrate = this.product.carbohydrate;
        product.calories = this.product.calories;
        product.weight = this.product.weight;

        this.plan.storePlan();

        this.location.back();
    }

    onCancel() {
        this.location.back();
    }

    calcEnergy() {
        const { protein = 0, fat = 0, carbohydrate = 0, weight = 100 } = this.product;
        if (protein || fat || carbohydrate) {
            const calories = protein * 4 + fat * 9 + carbohydrate * 4;
            this.product.calories = calories * weight / 100;
        }
    }
}
