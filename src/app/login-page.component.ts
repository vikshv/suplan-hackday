import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html',
    styleUrls: [ './login-page.component.css' ]
})
export class LoginPageComponent implements OnInit {
    constructor(public afAuth: AngularFireAuth) {
    }

    ngOnInit(): void {
    }
}
