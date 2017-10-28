import { Component } from '@angular/core';
import { PlanService } from './plan.service';

@Component({
    selector: 'recipe-table',
    styleUrls: ['recipe-table.component.css'],
    templateUrl: 'recipe-table.component.html',
})
export class RecipeTableComponent {
    dayIndex: number = 0;
    repastIndex: number = 0;
    recipes: Array<any>;
    products: Array<any>;

    constructor(public plan: PlanService) {
        this.recipes = this.plan.days[this.dayIndex].repasts[this.repastIndex].recipes;
        this.products = this.plan.days[this.dayIndex].repasts[this.repastIndex].products;
    }
    
    ngOnInit() {
    }

    addRecipe() {
        this.recipes = this.plan.addRecipe(this.dayIndex, this.repastIndex);
    }

    addProduct() {
        this.products = this.plan.addProductToRepast(this.dayIndex, this.repastIndex);
    }
}
