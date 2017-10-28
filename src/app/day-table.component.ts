import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'day-table',
  styleUrls: ['day-table.component.css'],
  templateUrl: 'day-table.component.html',
})

export class DayTableComponent {
  displayedColumns = ['number', 'calendarDate', 'weight', 'calories'];
  exampleDatabase = new ExampleDatabase();
  dataSource: ExampleDataSource | null;

  ngOnInit() {
    this.dataSource = new ExampleDataSource(this.exampleDatabase);
  }
}

const CALORIES = [ 180, 195, 210, 230, 235, 240, 242, 246 ];
const WEIGHT = [ 552, 614, 632, 654 ];

export interface UserData {
  id: number;
  weight: string;
  calendarDate: number;
  calories: string;
}

export class ExampleDatabase {
  dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
  get data(): UserData[] { return this.dataChange.value; }

  constructor() {
    for (let i = 0; i < 5; i++) { this.addUser(); }
  }

  addUser() {
    const copiedData = this.data.slice();
    copiedData.push(this.createNewUser());
    this.dataChange.next(copiedData);
  }

  private createNewUser() {
    const id = (this.data.length + 1);
    const date = new Date();
    date.setDate(date.getDate() + id);
    const calendarDate = date.getTime();
    const weight = `${WEIGHT[Math.round(Math.random() * (WEIGHT.length - 1))]} гр.`;
    const calories = `${CALORIES[Math.round(Math.random() * (CALORIES.length - 1))]} кКалл.`;
    return {
      id,
      weight,
      calendarDate,
      calories
    };
  }
}

export class ExampleDataSource extends DataSource<any> {
  constructor(private _exampleDatabase: ExampleDatabase) {
    super();
  }

  connect(): Observable<UserData[]> {
    return this._exampleDatabase.dataChange;
  }

  disconnect() {}
}
