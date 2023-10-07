import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesController } from './movies/movies.controller';
import { GenresController } from './genres/genres.controller';
import { MoviesService } from './movies/movies.service';
import { GenresService } from './genres/genres.service';

@Module({
  imports: [],
  controllers: [AppController, MoviesController, GenresController],
  providers: [AppService, MoviesService, GenresService],
})
export class AppModule {}
