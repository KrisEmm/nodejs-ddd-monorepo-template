import { Application1WebApp } from 'krisemm/apps/app1/web/config/Application1WebApp';
import { Server } from 'krisemm/contexts/shared/infrastructure/express/server/Server';

export class ApplicationsManager {
  private static application1WebApp: Server;

  static start(): void {
    this.application1WebApp = new Server(Application1WebApp);
    this.application1WebApp.start();
  }

  static stop(): void {
    this.application1WebApp.stop();
  }
}
