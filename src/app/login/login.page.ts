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

  constructor(private router: Router,  private toastCtrl: ToastController,
    private afa:AngularFireAuth,
    private database: DBService) {

      this.Cliente = new cliente
      
  }
  ngOnInit() {
  }

  async login() {

    try {
      
      this.router.navigate(['/listar-cliente']);
      this.afa.auth.signInWithEmailAndPassword(this.Cliente.email,this.Cliente.senha);
    

    } catch (error) {
      this.presentToast(error.message);

    } 
  }

  

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

  cadastrar() {
    this.router.navigate(['/cadastro-cliente'])
  }


}
