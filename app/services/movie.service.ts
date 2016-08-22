import { Injectable } from "@angular/core";
import { Jsonp } from "@angular/http";
import 'rxjs/rx';

@Injectable()
export class MovieService {
  movieDBUrl:string
  APIKEY:string
  constructor( private _JsonP:Jsonp) {
    this.APIKEY = '37266fd3dfb7d614f64897b137e7bb21';
    this.movieDBUrl = 'https://api.themoviedb.org/3'
    console.log("movieService")
  }

  getPopular(){
    return this._JsonP.get(this.movieDBUrl +'/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=' + this.APIKEY).map(res => res.json())
  }
  getInTheaters(){
    return this._JsonP.get(this.movieDBUrl + '/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2016-06-20&primary_release_date.lte=2016-08-20&sort_by=popularity.desc&api_key=' + this.APIKEY).map(res => res.json())
  }
  searchMovie(Moviestr:string){
    return  this._JsonP.get(this.movieDBUrl + '/search/movie?callback=JSONP_CALLBACK&query='+ Moviestr + '&sort_by=popularity.desc&api_key=' + this.APIKEY).map(res => res.json())
  }
  getMovie(id:string){
    return this._JsonP.get(this.movieDBUrl + '/movie/' + id + '?callback=JSONP_CALLBACK&api_key=' + this.APIKEY)
  }
}
