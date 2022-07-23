import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimesModule } from './animes/animes.module';

import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TitleDirective } from './animes/compartido/title.directive';


@NgModule({
  declarations: [
    AppComponent,
    TitleDirective
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    AnimesModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
