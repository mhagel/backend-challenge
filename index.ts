import { app } from './server/app';

const port = 5000;
app.listen(port);

console.log('Started server on port ' + port);