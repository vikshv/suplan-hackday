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

    constructor(public plan: PlanService) {
        this.repasts = this.plan.days[this.dayIndex].repasts;
    }
    
    ngOnInit() {
    }

    addRepast(type) {
        this.repasts = this.plan.addRepast(this.dayIndex, type);
    }

    removeRepast(index) {
        this.repasts = this.plan.removeRepast(this.dayIndex, index);
    }
}
