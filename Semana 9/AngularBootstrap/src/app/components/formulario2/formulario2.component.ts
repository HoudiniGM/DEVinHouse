import { Component} from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.scss']
})
export class Formulario2Component {
  seuEmail: string = '';
  suaSenha: string = '';


  constructor(private localStorage: LocalStorageService){}

  saveDados(event: any){
    event.preventDefault();

    this.localStorage.set('email', event.target[0].value);
    this.localStorage.set('senha', event.target[1].value);

  }
  
  
}


