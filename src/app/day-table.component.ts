import { Component } from '@angular/core';
import { PlanService } from './plan.service';

@Component({
    selector: 'day-table',
    styleUrls: ['day-table.component.css'],
    templateUrl: 'day-table.component.html',
})
export class DayTableComponent {
    days: Array<any>;

    constructor(public plan: PlanService) {
    }

    ngOnInit() {
        this.days = this.plan.days;
    }

    addDay() {
        this.days = this.plan.addDay();
    }

    removeDay(index) {
        this.days = this.plan.removeDay(index);
    }

    getWeight(day) {
        const result = this.reduceProp(day, 'weight');
        return result.toFixed(2);
    }

    getCalories(day) {
        const result = this.reduceProp(day, 'calories');
        return result.toFixed(2);
    }

    reduceProp(day, name) {
        return day.repasts ? day.repasts.reduce((result, repast) => {
            return result + this._reduceRecipes(repast, name);
        }, 0) : 0;
    }

    _reduceRecipes(repast, name) {
        return repast.recipes ? repast.recipes.reduce((result, recipe) => {
            return recipe.products ? recipe.products.reduce((result, product) => {
                return result + parseFloat(product[name] || 0);
            }, result) : 0;
        }, 0) : 0;
    }
}
