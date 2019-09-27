import { Component, OnInit } from '@angular/core';
import { DBService } from '../service/db.service';
import { cardapio } from '../module/cardapio';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-cadastro-prato',
  templateUrl: './cadastro-prato.page.html',
  styleUrls: ['./cadastro-prato.page.scss'],
  providers:[DBService]
})
export class CadastroPratoPage implements OnInit {

  CadastroCardapio: cardapio

  Cardapios: cardapio[]

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    public ToastController: ToastController,
    private dbService: DBService
  ) { this.CadastroCardapio = new cardapio }

  ngOnInit() {
  }

  addPrato(){

    this.dbService.insertInList('cardapio',this.CadastroCardapio)
      .then(result=>{
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
