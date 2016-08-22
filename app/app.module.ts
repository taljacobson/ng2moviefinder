import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JSONP_PROVIDERS } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { RouterModule, ROUTER_DIRECTIVES} from "@angular/router";

import { routing }        from './app.routes';

import { AppComponent }  from './app.component';
import { MoviesComponent } from "./components/movies/movies.component";
import { MovieComponent } from "./components/movie/movie.component";

import { MovieService } from "./services/movie.service";


@NgModule({
  imports: [
            BrowserModule,
            FormsModule ,
            routing
          ],
  declarations: [
            AppComponent,
            MoviesComponent,
            MovieComponent
          ],
  providers: [
            MovieService,
            JSONP_PROVIDERS
          ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
