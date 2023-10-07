import { Injectable } from '@nestjs/common';

@Injectable()
export class GenresService {
  getGenres(): string {
    return 'List of Genres';
  }
}
