import { Component } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss']
})
export class FotosComponent {
  arrayFotos: any = [
    {
      url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
      description:"Bulbasaur - Grama|Veneno"
    },
    {
      url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
      description:"Charmander - Fogo"
    },
    {
      url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
      description:"Squirtle - Água"
    },
    {
      url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png",
      description:"Caterpie - Inseto"
    },
    {
      url: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",
      description:"Weedle - Inseto|Veneno"
    }
  ]
}
