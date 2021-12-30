import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarCotacaoComponent } from './user-workspace/cadastrar-cotacao/cadastrar-cotacao.component';
//import { LoginUsuarioComponent } from './user-workspace/login-usuario/login-usuario.component';
import { ViewCotacaoComponent } from './user-workspace/view-cotacao/view-cotacao.component';

const routes: Routes = [{
  path:'viewcotacao',
  component: ViewCotacaoComponent
},{
    path:'cadastrarcotacao',
    component: CadastrarCotacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
