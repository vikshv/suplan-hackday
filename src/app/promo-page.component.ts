import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    selector: 'promo-page',
    templateUrl: './promo-page.component.html',
    styleUrls: [ './promo-page.component.css' ]
})
export class PromoPageComponent implements OnInit {
    progress: boolean = false;

    constructor(public auth: AuthService) {
    }

    ngOnInit(): void {
    }

    begin() {
        this.progress = true;
        this.auth.signInAnonymously().then(() => {
            this.progress = false;
        });
    }
}
