import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimesRoutingModule } from './animes-routing.module';
import { AnimesComponent } from './animes.component';
import { ListadoAnimesComponent } from './listado-animes/listado-animes.component';
import { ItemAnimeComponent } from './item-anime/item-anime.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AnimesService } from './compartido/animes.service';

import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FiltroAnimesPipe } from './compartido/filtro-animes.pipe';

import { MatTabsModule } from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { SafePipe } from './compartido/safe.pipe';
import {MatListModule} from '@angular/material/list';
@NgModule({
  declarations: [
    AnimesComponent,
    ListadoAnimesComponent,
    ItemAnimeComponent,
    FiltroAnimesPipe,
    SafePipe
  ],
  imports: [
    CommonModule,
    AnimesRoutingModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatListModule
  ],
  exports: [
    AnimesComponent
  ],
  providers: [
    AnimesService
  ]

})
export class AnimesModule { }
