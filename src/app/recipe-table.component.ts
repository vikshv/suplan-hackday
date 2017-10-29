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
    breadcrumb: Array<any>;

    repastName: string;

    constructor(public plan: PlanService) {
        const [ , , dayIndex, repastIndex ] = window.location.pathname.split('/');

        this.dayIndex = this.parseInt(dayIndex);
        this.repastIndex = this.parseInt(repastIndex);

        this.recipes = this.plan.days[this.dayIndex].repasts[this.repastIndex].recipes;
        this.products = this.plan.days[this.dayIndex].repasts[this.repastIndex].products;
        this.repastName = this.plan.days[this.dayIndex].repasts[this.repastIndex].name;

        const date = new Date(this.plan.days[this.dayIndex].date);
        this.breadcrumb = [
            date.toLocaleDateString(),
            this.repastName
        ];
    }

    parseInt(val) {
        return parseInt(val, 10);
    }
    
    ngOnInit() {
    }

    addRecipe() {
        this.recipes = this.plan.addRecipe(this.dayIndex, this.repastIndex);
    }

    addProduct() {
        this.products = this.plan.addProductToRepast(this.dayIndex, this.repastIndex);
    }

    sumWeight() {
        const result = this.sum('weight');
        return result.toFixed(2);
    }

    sumCalories() {
        const result =  this.sum('calories');
        return result.toFixed(2);
    }

    sum(propName) {
        return this.recipes ? this.recipes.reduce((result, recipe) => {
            return recipe.products ? recipe.products.reduce((result, product) => {
                return result + parseFloat(product[propName] || 0);
            }, result) : result;
        }, 0) : '0';
    }

    getWeight(recipe) {
        const result =   recipe.products ? recipe.products.reduce((result, product) => {
            return result + parseFloat(product.weight);
        }, 0) : '0';
        return result.toFixed(2);
    }

    getCalories(recipe) {
        const result = recipe.products ? recipe.products.reduce((result, product) => {
            return result + parseFloat(product.calories || 0);
        }, 0) : '0';
        return result.toFixed(2);
    }
}
