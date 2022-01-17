import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: any[] = [];
  columns: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
      this.columns = [
          { field: 'Film', header: 'Film' },
          { field: 'Genre', header: 'Genre' },
          { field: 'Lead Studio', header: 'Lead Studio' },
          { field: 'Audience score %', header: 'Audience score %' },
          { field: 'Profitability', header: 'Profitability' },
          { field: 'Rotten Tomatoes %', header: 'Rotten Tomatoes %' },
          { field: 'Worldwide Gross', header: 'Worldwide Gross' },
          { field: 'Year', header: 'Year' }
      ];
      this.loadAllMovies();
      console.log(this.movies);
  }

  private loadAllMovies() {
      this.movieService.getAll()
          .pipe(first())
          .subscribe(movies => this.movies = movies);
  }

}
