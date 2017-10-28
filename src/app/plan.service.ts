import { Injectable } from '@angular/core';

@Injectable()
export class PlanService {
    days: Array<any>;

    constructor() {
        const plan = this._createDefaultPlan(5);
        this.days = plan.days;
    }

    addDay() {
        const day = this._createDay(this.days.length);
        const days = this.days.slice();
        days.push(day);
        return this.days = days;
    }

    removeDay(index) {
        return this.days = this.days
            .filter(day => day.index !== index)
            .map((day, index) => ({
                ...day,
                index
            }));
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

        return newRepasts;
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
