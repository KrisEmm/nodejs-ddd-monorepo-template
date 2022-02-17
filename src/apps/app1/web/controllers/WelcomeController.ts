import { Request, Response } from 'express';
import { WebController } from 'krisemm/contexts/shared/infrastructure/express/controllers/WebController';

export class WelcomeController extends WebController {
  run(req: Request, res: Response): void {
    this.render(req, res, 'pages/index', { title: 'Express' });
  }
}
