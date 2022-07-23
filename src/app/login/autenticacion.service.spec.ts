import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { asyncData } from '../testing/async-observable-helpers';

import { AutenticacionService } from './autenticacion.service';

describe('AutenticacionService', () => {
  let service: AutenticacionService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        AutenticacionService
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    });
    service = TestBed.inject(AutenticacionService);
  });

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new AutenticacionService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("Se espera que llame al Login", () => {
    const responseMock: any[] = [
      {
          "id": "60f4ea7e044bab6e9a0a923e",
          "nombres": "Efrain",
          "apellidoPaterno": "Rebolledo",
          "apellidoMaterno": "Pizarro",
          "email": "efrare09@gmail.com",
          "contrasenia": "Hola.1234",
          "rol": "admin"
      }
    ];

    httpClientSpy.get.and.returnValue(asyncData(responseMock));

    service.login("efrare09@gmail.com", "Hola.1234").subscribe(
      user => expect(user).toEqual(responseMock, "Se espera que devuelva el usuario Efrain"),
      fail
    );
    
    expect(httpClientSpy.get.calls.count()).toBe(1, "Se llamó al Login");
  })
});
