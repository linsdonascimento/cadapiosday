import { Component, OnInit } from '@angular/core';
import { cliente } from '../module/cliente';
import { Route, } from '@angular/compiler/src/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController, NavController } from '@ionic/angular';
import { DBService } from '../service/db.service';
import { CarService } from '../service/pedidos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers:[DBService]
})
export class HomePage implements OnInit{
  

  cart = []
  items;

  sliderConfig = {

  }

  constructor(
     private cartService: CarService,
     private router: Route,

    

  ) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.items = this.cartService.getProdutos();
  }

  adcionaPedido(products){

    this.cartService.addProdutos(products)

  }

  fazerPedidos(){
    this.router.navigate(['pedido']);
  }
  

}