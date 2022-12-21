import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent {
  @Output() pesquisa: EventEmitter<any> = new EventEmitter();
  buscar: string = '';

}
