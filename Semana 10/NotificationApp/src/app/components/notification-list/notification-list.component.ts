import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { items } from 'src/app/variaveis/notifications';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent {
  data = new Date();
  lido = false;
  items: Array<any> = items;
  itemsToRender: Array<any> = [];
  listFilter = '';
  possibleParams = ['todos', 'nao-lidos', 'lidos'];
  
  constructor( private router: Router, private route: ActivatedRoute) {}
  
  marcarLido(item: HTMLElement){ //Esse parâmetro indica onde o button que cliquei.
    let index = this.items.indexOf(item);   // index = índice desse button em específico no array items.
    this.items[index]['lido'] = !this.items[index]['lido'];  // toggle da propriedade booleana 'lido'.
  }
  
  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.listFilter = params['filter']

      if(!this.possibleParams.includes(this.listFilter)) {
        this.router.navigate(['/home/todos'])
      }

      this.itemsToRender= []
      this.items.forEach(notification => {

        if (this.listFilter === 'lidos') {
          if (notification.lido) {
            this.itemsToRender.push(notification)
          }
        }
        if (this.listFilter === 'nao-lidos') {
          if(!notification.lido) {
            this.itemsToRender.push(notification)
          }
        }
        if (this.listFilter === 'todos') {
          this.itemsToRender = [...this.items]
        }
      })
    })
  }

  changeToFilteredRoute(event: string) {
    if (event === 'Não Lidos'){
      event = 'nao-lidos'
    }
    this.router.navigate(['/home/' + event.toLowerCase()])
  }
  

}