import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getMovies(): string {
    return this.moviesService.getMovies();
  }
  @Get(':id')
  getMovieById(): string {
    return this.moviesService.getMovies();
  }
  @Post()
  addMovie(): string {
    return this.moviesService.getMovies();
  }
  @Put()
  updateMovie(): string {
    return this.moviesService.getMovies();
  }
  @Delete()
  deleteMovie(): string {
    return this.moviesService.getMovies();
  }
}
