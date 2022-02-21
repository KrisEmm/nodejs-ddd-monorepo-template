import express, { Router } from 'express';
import { WelcomeController } from '../controllers/WelcomeController';
import { container } from '../services';

export const router: Router = express.Router();

const welcomeController: WelcomeController = container.get('App.Web.Controllers.WelcomeController');
router.get('/', welcomeController.execute.bind(welcomeController));
