import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { asyncData } from '../testing/async-observable-helpers';
import { AutenticacionService } from './autenticacion.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let routerSpy: jasmine.SpyObj<Router>;
  let authService: jasmine.SpyObj<AutenticacionService>;
  let loginSpy;
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

  function actualizarFormulario(email: string, password: string) {
    fixture.componentInstance.form.controls['email'].setValue(email);
    fixture.componentInstance.form.controls['password'].setValue(password);
  }

  function advance(f: ComponentFixture<any>) {
    tick();
    f.detectChanges();
  }

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    authService = jasmine.createSpyObj("AutenticacionService", ["login", "verificarLogin"]);

    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          {
            path: "",
            component: LoginComponent
          }
        ]),
        MatCardModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: AutenticacionService, useValue: authService},
        { provide: Router, useValue: routerSpy }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    loginSpy = authService.login.and.returnValue(asyncData(responseMock));
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it("Se debe hacer el login correctamente", fakeAsync(() => {
    actualizarFormulario("efrare09@gmail.com", "Hola.1234");
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    advance(fixture);

    loginSpy = authService.login.and.returnValue(asyncData(responseMock));
    advance(fixture);

    const spy = routerSpy.navigate as jasmine.Spy;
    const navArgs = spy.calls.first().args[0];

    expect(navArgs[0]).toBe("/inicio", "Debe dirigir al home");
  }))
});
