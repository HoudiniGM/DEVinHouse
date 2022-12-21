import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  personagem: {[key:string]: string} = {
    nome: 'Vikings',
    imagem: 'https://mixdeseries.com.br/wp-content/uploads/2020/12/Vikings-retorno-Ragnar-6-temporada.webp',
    nomeAtor: 'Travis Fimmel',
    descricao: 'Interpretado por Travis Fimmel, Ragnar Lodbrok é um poderoso guerreiro viking que acredita estar destinado à grandezas. Ele é impulsionado não apenas pela sua sede de batalha e glória, mas também pela sua sede de conhecimento e natureza inquisitiva.'
  }

  log(e: Event){
    console.log(e)
  }
}
