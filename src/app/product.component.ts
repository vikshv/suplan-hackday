import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlanService } from './plan.service';

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

    product: object;

    constructor(public plan: PlanService) {
        this.product = this.plan.days[this.dayIndex].repasts[this.repastIndex].recipes[this.recipeIndex].products[this.productIndex];
    }
    
    ngOnInit() {
    }

    onSubmit(form: NgForm) {

    }
}
