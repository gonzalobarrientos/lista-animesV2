import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AnimesService } from '../compartido/animes.service';
import { Ianimes } from '../compartido/ianimes';
import { Ireview } from '../compartido/ireview';

@Component({
  selector: 'app-listado-animes',
  templateUrl: './listado-animes.component.html',
  styleUrls: ['./listado-animes.component.css']
})
export class ListadoAnimesComponent implements OnInit {

  listaAnimes: Ireview[];
  filtro: string = "";

  constructor(
    private animesService: AnimesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerAnimes();
  }

  obtenerAnimes(): void {
    this.animesService.obtenerAnimes().subscribe((data: Ianimes) => {
      this.listaAnimes = data.results;
    });
  }
  verDetalle(anime: Ireview) {
    this.router.navigateByUrl(`detail/${anime.mal_id}`);
  }

  // buscarAnimes(): void {
  //   this.animesService.buscarAnimes(this.filtro).subscribe((data: Ianimes) => {
  //     this.listaAnimes = data.results;
  //   });
  // }

}
