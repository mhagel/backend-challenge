import express from 'express';
import { mountRoutes } from './routes';

const app = express();
app.use(express.json());
mountRoutes(app);

const port = 5000;
app.listen(port);

console.log('Started server on port ' + port);