import { Component } from '@angular/core';

@Component({
    selector: 'day-table',
    styleUrls: ['day-table.component.css'],
    templateUrl: 'day-table.component.html',
})
export class DayTableComponent {
  displayedColumns = ['userId', 'userName', 'progress', 'color'];

  ngOnInit() {
  }
}
