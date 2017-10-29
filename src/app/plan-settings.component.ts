import { Component, OnInit } from '@angular/core';
import { PlanService } from './plan.service';

@Component({
    selector: 'plan-settings',
    templateUrl: './plan-settings.component.html',
    styleUrls: [ './plan-settings.component.css' ]
})
export class PlanSettingsComponent implements OnInit {
    planName: string;
    countMembers: number;
    countDays: number;

    constructor(public planService: PlanService) {
        this.planName = this.planService.plan.name;
        this.countMembers = this.planService.plan.countMembers;
        this.countDays = this.planService.plan.countDays;
    }

    ngOnInit(): void {
    }

    save() {
        this.planService.setup({
            name: this.planName,
            countMembers: this.countMembers,
            countDays: this.countDays
        });
    }
}
