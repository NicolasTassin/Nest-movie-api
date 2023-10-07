import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from 'src/dto/movie.dto';

@Injectable()
export class MoviesService {
  getMovies(): string {
    return 'List of movies';
  }
  addMovie(
    title: string,
    description: string,
    release: Date,
    genre: string[],
  ): CreateMovieDto {
    const movieAdded = {
      title: title,
      description: description,
      releaseDate: release,
      genre: genre,
    };
    return movieAdded;
  }
  updateMovie(): string {
    return 'List of movies';
  }
  deleteMovie(): string {
    return 'List of movies';
  }
}

//3ljSZOTRJQYGDOlh
