import { Component } from '@angular/core';
import { cliente } from '../module/cliente';
import { Route, } from '@angular/compiler/src/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cliente : cliente;

  constructor(
    private router: Route,
    private afAuth: AngularFireAuth,
    public toastController: ToastController, 

  ) { this.cliente = new cliente}

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.cliente.nome, this.cliente.email)
      .then(result => {
        this.router.navigate(['/listar-cliente']);
      }).catch(() => {
          this.presentToast('E-mail e/ou senha inválido(s).');
          delete this.cliente.senha;
        });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  newCliente() {
    this.router.navigate(['/cadastro-cliente']);
  }

}
