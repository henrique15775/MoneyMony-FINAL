import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';

import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import { MatMenuModule } from '@angular/material/menu';
import { ViewCotacaoComponent } from './view-cotacao/view-cotacao.component';
import { CadastrarCotacaoComponent } from './cadastrar-cotacao/cadastrar-cotacao.component';
import { LayoutMenuModule } from '../layout-menu/layout-menu.module';


@NgModule({
  declarations: [
    ViewCotacaoComponent,
    CadastrarCotacaoComponent
  ],exports:[
    ViewCotacaoComponent,
    CadastrarCotacaoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,

  ]
})
export class UserWorkspaceModule { }
