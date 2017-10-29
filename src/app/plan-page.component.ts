import { Component, OnInit } from '@angular/core';
import { PlanService } from './plan.service';

@Component({
    selector: 'plan-page',
    templateUrl: './plan-page.component.html',
    styleUrls: [ './plan-page.component.css' ]
})
export class PlanPageComponent implements OnInit {
    tab: number;

    constructor(public plan: PlanService) {
        this.tab = 1;
    }

    ngOnInit(): void {
    }

    onClickTab(index) {
        this.tab = index;
    }

    isSelected(index) {
        return index === this.tab;
    }
}
