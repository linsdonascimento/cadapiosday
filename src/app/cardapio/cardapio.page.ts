import { Component, OnInit } from '@angular/core';
import { DBService } from '../service/db.service';
import { bebida } from '../module/bebida';
import { cardapio } from '../module/cardapio';
import { Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.page.html',
  styleUrls: ['./cardapio.page.scss'],
  providers: [ DBService ]
})
export class CardapioPage implements OnInit {

  Bebidas : bebida[]
  Pratos : cardapio[]

  constructor(
    public router: Router,
    public modalController: ModalController,
    ) { }

  ngOnInit() {
  }

  CadastroDebebidas(){
    this.router.navigate(['/cadastro-bebida'])
  }

  CadastroDePrato(){
    this.router.navigate(['/cadastro-prato'])
  }

  ListarPratos(){
    this.router.navigate(['/lista-prato'])
  }

  ListarBebidas(){
    this.router.navigate(['/lista-bebidas'])
  }

}
