import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

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
        for (let i = 0; i < 5; i++) {
            this.addUser();
        }
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
        const weight = `100 гр.`;
        const calories = `200 кКалл.`;
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
