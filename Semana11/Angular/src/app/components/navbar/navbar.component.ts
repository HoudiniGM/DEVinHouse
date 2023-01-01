import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  items: string[] = ['Home', 'Preços', 'Informações']

  page: string = '';


  pageTarget(item: string){ 
    this.page = item;
    
  }

}
