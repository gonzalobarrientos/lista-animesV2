import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemAnimeComponent } from './item-anime/item-anime.component';

const routes: Routes = [
  {
    path: "",
    component: ItemAnimeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimesRoutingModule { }
