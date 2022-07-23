import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/inicio",
    pathMatch: "full"
  },
  {
    path: "inicio",
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: "detail/:id",
    loadChildren: () => import('./animes/animes.module').then(m => m.AnimesModule)
  },
  {
    path: "login",
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
