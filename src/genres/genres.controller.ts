import { Controller, Get, Post, Delete } from '@nestjs/common';
import { GenresService } from './genres.service';

@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  @Get()
  getGenres(): string {
    return this.genresService.getGenres();
  }
  @Post()
  addGenre(): string {
    return this.genresService.getGenres();
  }
  @Delete()
  deleteGenre(): string {
    return this.genresService.getGenres();
  }
}
