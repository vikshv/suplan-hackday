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
}
