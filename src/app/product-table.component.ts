import { Component } from '@angular/core';
import { PlanService } from './plan.service';
import { Location } from '@angular/common';

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
    breadcrumb: Array<any>;

    recipeName: string;

    constructor(public plan: PlanService, public location: Location) {
        const [ , , dayIndex, repastIndex, recipeIndex ] = window.location.pathname.split('/');

        this.dayIndex = this.parseInt(dayIndex);
        this.repastIndex = this.parseInt(repastIndex);
        this.recipeIndex = this.parseInt(recipeIndex);

        this.products = this.plan.days[this.dayIndex].repasts[this.repastIndex].recipes[this.recipeIndex].products;

        const date = new Date(this.plan.days[this.dayIndex].date);
        this.breadcrumb = [
            date.toLocaleDateString(),
            this.plan.days[this.dayIndex].repasts[this.repastIndex].name
        ];

        this.recipeName = this.plan.days[this.dayIndex].repasts[this.repastIndex].recipes[this.recipeIndex].name;
    }

    parseInt(val) {
        return parseInt(val, 10);
    }
    
    ngOnInit() {
    }

    addProduct() {
        this.products = this.plan.addProductToRecipe(this.dayIndex, this.repastIndex, this.recipeIndex);
    }

    sumWeight() {
        const result = this.products ? this.products.reduce((result, product) => {
            return result + this.parseInt(product.weight);
        }, 0) : 0;
        return result.toFixed(2);
    }

    sumCalories() {
        const result = this.products ? this.products.reduce((result, product) => {
            return result + parseFloat(product.calories || 0);
        }, 0) : 0;
        return result.toFixed(2);
    }

    removeProduct(index) {
        this.products = this.plan.removeProductFromRecipe(this.dayIndex, this.repastIndex, this.recipeIndex, index);
    }

    changeRecipeName() {
        this.plan.changeRecipeName(this.dayIndex, this.repastIndex, this.recipeIndex, this.recipeName);
        this.location.back();
    }
}
