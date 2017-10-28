import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
    selector: 'login-page',
    templateUrl: './login-page.component.html',
    styleUrls: [ './login-page.component.css' ]
})
export class LoginPageComponent implements OnInit {
    progress: boolean;

    email: string;
    password: string;
    remember: boolean;

    constructor(public auth: AuthService) {
    }

    ngOnInit(): void {
        this.email = 'vikshv@yandex.ru';
        this.password = '1234567890';
        this.remember = false;
    }

    onSubmit(form: NgForm) {
        const { email, password } = form.value;
        this.progress = true;
        this.auth.signInWithEmailAndPassword(email, password).then(() => {
            this.progress = false;
        });
    }
}
