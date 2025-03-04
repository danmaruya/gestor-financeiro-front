import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastrarDespesaComponent as CadastrarDespesaComponent } from './pages/cadastrar-despesa/cadastrar-despesa.component';
import { DespesasComponent } from './pages/despesas/despesas.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'despesas', component: DespesasComponent
  },
  {
    path: 'despesas/cadastrar', component: CadastrarDespesaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
