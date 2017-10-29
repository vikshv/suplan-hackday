import { Component, OnInit } from '@angular/core';
import { PlanService } from './plan.service';

@Component({
    selector: 'plan-settings',
    templateUrl: './plan-settings.component.html',
    styleUrls: [ './plan-settings.component.css' ]
})
export class PlanSettingsComponent implements OnInit {

    constructor(public plan: PlanService) {
    }

    ngOnInit(): void {
    }
}
