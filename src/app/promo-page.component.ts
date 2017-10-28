import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
    selector: 'promo-page',
    templateUrl: './promo-page.component.html',
    styleUrls: [ './promo-page.component.css' ]
})
export class PromoPageComponent implements OnInit {
    progress: boolean = false;

    constructor(public afAuth: AngularFireAuth) {
    }

    ngOnInit(): void {
    }

    begin() {
        this.progress = true;
        this._signInAnonymously().then(() => {
            this.progress = false;
        });
    }

    _signInAnonymously() {
        return this.afAuth.auth.signInAnonymously().catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            if (errorCode === 'auth/operation-not-allowed') {
                alert('You must enable Anonymous auth in the Firebase Console.');
            } else {
                console.error(error);
            }
        });
    }
}
