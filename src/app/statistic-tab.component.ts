import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'statistic-tab',
    templateUrl: './statistic-tab.component.html',
    styleUrls: [ './statistic-tab.component.css' ]
})
export class StatisticTabComponent implements OnInit {
    progress: boolean = false;
    constructor(public auth: AuthService) {
    }
    ngOnInit(): void {
    }
}
