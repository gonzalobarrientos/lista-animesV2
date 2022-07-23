import { TitleDirective } from './title.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<h1 appTitle>Probando directiva</h1>`
})
class TestComponent { }

let fixture: ComponentFixture<TestComponent>;
let des: DebugElement[];

describe('TitleDirective', () => {

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        TitleDirective,
        TestComponent
      ]
    }).createComponent(TestComponent);

    fixture.detectChanges();

    des = fixture.debugElement.queryAll(By.directive(TitleDirective))
  });

  it('Debe haber un elemento con la directiva TitleDirective', () => {
    expect(des.length).toBe(1);
  });

  it("El título debe medir 50px", () => {
    const tamanio = des[0].nativeElement.style.fontSize;
    expect(tamanio).toBe("50px");
  })
});
