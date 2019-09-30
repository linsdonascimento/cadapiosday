import { Component } from '@angular/core';
import { cliente } from '../module/cliente';
import { Route, } from '@angular/compiler/src/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController, NavController } from '@ionic/angular';
import { DBService } from '../service/db.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers:[DBService]
})
export class HomePage {

  cliente : cliente;

  constructor(
    private router: Route,
    private afAuth: AngularFireAuth,
    public toastController: ToastController, 

  ) { this.cliente = new cliente}

  login() {
    
  }

 
  

}