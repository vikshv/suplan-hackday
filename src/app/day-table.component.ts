import { Component } from '@angular/core';
import { PlanService } from './plan.service';

@Component({
    selector: 'day-table',
    styleUrls: ['day-table.component.css'],
    templateUrl: 'day-table.component.html',
})
export class DayTableComponent {
    days: Array<any>;

    constructor(plan: PlanService) {
        this.days = plan.days;
    }

    ngOnInit() {
    }
}
