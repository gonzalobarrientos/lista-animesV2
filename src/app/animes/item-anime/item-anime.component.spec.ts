import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAnimeComponent } from './item-anime.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AnimesService } from '../compartido/animes.service';

describe('ItemAnimeComponent', () => {
  let component: ItemAnimeComponent;
  let fixture: ComponentFixture<ItemAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ItemAnimeComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          {
            path: "detail/:id",
            component: ItemAnimeComponent
          }
        ])
      ],
      providers: [
        AnimesService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
