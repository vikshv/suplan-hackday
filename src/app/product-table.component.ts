import { Component } from '@angular/core';
import { PlanService } from './plan.service';

@Component({
    selector: 'product-table',
    styleUrls: ['product-table.component.css'],
    templateUrl: 'product-table.component.html',
})
export class ProductTableComponent {
    dayIndex: number = 0;
    repastIndex: number = 0;
    recipeIndex: number = 0;

    products: Array<any>;

    constructor(public plan: PlanService) {
        this.products = this.plan.days[this.dayIndex].repasts[this.repastIndex].recipes[this.recipeIndex].products;
    }
    
    ngOnInit() {
    }

    addProduct() {
        this.products = this.plan.addProductToRecipe(this.dayIndex, this.repastIndex, this.recipeIndex);
    }
}
