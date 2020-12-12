import { Router } from 'express';
import { uuid } from 'uuidv4';
import CategoryController from './controllers/CategoryController';

const routes = new Router();

routes.get('/categories', CategoryController.index)
routes.post('/categories', CategoryController.store)
routes.put('/categories/:id', CategoryController.update)
routes.delete('/categories/:id', CategoryController.delete)

export default routes;