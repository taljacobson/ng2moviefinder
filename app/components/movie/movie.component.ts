import { Component,OnInit } from '@angular/core';
import { MovieService } from "../../services/movie.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent implements OnInit {
  movie:Object
  constructor(private _MovieService:MovieService,
              private route:ActivatedRoute) {

  }
  ngOnInit(){
    this.route.params.subscribe( (params) => {
      let id = params['id']
      this._MovieService.getMovie(id).subscribe(movie => {
        console.log(movie.json())
        this.movie = movie.json()
      })
    })
  }
}
