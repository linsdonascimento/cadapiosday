import { Component, OnInit } from '@angular/core';
import { cliente } from '../module/cliente';
import { ModalController, ToastController } from '@ionic/angular';
import { DBService } from '../service/db.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.page.html',
  styleUrls: ['./listar-cliente.page.scss'],
})
export class ListarClientePage implements OnInit {

  ListaClientes: cliente[];

  loading: boolean;

  constructor(public modalController: ModalController, public dbService: DBService, public toastController: ToastController) {

  }

  async ngOnInit() {
    this.loading = true;

    await this.LoadingListarCliente();
  }
  
  private async LoadingListarCliente() {
    this.dbService.listWithUIDs<cliente>('/cliente')
      .then(_ListaAlunosPage => {
        this.ListaClientes = _ListaAlunosPage;

        this.loading = false;
      }).catch(error => {
        console.log(error);
      });

  }



  async add() {
    const modal = await this.modalController.create({
      component: cliente
    });

    modal.onDidDismiss()
      .then(result => {
        if (result.data) {
          this.confirmAdd();
        }
      });

    return await modal.present();
  }

  private confirmAdd() {
    this.presentToast('Contato adicionado com sucesso');
    this.LoadingListarCliente();
  }

  remove(uid: string) {
    this.dbService.remove('/cliente', uid)
      .then(() => {
        this.presentToast('Contato removido com sucesso');
        this.LoadingListarCliente();
      });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }



}