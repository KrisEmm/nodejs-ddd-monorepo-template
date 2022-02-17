if (process.env.NODE_ENV === 'prod') {
  require('module-alias/register');
} else {
  require('tsconfig-paths/register');
}
import { Server } from 'krisemm/contexts/shared/infrastructure/express/server/Server';
import { Application1WebApp } from './config/Application1WebApp';

const applicationRestAppServer: Server = new Server(Application1WebApp);

applicationRestAppServer.start();

process.on('uncaughtException', err => {
  console.info('uncaughtException', err);
  process.exit(1);
});

process.on('SIGTERM', () => {
  console.info('SIGTERM signal received');
  applicationRestAppServer.stop();
});
