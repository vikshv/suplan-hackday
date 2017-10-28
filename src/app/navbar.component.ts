import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: [ './navbar.component.css' ]
})
export class NavbarComponent implements OnInit {
    constructor(public afAuth: AngularFireAuth) {
    }

    ngOnInit(): void {
    }

    logout() {
        this.afAuth.auth.signOut();
    }
}
