import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesController } from './movies/movies.controller';
import { GenresController } from './genres/genres.controller';
import { MoviesService } from './movies/movies.service';
import { GenresService } from './genres/genres.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nicolastassin598:3ljSZOTRJQYGDOlh@cluster0.u6xgtep.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController, MoviesController, GenresController],
  providers: [AppService, MoviesService, GenresService],
})
export class AppModule {}
