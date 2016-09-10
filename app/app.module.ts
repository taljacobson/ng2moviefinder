import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsonpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { routing }        from './app.routes';

import { AppComponent }  from './app.component';
import { MoviesComponent } from "./components/movies/movies.component";
import { MovieComponent } from "./components/movie/movie.component";

import { MovieService } from "./services/movie.service";


@NgModule({
  imports: [
            BrowserModule,
            FormsModule ,
            JsonpModule,
            routing
          ],
  declarations: [
            AppComponent,
            MoviesComponent,
            MovieComponent
          ],
  providers: [
            MovieService
          ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
