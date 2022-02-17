import express, { Router } from 'express';
import { StatusGetController } from '../controllers/StatusGetController';
import { container } from '../services';

export const router: Router = express.Router();
/* Here import controllers from IoC dependency-container*/
const statusGetController: StatusGetController = container.get('App.Rest.Controllers.StatusGetController');
/* Here map your routes with controllers*/
router.get('/', statusGetController.run.bind(statusGetController));
