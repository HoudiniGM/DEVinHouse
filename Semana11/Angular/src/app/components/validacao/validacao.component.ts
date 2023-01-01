import { Component } from '@angular/core';

@Component({
  selector: 'app-validacao',
  templateUrl: './validacao.component.html',
  styleUrls: ['./validacao.component.scss']
})
export class ValidacaoComponent {
  palavra = "";

  validar(){
    let validacao = (this.palavra.length >= 5 && this.palavra.length <= 10) ? true : false;
    return validacao;
    }

}
