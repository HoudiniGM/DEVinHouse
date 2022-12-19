import { Component } from '@angular/core';
import { items } from 'src/app/variaveis/notifications'

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent {
  data = new Date();
  lido = false;
  items: Array<any> = items;

  constructor(){}

  marcarLido(item: HTMLElement){ //Esse parâmetro indica onde o button que cliquei.
    let index = this.items.indexOf(item);   // index = índice desse button em específico no array items.
    this.items[index]['lido'] = !this.items[index]['lido'];  // toggle da propriedade booleana 'lido'.
  }


}