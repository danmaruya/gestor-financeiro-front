import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastrarDespesaComponent } from './pages/cadastrar-despesa/cadastrar-despesa.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DespesasComponent } from './pages/despesas/despesas.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { EditarDespesasComponent } from './pages/editar-despesas/editar-despesas.component';
import { RelatorioComponent } from './components/relatorio/relatorio.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastrarDespesaComponent,
    NavbarComponent,
    DespesasComponent,
    EditarDespesasComponent,
    RelatorioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
