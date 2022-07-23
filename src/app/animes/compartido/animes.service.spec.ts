import { TestBed } from '@angular/core/testing';

import { AnimesService } from './animes.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { asyncData, asyncError } from 'src/app/testing/async-observable-helpers';
import { Ianimes } from './ianimes';

describe('AnimesService', () => {
  let animesService: AnimesService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        AnimesService
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
    animesService = TestBed.inject(AnimesService);
  });

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    animesService = new AnimesService(httpClientSpy as any);
  })

  it('should be created', () => {
    expect(animesService).toBeTruthy();
  });
  it("Llamar AnimesService una vez", () => {
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
    httpClientSpy.get.and.returnValue(asyncData(responseMock));

    animesService.obtenerAnimes().subscribe(
      animes => expect(animes).toEqual(responseMock, "Espera que animes sea igual a responseMock"),
      fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1, "Se llamó una vez a obtenerAnimes");
  });
});
