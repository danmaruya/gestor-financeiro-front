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
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { EditarDespesasComponent } from './pages//editar-despesas/editar-despesas.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastrarDespesaComponent,
    NavbarComponent,
    DespesasComponent,
    EditarDespesasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
