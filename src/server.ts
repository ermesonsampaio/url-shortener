import 'reflect-metadata'; // Enable decorators
import app from './main/app';
import './database';

app.listen(process.env.PORT || 4000, () => console.log('server on'));
