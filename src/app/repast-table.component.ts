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

    constructor(plan: PlanService) {
        this.repasts = plan.days[this.dayIndex].repasts;
    }
    
    ngOnInit() {
    }
}
