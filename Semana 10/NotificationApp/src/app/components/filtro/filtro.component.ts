import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent {
  @Output() filter = new EventEmitter<string>;
  activeBtn = 'Todos';
  filterBtnText = ['Todos', 'Não Lidos', 'Lidos'];

  onFilterClick(filterName: string){
		this.activeBtn = filterName
		this.filter.emit(filterName)
    
  }
}
