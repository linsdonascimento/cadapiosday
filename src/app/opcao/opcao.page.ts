import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-opcao',
  templateUrl: './opcao.page.html',
  styleUrls: ['./opcao.page.scss'],
})
export class OpcaoPage implements OnInit {

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
