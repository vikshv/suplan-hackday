import { Component, OnInit } from '@angular/core';
import { PlanService } from './plan.service';

@Component({
    selector: 'statistic-tab',
    templateUrl: './statistic-tab.component.html',
    styleUrls: [ './statistic-tab.component.css' ]
})
export class StatisticTabComponent implements OnInit {

    constructor(public planService: PlanService) {
    }

    ngOnInit(): void {
        const AmCharts = window['AmCharts'];
        const { days } = this.planService.plan;

        const dataProvider = days.map((day, index) => {
            const calories = this.reduceProp(day, 'calories');
            const weight = this.reduceProp(day, 'weight');
            return {
                "category": `День ${index + 1}`,
                "column-1": weight.toFixed(2),
                "column-2": calories.toFixed(2)
            };
        });

        AmCharts.makeChart("chartdiv",
                {
                    "type": "serial",
                    "categoryField": "category",
                    "startDuration": 1,
                    "categoryAxis": {
                        "gridPosition": "start"
                    },
                    "trendLines": [],
                    "graphs": [
                        {
                            "balloonText": "[[title]] of [[category]]:[[value]]",
                            "fillAlphas": 1,
                            "id": "AmGraph-1",
                            "title": "Вес",
                            "type": "column",
                            "valueField": "column-1",
                            "labelText": "[[value]]"
                        },
                        {
                            "balloonText": "[[title]] of [[category]]:[[value]]",
                            "fillAlphas": 1,
                            "id": "AmGraph-2",
                            "title": "Калорийность",
                            "type": "column",
                            "valueField": "column-2",
                            "labelText": "[[value]]"
                        }
                    ],
                    "guides": [],
                    "valueAxes": [
                        {
                            "id": "ValueAxis-1",
                            "stackType": "regular",
                            "title": "ккал, г"
                        }
                    ],
                    "allLabels": [],
                    "balloon": {},
                    "legend": {
                        "enabled": true,
                        "useGraphSettings": true
                    },
                    "titles": [
                        {
                            "id": "Title-1",
                            "size": 15,
                            "text": "Вес и калорийность по дням"
                        }
                    ],
                    "dataProvider": dataProvider
                }
            );
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
