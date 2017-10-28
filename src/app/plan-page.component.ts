import { Component, OnInit } from '@angular/core';
import { PlanService } from './plan.service';

@Component({
    selector: 'plan-page',
    templateUrl: './plan-page.component.html',
    styleUrls: [ './plan-page.component.css' ]
})
export class PlanPageComponent implements OnInit {
    constructor(public plan: PlanService) {
    }

    ngOnInit(): void {
    }

    addDay() {
        this.plan.addDay();
    }

    removeDay() {
        
    }
}
