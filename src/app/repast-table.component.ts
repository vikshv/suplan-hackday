import { Component } from '@angular/core';
import { PlanService } from './plan.service';

@Component({
    selector: 'repast-table',
    styleUrls: ['repast-table.component.css'],
    templateUrl: 'repast-table.component.html',
})
export class RepastTableComponent {
    dayIndex: number = 0;
    repasts: Array<any>;
    breadcrumb: Array<any>;

    constructor(public plan: PlanService) {
        const [ , , dayIndex ] = location.pathname.split('/');

        this.dayIndex = parseInt(dayIndex, 10);
        this.repasts = this.plan.days[this.dayIndex].repasts;

        const date = new Date(this.plan.days[this.dayIndex].date);
        this.breadcrumb = [
            date.toLocaleDateString()
        ];
    }
    
    ngOnInit() {
    }

    addRepast(type) {
        this.repasts = this.plan.addRepast(this.dayIndex, type);
    }

    removeRepast(index) {
        this.repasts = this.plan.removeRepast(this.dayIndex, index);
    }

    getWeight(repast) {
        const result = repast.recipes ? repast.recipes.reduce((result, recipe) => {
            return recipe.products ? recipe.products.reduce((result, product) => {
                return result + parseFloat(product.weight || 0);
            }, result) : 0;
        }, 0) : 0;
        return result.toFixed(2);
    }

    getCalories(repast) {
        const result =  repast.recipes ? repast.recipes.reduce((result, recipe) => {
            return recipe.products ? recipe.products.reduce((result, product) => {
                return result + parseFloat(product.calories || 0);
            }, result) : 0;
        }, 0) : 0;
        return result.toFixed(2);
    }

    sumWeight() {
        const result = this.reduceProp('weight');
        return result.toFixed(2);
    }

    sumCalories() {
        const result = this.reduceProp('calories');
        return result.toFixed(2);
    }

    reduceProp(name) {
        return this.repasts ? this.repasts.reduce((result, repast) => {
            return result + this._reduceRecipes(repast, name);
        }, 0) : 0;
    }

    _reduceRecipes(repast, name) {
        const result = repast.recipes ? repast.recipes.reduce((result, recipe) => {
            return recipe.products ? recipe.products.reduce((result, product) => {
                return result + parseFloat(product[name] || 0);
            }, result) : 0;
        }, 0) : 0;
        return result;
    }
}
