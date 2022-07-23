import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { click } from '../../testing';
import { asyncData } from '../../testing/async-observable-helpers';
import { AnimesService } from '../compartido/animes.service';
import { Ianimes } from '../compartido/ianimes';
import { ListadoAnimesComponent } from '../listado-animes/listado-animes.component';
import { FiltroAnimesPipe } from '../compartido/filtro-animes.pipe';

describe('ListadoAnimesComponent', () => {
  let component: ListadoAnimesComponent;
  let fixture: ComponentFixture<ListadoAnimesComponent>;

  let routerSpy: jasmine.SpyObj<Router>;
  let animesService: jasmine.SpyObj<AnimesService>;
  let router: Router;
  let animesServiceSpy;
  const responseMock: Ianimes =
    {
      "results": [
      {"mal_id": 1535,
      "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/9\/9453.jpg?s=b89e80691ac5cc0610847ccbe0b8424a",
      "title": "Death Note",
      "synopsis": "A shinigami, as a god of death, can kill any person\u2014provided they see their victim's face and write their victim's name in a notebook called a Death Note. One day, Ryuk, bored by the shinigami lifesty...",
      "score": 8.63
      },
      {
        "mal_id": 16498,
        "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/10\/47347.jpg?s=29949c6e892df123f0b0563e836d3d98",
        "title": "Shingeki no Kyojin",
        "synopsis": "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly...",
        "score": 8.51
      },
      {
        "mal_id": 5114,
        "image_url": "https:\/\/cdn.myanimelist.net\/images\/anime\/1223\/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb3f",
        "title": "Fullmetal Alchemist: Brotherhood",
        "synopsis": "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutatio...",
        "score": 9.16,
        }]
    }
;

function clickForDeep() {
  const animeEl: HTMLElement = fixture.nativeElement.querySelector('mat-card');
  click(animeEl);
}

beforeEach(async () => {
  routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  animesService = jasmine.createSpyObj("AnimesService", ["obtenerAnimes"]);

  await TestBed.configureTestingModule({
    declarations: [
      ListadoAnimesComponent,
      FiltroAnimesPipe
    ],
    imports: [
      HttpClientTestingModule,
      FormsModule,
      MatCardModule,
      MatTabsModule
    ],
    providers: [
      { provide: AnimesService, useValue: animesService},
      { provide: Router, useValue: routerSpy }
    ],
    schemas: [ NO_ERRORS_SCHEMA ]
  })
  .compileComponents();
});

beforeEach(() => {
  fixture = TestBed.createComponent(ListadoAnimesComponent);
  router = fixture.debugElement.injector.get(Router);
  component = fixture.componentInstance;
  animesService.obtenerAnimes.and.returnValue(of(responseMock));
  fixture.detectChanges();
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("Debe llamar a servicio de animes", () => {
    expect(animesService.obtenerAnimes.calls.any()).toBe(true, "Fue llamado el servicio para obtener animes");
  });

  it("Debe mostrar la lista de animes", () => {
    const listaAnimes = fixture.nativeElement.querySelectorAll("mat-card");
    expect(listaAnimes.length).toBe(3, "Se muestran 3 animes");
  });
});

