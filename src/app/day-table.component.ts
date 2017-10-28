import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
    selector: 'day-table',
    styleUrls: ['day-table.component.css'],
    templateUrl: 'day-table.component.html',
})
export class DayTableComponent {
    items: Observable<any[]>;

    displayedColumns = ['number', 'date', 'weight', 'calories'];
    exampleDatabase = new ExampleDatabase();
    dataSource: ExampleDataSource | null;

    constructor(db: AngularFireDatabase) {
        this.items = db.list('items').valueChanges();
    }

    ngOnInit() {
        this.dataSource = new ExampleDataSource(this.exampleDatabase);
    }
}

interface ProductData {
    name: string;
}

interface RecipeData {
    products: Array<any>;
}

interface RepastData {
    recipes: Array<any>;
    products: Array<any>;
}

interface DayData {
    index: number;
    date: number;
    weight: string;
    calories: string;

    repasts: Array<any>;
    recipes: Array<any>;
    products: Array<any>;
}

export class ExampleDatabase {
    dataChange: BehaviorSubject<DayData[]> = new BehaviorSubject<DayData[]>([]);
    get data(): DayData[] { return this.dataChange.value; }

    constructor() {
        for (let i = 0; i < 5; i++) {
            this.addDay();
        }
    }

    addDay() {
        const copiedData = this.data.slice();
        copiedData.push(this.createDayData());
        this.dataChange.next(copiedData);
    }

    private createDayData() {
        const index = (this.data.length + 1);
        const date = new Date();
        date.setDate(date.getDate() + index);

        const weight = `100 гр.`;
        const calories = `200 кКалл.`;

        return {
            index,
            weight,
            date: date.getTime(),
            calories,

            repasts: [],
            recipes: [],
            products: []
        };
    }
}

export class ExampleDataSource extends DataSource<any> {
    constructor(private _exampleDatabase: ExampleDatabase) {
        super();
    }

    connect(): Observable<DayData[]> {
        return this._exampleDatabase.dataChange;
    }

    disconnect() {}
}
