import { Injectable }    from '@angular/core';

@Injectable()
export class PlanService {
    days: Array<any>;

    constructor() {
        const plan = this._createDefaultPlan(5);
        this.days = plan.days;
    }

    _createDefaultPlan(days) {
        return {
            days: this._createDays(days)
        };
    }

    _createDays(days) {
        const result = [];
        for (let i = 0; i < days; i++) {
            const date = new Date();
            date.setDate(date.getDate() + i);

            result.push({
                index: i,
                weight: 'weight',
                calories: 'calories',
                date: date.getTime(),
                repasts: this._createDefaultRepasts()
            });
        }
        return result;
    }

    _createDefaultRepasts() {
        return [
            {
                index: 0,
                name: 'Завтрак',
                recipes: [
                    {
                        index: 0,
                        name: 'Каша',
                        products: [
                            {
                                name: 'Молоко'
                            },
                            {
                                name: 'Гречка'
                            }
                        ]
                    }
                ],
                products: [
                    {
                        name: 'Шоколад'
                    }
                ]
            },
            {
                index: 1,
                name: 'Обед',
                recipes: [],
                products: []
            },
            {
                index: 2,
                name: 'Ужин',
                recipes: [],
                products: []
            }
        ];
    }
}
