import { Injectable } from '@angular/core';

@Injectable()
export class PlanService {
    plan: any;
    days: Array<any>;

    constructor() {
        const storedPlan = localStorage.getItem('plan');

        if (storedPlan) {
            this.plan = JSON.parse(storedPlan);
            console.log(this.plan)
        } else {
            this.plan = this._createDefaultPlan(5);
            this._storePlan(this.plan);
        }

        this.days = this.plan.days;
    }

    storePlan() {
        this._storePlan(this.plan);
    }

    _storePlan(plan) {
        this.plan = plan;
        localStorage.setItem('plan', JSON.stringify(plan));
    }

    addDay() {
        const day = this._createDay(this.days.length);
        const days = this.days.slice();

        days.push(day);

        this._storePlan({
            ...this.plan,
            days
        });

        return this.days = days;
    }

    removeDay(index) {
        this.days = this.days
            .filter(day => day.index !== index)
            .map((day, index) => ({
                ...day,
                index
            }));

        this._storePlan({
            ...this.plan,
            days: this.days
        });

        return this.days;
    }

    addRepast(dayIndex, type) {
        let newRepasts;
        
        this.days = this.days.map(day => {
            let result;
            if (day.index === dayIndex) {
                newRepasts = day.repasts.slice();
                newRepasts.push({
                    index: day.repasts.length,
                    name: this._resolveRepastName(type)
                });
                result = {
                    ...day,
                    repasts: newRepasts
                };
            } else {
                result = day;
            }
            return result;
        });

        this._storePlan({
            ...this.plan,
            days: this.days
        });

        return newRepasts;
    }

    removeRepast(dayIndex, repastIndex) {
        let newRepasts;
        
        this.days = this.days.map(day => {
            let result;
            if (day.index === dayIndex) {
                newRepasts = day.repasts.filter(repast => repast.index !== repastIndex);
                result = {
                    ...day,
                    repasts: newRepasts
                };
            } else {
                result = day;
            }
            return result;
        });

        this._storePlan({
            ...this.plan,
            days: this.days
        });

        return newRepasts;
    }

    addRecipe(dayIndex, repastIndex) {
        let newRecipes;
        
        this.days = this.days.map(day => {
            let result;
            if (day.index === dayIndex) {
                const newRepasts = day.repasts.map(repast => {
                    let result;
                    if (repast.index === repastIndex) {
                        newRecipes = repast.recipes ? repast.recipes.slice() : [];
                        newRecipes.push({
                            index: newRecipes.length,
                            name: 'Новое блюдо'
                        });
                        result = {
                            ...repast,
                            recipes: newRecipes
                        };
                    } else {
                        result = repast;
                    }
                    return result;
                });
                result = {
                    ...day,
                    repasts: newRepasts
                };
            } else {
                result = day;
            }
            return result;
        });

        this._storePlan({
            ...this.plan,
            days: this.days
        });

        return newRecipes;
    }

    addProductToRepast(dayIndex, repastIndex) {
        let newProducts;
        
        this.days = this.days.map(day => {
            let result;
            if (day.index === dayIndex) {
                const newRepasts = day.repasts.map(repast => {
                    let result;
                    if (repast.index === repastIndex) {
                        newProducts = repast.products ? repast.products.slice() : [];
                        newProducts.push(this._createNewProduct(newProducts.length));
                        result = {
                            ...repast,
                            products: newProducts
                        };
                    } else {
                        result = repast;
                    }
                    return result;
                });
                result = {
                    ...day,
                    repasts: newRepasts
                };
            } else {
                result = day;
            }
            return result;
        });

        this._storePlan({
            ...this.plan,
            days: this.days
        });

        return newProducts;
    }

    addProductToRecipe(dayIndex, repastIndex, recipeIndex) {
        let newProducts;
        
        this.days = this.days.map(day => {
            let result;
            if (day.index === dayIndex) {
                const repasts = day.repasts.map(repast => {
                    let result;
                    if (repast.index === repastIndex) {
                        const recipes = repast.recipes.map(recipe => {
                            let result;
                            if (recipe.index === recipeIndex) {
                                newProducts = recipe.products ? recipe.products.slice() : [];
                                newProducts.push(this._createNewProduct(newProducts.length));
                                result = {
                                    ...recipe,
                                    products: newProducts
                                };
                            } else {
                                result = recipe;
                            }
                            return result;
                        });
                        result = {
                            ...repast,
                            recipes
                        };
                    } else {
                        result = repast;
                    }
                    return result;
                });
                result = {
                    ...day,
                    repasts
                };
            } else {
                result = day;
            }
            return result;
        });

        this._storePlan({
            ...this.plan,
            days: this.days
        });

        return newProducts;
    }

    removeProductFromRecipe(dayIndex, repastIndex, recipeIndex, productIndex) {
        let newProducts;
        
        this.days = this.days.map(day => {
            let result;
            if (day.index === dayIndex) {
                const repasts = day.repasts.map(repast => {
                    let result;
                    if (repast.index === repastIndex) {
                        const recipes = repast.recipes.map(recipe => {
                            let result;
                            if (recipe.index === recipeIndex) {
                                newProducts = recipe.products.filter(product => product.index !== productIndex);
                                result = {
                                    ...recipe,
                                    products: newProducts
                                };
                            } else {
                                result = recipe;
                            }
                            return result;
                        });
                        result = {
                            ...repast,
                            recipes
                        };
                    } else {
                        result = repast;
                    }
                    return result;
                });
                result = {
                    ...day,
                    repasts
                };
            } else {
                result = day;
            }
            return result;
        });

        this._storePlan({
            ...this.plan,
            days: this.days
        });

        return newProducts;
    }

    _createNewProduct(index) {
        return {
            index,
            name: 'Новый продукт',
            protein: 0,
            fat: 0,
            carbohydrate: 0,
            energy: 0
        };
    }

    _resolveRepastName(type) {
        let result;
        if (type === 0) {
            result = 'null';
        } else if (type === 1) {
            result = 'Завтрак';
        } else if (type === 2) {
            result = 'Обед';
        } else if (type === 3) {
            result = 'Ужин';
        } else if (type === 4) {
            result = 'Перекус';
        }
        return result;
    }

    _createDefaultPlan(days) {
        return {
            days: this._createDays(days)
        };
    }

    _createDays(days) {
        const result = [];
        for (let i = 0; i < days; i++) {
            const day = this._createDay(i);
            result.push(day);
        }
        return result;
    }

    _createDay(index) {
        const date = new Date();
        date.setDate(date.getDate() + index);

        return {
            index,
            weight: 'weight',
            calories: 'calories',
            date: date.getTime(),
            repasts: []
        };
    }

    // _createDefaultRepasts() {
    //     return [
    //         {
    //             index: 0,
    //             name: 'Завтрак',
    //             recipes: [
    //                 {
    //                     index: 0,
    //                     name: 'Каша',
    //                     products: [
    //                         {
    //                             name: 'Молоко'
    //                         },
    //                         {
    //                             name: 'Гречка'
    //                         }
    //                     ]
    //                 }
    //             ],
    //             products: [
    //                 {
    //                     name: 'Шоколад'
    //                 }
    //             ]
    //         },
    //         {
    //             index: 1,
    //             name: 'Обед',
    //             recipes: [],
    //             products: []
    //         },
    //         {
    //             index: 2,
    //             name: 'Ужин',
    //             recipes: [],
    //             products: []
    //         }
    //     ];
    // }
}
