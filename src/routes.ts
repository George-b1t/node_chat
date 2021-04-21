import { Router } from 'express';

import { SettingsController } from './controllers/SettingsController';
import { UsersController } from './controllers/UsersController';
import { MessagesController } from './controllers/MessagesController';

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

const routes = Router();

routes
  .post('/settings', settingsController.create)
  .post('/users', usersController.create)
  .post('/messages', messagesController.create)
  .get('/messages/:id', messagesController.showByUser)

export { routes };
