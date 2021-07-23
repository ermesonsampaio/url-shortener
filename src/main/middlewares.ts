import { Application, json, urlencoded } from 'express';
import cors from 'cors';

export default (app: Application) => {
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(cors());
};
