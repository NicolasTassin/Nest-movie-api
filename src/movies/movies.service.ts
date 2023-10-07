import { Injectable } from '@nestjs/common';

@Injectable()
export class MoviesService {
  getMovies(): string {
    return 'Hello World!';
  }
}
