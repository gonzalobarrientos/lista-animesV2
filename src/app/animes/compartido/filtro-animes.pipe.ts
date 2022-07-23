import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroAnimes'
})
export class FiltroAnimesPipe implements PipeTransform {

  transform(value: any[], filtro: string): unknown {
    if(filtro === '' || filtro === undefined){
      return value;
    }
    return value.filter(anime => anime.title.toLowerCase().indexOf(filtro) != -1);
  }

}
