import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CapitalizePhilipsPipe } from './pipes/capitalize-philips.pipe';
import { UsarMeuPipeComponent } from './components/usar-meu-pipe/usar-meu-pipe.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgContentComponent } from './components/ng-content/ng-content.component';
import { ValidacaoComponent } from './components/validacao/validacao.component';
import { ListaDeTarefasComponent } from './components/lista-de-tarefas/lista-de-tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePhilipsPipe,
    UsarMeuPipeComponent,
    NavbarComponent,
    FotosComponent,
    NgIfComponent,
    NgContentComponent,
    ValidacaoComponent,
    ListaDeTarefasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
