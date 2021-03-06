import { Component, OnInit } from '@angular/core';
import { cliente } from '../module/cliente';
import { ModalController, ToastController, LoadingController } from '@ionic/angular';
import { DBService } from '../service/db.service';
import { Router } from '@angular/router';
import { CadastroClientePage } from '../cadastro-cliente/cadastro-cliente.page';
import { categoria } from '../module/categoria';
import { EditUserPage } from '../edit-user/edit-user.page';



@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.page.html',
  styleUrls: ['./listar-cliente.page.scss'],
  providers: [DBService]
})
export class ListarClientePage implements OnInit {

  editarCliente: EditUserPage;
  clientes: cliente[];
  carregando = true;
  loading: any;
  categoriacliente: categoria[]


  constructor(
    public router: Router, 
    private dbService: DBService, 
    public modalController: ModalController,
    private loadingCtrl: LoadingController, 
    private toastCtrl: ToastController) {

  }

  async ngOnInit() {
    
    this.carregando = true;

    await this.presentLoading();
    await this.carregarClientes();
  }

  private async carregarClientes() {
    this.dbService.listWithUIDs<cliente>('/cliente')
      .then(clientes => {
        this.clientes = clientes;
        this.carregando = false;
        this.loading.dismiss();
      }).catch(error => {
        console.log(error);
      });
  }

  remove(uid: string) {
    this.dbService.remove('/cliente', uid)
      .then(() => {
        alert('Cliente removido com sucesso');
        this.carregarClientes()
        this.presentLoading()
      });
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
      component: CadastroClientePage
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
    this.carregarClientes();
    this.lista();
  }

  
  lista() {
    this.router.navigate(['/listar-cliente'])
  }


  



}