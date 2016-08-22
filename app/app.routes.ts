import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from "./components/movies/movies.component";
import { MovieComponent } from "./components/movie/movie.component";

const AppRoutes: Routes = [
  {path: '', component: MoviesComponent },
  {path: 'movie/:id', component: MovieComponent}
]

export const routing = RouterModule.forRoot(AppRoutes);
