import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizePhilips'
})
export class CapitalizePhilipsPipe implements PipeTransform {
    transform(value: any) {
      let wordsArray = value.split(' ');
      let wordsCapitalizedArray: string[] = [];
      
      wordsArray.forEach( (element: string) => {
        let wordsCapitalized = element[0].toUpperCase() + element.slice(1)
        wordsCapitalizedArray.push(wordsCapitalized);
      })

      return wordsCapitalizedArray.join(' ');
    }
}
