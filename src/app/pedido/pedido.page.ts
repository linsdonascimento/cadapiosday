import { Component, OnInit } from '@angular/core';
import { DBService } from '../service/db.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { cardapio } from '../module/cardapio';
import { pedidos } from '../module/pedidos';
import { CarService } from '../service/pedidos.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
  providers:[DBService]
})
export class PedidoPage implements OnInit {
  selectedItems = [];
  
  cardapio: cardapio[];
  carregando = true;
  private loading: any;
  novoPedido:pedidos;
  pedido: PedidoPage[];
  total = 0;

  constructor(private cartService: CarService, 
              private loadingCtrl: LoadingController,
              public toastCtrl: ToastController, 
              private database: DBService,
              public router: Router) {

      this.novoPedido = new pedidos();
     }

   


  ngOnInit() {
    let items = this.cartService.getCart();
    let selected = {};
    for (let obj of items) {
      if (selected[obj.uid]) {
        selected[obj.uid].quantidade++;
        
      } else {
        selected[obj.uid] = {...obj, quantidade: 1};
      }
    }
    this.selectedItems = Object.keys(selected).map(key => selected[key])
    this.total = this.selectedItems.reduce((a, b) => a + (b.quantidade * b.valor), 0);
  
  }
    
  async escolher(){
    this.database.list<cardapio>('/cardapio')
        .then(cardapio => {
          this.cardapio = cardapio;
          this.carregando = false;
          this.loading.dismiss();
        }).catch(error => {
          console.log(error);
        });
      



  }

  async finalizado(){
    await this.presentLoading();
    this.database.insert('pedido',this.selectedItems)
        .then(() =>{
          this.presentToast('Produto solicitado com sucesso !');
          this.router.navigate(['/opcao']);
          this.novoPedido = new pedidos();
          this.loading.dismiss();
        })

  }

  
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor, aguarde ...' });
    return this.loading.present();
  }
  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 1000 });
    toast.present();
  }



}
