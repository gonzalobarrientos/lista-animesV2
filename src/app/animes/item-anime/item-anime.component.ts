import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimesService } from '../compartido/animes.service';
import { Ianime } from '../compartido/ianime';
import { Ivideos } from '../compartido/ivideos';
import { Iepisodios } from '../compartido/iepisodios';

@Component({
  selector: 'app-item-anime',
  templateUrl: './item-anime.component.html',
  styleUrls: ['./item-anime.component.css']
})
export class ItemAnimeComponent implements OnInit {

  anime: any;
  listaVideos: Iepisodios[];
  constructor(
    private animesService: AnimesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.obtenerDetalle();
    this.obtenerVideos();
  }
  obtenerDetalle(){
    const id = this.route.snapshot.paramMap.get('id');
    this.animesService.obtenerDetalle(id).subscribe((data: Ianime) => {
      this.anime = data;
    });
  }
  obtenerVideos(){
    const id = this.route.snapshot.paramMap.get('id');
    this.animesService.obtenerVideos(id).subscribe((data: Ivideos) => {
      this.listaVideos = data.episodes;
  });
  }
}
