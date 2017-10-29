import { Component } from '@angular/core';
import { PlanService } from './plan.service';

@Component({ 
    selector: 'product-list',
    styleUrls: ['product-list.component.css'],
    templateUrl: 'product-list.component.html',
})
export class ProductListComponent {
    products: Array<any>;

    constructor(public plan: PlanService) {
        const days = this.plan.days;
        this.products = this.recuceProducts(days);
    }

    recuceProducts(days) {
        const result = {};
        days.forEach(day => {
            const { repasts = [] } = day;
            repasts.forEach(repast => {
                const { recipes = [] } = repast;
                recipes.forEach(recipe => {
                    const { products = [] } = recipe;
                    products.forEach(product => {
                        const item = result[product.name] || {};
                        const { weight = 0, calories = 0 } = item;

                        const newWeight = Number(weight) + parseFloat(product.weight || 0);
                        const newCalories = Number(calories) + parseFloat(product.calories || 0);

                        result[product.name] = {
                            ...product,
                            weight: newWeight.toFixed(2),
                            calories: newCalories.toFixed(2)
                        };
                    });
                });
            });
        });
        return Object.values(result);
    }
}
