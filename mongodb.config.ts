import { registerAs } from '@nestjs/config';

export default registerAs('mongodb', () => ({
  uri: 'mongodb+srv://nicolastassin598:3ljSZOTRJQYGDOlh@cluster0.u6xgtep.mongodb.net/?retryWrites=true&w=majority', // This should be your MongoDB Atlas connection URI
  //   uri: process.env.MONGODB_URI, // This should be your MongoDB Atlas connection URI
}));
