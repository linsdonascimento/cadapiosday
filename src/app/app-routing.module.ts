import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'cadastro-cliente', loadChildren: './cadastro-cliente/cadastro-cliente.module#CadastroClientePageModule' },
  { path: 'listar-cliente', loadChildren: './listar-cliente/listar-cliente.module#ListarClientePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'cardapio', loadChildren: './cardapio/cardapio.module#CardapioPageModule' },
  { path: 'cadastro-prato', loadChildren: './cadastro-prato/cadastro-prato.module#CadastroPratoPageModule' },
  { path: 'cadastro-bebida', loadChildren: './cadastro-bebida/cadastro-bebida.module#CadastroBebidaPageModule' },
  { path: 'lista-prato', loadChildren: './lista-prato/lista-prato.module#ListaPratoPageModule' },
  { path: 'lista-bebidas', loadChildren: './lista-bebidas/lista-bebidas.module#ListaBebidasPageModule' },
  { path: 'opcao', loadChildren: './opcao/opcao.module#OpcaoPageModule' },
  { path: 'pedido', loadChildren: './pedido/pedido.module#PedidoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
