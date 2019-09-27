import { Component, OnInit } from '@angular/core';
import { DBService } from '../service/db.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
import { bebida } from '../module/bebida';

@Component({
  selector: 'app-cadastro-bebida',
  templateUrl: './cadastro-bebida.page.html',
  styleUrls: ['./cadastro-bebida.page.scss'],
  providers:[DBService]
})
export class CadastroBebidaPage implements OnInit {

  CadastrarBebida: bebida

  bebidas: bebida[]

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    public ToastController: ToastController,
    private dbService: DBService,
    
  ) { this.CadastrarBebida = new bebida}

  ngOnInit() {
  }

  AddBebida(){
    this.dbService.insertInList('bebidas', this.CadastrarBebida)
    .then(result => {
      this.presentToast('Cadastrado');
      this.backToCardapio(); 
      
      })
      .catch(error => {
        this.presentToast('Erro ao cadastrar ');
        console.log(error);
      })
  }
  async presentToast(message: string) {
    const toast = await this.ToastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  backToCardapio(){

    this.router.navigate(['/cardapio'])

  }

}
