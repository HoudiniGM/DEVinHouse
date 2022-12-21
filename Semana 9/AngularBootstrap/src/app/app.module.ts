import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModalComponent } from './components/modal/modal.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { Formulario2Component } from './components/formulario2/formulario2.component';
import { BuscaComponent } from './components/busca/busca.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    FormularioComponent,
    NavbarComponent,
    CardComponent,
    Formulario2Component,
    BuscaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
