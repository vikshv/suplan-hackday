import { Injectable }    from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {
    authState: object;

    constructor(public afAuth: AngularFireAuth) {
        this.authState = afAuth.authState;
    }

    signInAnonymously() {
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

    signInWithEmailAndPassword(email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password).catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });
    }

    logout() {
        this.afAuth.auth.signOut();
    }
}
