import { Component, OnInit } from '@angular/core';
import { cliente } from '../module/cliente';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
import { DBService } from '../service/db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [DBService]
})
export class LoginPage implements OnInit {

  Cliente : cliente;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    public toastController: ToastController,
    public service: DBService
  ) { 
    this.Cliente = new cliente
  }

  ngOnInit() {
  }
  async login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.Cliente.email, this.Cliente.senha)
    .then(result => {
      this.router.navigate(['/listar-cliente']);
    }).catch(error => {
      this.presentToast('E-mail e/ou senha inválido(s).');
      delete this.Cliente
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
