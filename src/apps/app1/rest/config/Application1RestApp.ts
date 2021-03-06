import express from 'express';
import { glob } from 'glob';
import { container } from '../services';
import { ErrorMiddleware } from 'krisemm/contexts/shared/infrastructure/express/middlewares/Middleware';
import morgan from 'morgan';
import path from 'path';

const app: express.Express = express();
const errorHandlerMiddleware: ErrorMiddleware = container.get('App.Shared.ErrorHandlerMiddleware');
const routesPaths: string[] = glob.sync(path.resolve(__dirname, '../routes/') + '/**/*.routes.{js,ts}');

app.set('port', 8080);
app.set('logger', container.get('App.Shared.Logger'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

routesPaths.map(routePath => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { router } = require(routePath);
  app.use('/', router);
});

app.use(errorHandlerMiddleware.execute.bind(errorHandlerMiddleware));

export const Application1RestApp: express.Express = app;
