import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { cliente } from '../module/cliente';
import { Router } from '@angular/router';
import { DBService } from '../service/db.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.page.html',
  styleUrls: ['./cadastro-cliente.page.scss'],
})
export class CadastroClientePage implements OnInit {

  CadastroCliente : cliente

  clientes: cliente[];

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    public ToastController: ToastController,
    private dbService: DBService) { this.CadastroCliente = new cliente}

    ngOnInit() {
    }
  
    salvar() {
      this.afAuth.auth.createUserWithEmailAndPassword(this.CadastroCliente.nome,this.CadastroCliente.email)
      this.dbService.insertInList<cliente>('cliente',this.CadastroCliente)
      .then(result => {
        this.presentToast('Cliente Cadastrado com sucesso');
        this.backToLogin();    
        
        })
        .catch(error => {
          this.presentToast('Erro ao cadastrar o cliente');
          console.log(error);
        })
        
      }
      
      async presentToast(message: string) {
        const toast = await this.ToastController.create({
          message: message,
          duration: 2000
        });
        toast.present();
      }
  
      backToLogin() {
          this.router.navigate(['/home']);
        }
  
  }
