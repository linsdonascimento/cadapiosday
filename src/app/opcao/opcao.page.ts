import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DBService } from '../service/db.service';
import { cliente, perfil } from '../module/cliente';

@Component({
  selector: 'app-opcao',
  templateUrl: './opcao.page.html',
  styleUrls: ['./opcao.page.scss'],
  providers:[DBService]
})
export class OpcaoPage implements OnInit {

  clientes : cliente[]
  perfil : perfil[]

  constructor(
    public router: Router,
    public modalController: ModalController,
  ) { }

  ngOnInit() {
  }
  listarClientes(){
    this.router.navigate(['/listar-cliente'])
  }

  configCardapio(){
    this.router.navigate(['/cardapio'])
}

  Pedido(){

  

    this.router.navigate(['/pedido'])
}

}
