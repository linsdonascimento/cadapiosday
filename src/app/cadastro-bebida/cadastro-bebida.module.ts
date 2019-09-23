import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroBebidaPage } from './cadastro-bebida.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroBebidaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastroBebidaPage]
})
export class CadastroBebidaPageModule {}
