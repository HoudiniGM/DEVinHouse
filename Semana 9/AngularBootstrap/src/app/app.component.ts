import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ESSE DADO FOI PASSADO PELO COMPONENTE PAI';
  description = 'DESCRIÇÃO DO COMPONENTE PAI';
}
