import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.scss']
})
export class ListaDeTarefasComponent {
  listagem: string[] = [];
  newListagem: string = '';
  eValido: boolean = false;

  cadastrarTarefa(){
    if (this.newListagem){
      this.listagem.push(this.newListagem);
      this.eValido = false;
    } else {
      this.eValido = true;
    }
  }
}
