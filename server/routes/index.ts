import { router as users } from './user';
import { Express } from 'express';

export function mountRoutes(app: Express) {
  app.use('/users', users);
}