import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { DBService } from './db.service';

import { cliente, perfil } from '../module/cliente';

@Injectable()
export class AuthenticationService {

    constructor(private afAuth: AngularFireAuth, private dbService: DBService) {

    }


    async isAdmin() {
        return new Promise<boolean>((resolve, reject) => {
            this.afAuth.user
            .subscribe(async user => {
                const userFromDB = (await this.dbService.search<cliente>('usuarios', 'email', user.email))[0];
                const profileFromDB = await this.dbService.getObjectByKey<perfil>('perfis', userFromDB.perfilUID);

                resolve(profileFromDB.isAdmin === true);
            });
        });
    }

    login(email: string, password: string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }
}
