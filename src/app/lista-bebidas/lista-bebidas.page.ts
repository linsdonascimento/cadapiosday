import { Component, OnInit } from '@angular/core';
import { DBService } from '../service/db.service';
import { bebida } from '../module/bebida';
import { categoria } from '../module/categoria';
import { Router } from '@angular/router';
import { ModalController, LoadingController, ToastController } from '@ionic/angular';
import { CadastroBebidaPage } from '../cadastro-bebida/cadastro-bebida.page';

@Component({
  selector: 'app-lista-bebidas',
  templateUrl: './lista-bebidas.page.html',
  styleUrls: ['./lista-bebidas.page.scss'],
  providers:[DBService]
})
export class ListaBebidasPage implements OnInit {

  bebidas:bebida[]
  carregando = true;
  loading: any;
  categoriabebidas: categoria[]

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
    await this.carregarBebidas();
  }

  private async carregarBebidas() {
    this.dbService.listWithUIDs<bebida>('/bebidas')
      .then(bebidas => {
        this.bebidas = bebidas;
        this.carregando = false;
        this.loading.dismiss();
      }).catch(error => {
        console.log(error);
      });
  }

  remove(uid: string) {
    this.dbService.remove('/bebidas', uid)
      .then(() => {
        alert(' removido com sucesso');
        this.carregarBebidas()
        this.presentLoading()
      });
      
  }

  async editar(bebidas: bebida) {
    const modal = await this.modalController.create({
      component: CadastroBebidaPage,
      componentProps: {
       editarBebida: bebidas
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
      component: CadastroBebidaPage
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
    this.carregarBebidas();
    this.listarBebidas();
  }

  
  listarBebidas() {
    this.router.navigate(['/lista-bebidas'])
  }
}
