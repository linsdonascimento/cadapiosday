import { Component, OnInit } from '@angular/core';
import { DBService } from '../service/db.service';
import { cardapio } from '../module/cardapio';
import { categoria } from '../module/categoria';
import { Router } from '@angular/router';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';
import { CadastroPratoPage } from '../cadastro-prato/cadastro-prato.page';

@Component({
  selector: 'app-lista-prato',
  templateUrl: './lista-prato.page.html',
  styleUrls: ['./lista-prato.page.scss'],
  providers:[DBService]
})
export class ListaPratoPage implements OnInit {

  ListarPratos:cardapio[]
  carregando = true;
  loading: any;
  categoriaPratos: categoria[]

  constructor(
    public router: Router, 
    private dbService: DBService, 
    public modalController: ModalController,
    private loadingCtrl: LoadingController, 
    private toastCtrl: ToastController
  ) { }

  async ngOnInit() {
    this.carregando = true;

    await this.presentLoading();
    await this.carregarListaPratos();
  }

  private async carregarListaPratos(){
    this.dbService.listWithUIDs<cardapio>('/cardapio')
      .then(ListarPratos => {
        this.ListarPratos = ListarPratos;
        this.carregando = false;
        this.loading.dismiss();
      }).catch(error => {
        console.log(error);
      });
  }

  remove(uid: string) {
    this.dbService.remove('/cardapio', uid)
      .then(() => {
        alert(' removido com sucesso');
        this.carregarListaPratos()
        this.presentLoading()
      });
      
  }

  async editar(ListarPratos : cardapio) {
    const modal = await this.modalController.create({
      component: CadastroPratoPage,
      componentProps: {
       editarprato : ListarPratos
      }
    });
    modal.onDidDismiss()
    .then(result => {
      if (result.data) {

      }
    });
    return  await modal.present();
  
  }
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor,aguarde...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }

  async add() {
    const modal = await this.modalController.create({
      component: CadastroPratoPage
    });

    modal.onDidDismiss()
      .then(result => {
        if (result.data) {
          this.confirmAdd();
        }
      });

    return  await modal.present();
  }
  private confirmAdd() {
    this.presentToast('Cliente adicionado com sucesso');
    this.carregarListaPratos();
    this.listarBebidas();
  }

  
  listarBebidas() {
    this.router.navigate(['/lista-bebidas'])
  }

}
