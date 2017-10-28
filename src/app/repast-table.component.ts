import { Component } from '@angular/core';

@Component({
    selector: 'repast-table',
    styleUrls: ['repast-table.component.css'],
    templateUrl: 'repast-table.component.html',
})
export class RepastTableComponent {
    displayedColumns = ['number', 'date', 'weight', 'calories'];
    
    ngOnInit() {
    }
}
