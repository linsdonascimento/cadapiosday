import { Component, OnInit, Input } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { CameraService } from '../service/camera.service';
import { cliente, perfil } from '../module/cliente';

import { ModalController, LoadingController, ToastController } from '@ionic/angular';
import { DBService } from '../service/db.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
  providers: [Camera, CameraService]
})
export class EditUserPage implements OnInit {

  @Input()

  editarCliente : cliente;

  perfis : perfil[]

  loading;

  constructor(private modalController: ModalController, 
              private dbService:DBService,
              private loadingController: LoadingController,
              private toastController: ToastController,
              private cameraService: CameraService) 
              { this.initialize();}

  async initialize(){
    await this.presentLoading();

    this.perfis = await this.dbService.list<perfil>('perfis')

    await this.hideLoading();


  }
  async hideLoading(){
    this.loading.dismiss();
  }
  async presentLoading(){
    this.loading = await this.loadingController.create({
      message: 'Carregando'
    });
    await this.loading.present();
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

  
  async save() {
    await this.presentLoading();

    await this.dbService.update('cliente', this.editarCliente.uid, { name: this.editarCliente.nome, perfilUID: this.editarCliente.perfilUID, photo: this.editarCliente.photo});

    await this.hideLoading();

    this.presentToast('Dados atualizados');

    this.dismiss();
  }

  async presentToast(displayMessage: string) {
    const toast = await this.toastController.create({
      message: displayMessage,
      duration: 2000
    });
    toast.present();
  }

  async takePicture() {
    this.editarCliente.photo = await this.cameraService.takePicture();
  }


  
}
