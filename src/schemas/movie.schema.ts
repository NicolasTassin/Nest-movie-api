import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MovieDocument = HydratedDocument<Movie>;

@Schema()
export class Movie {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  releaseDate: Date;

  @Prop()
  genre: string[];
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
