import { Router } from 'express';

import CategoryController from './controllers/CategoryController';
import ProductController from './controllers/ProductController';

const routes = new Router();

// Categories routes
routes.get('/categories', CategoryController.index)
routes.post('/categories', CategoryController.store)
routes.put('/categories/:id', CategoryController.update)
routes.delete('/categories/:id', CategoryController.delete)

// Product routes
routes.get('/products', ProductController.index)
routes.post('/products', ProductController.store)
routes.put('/products/:id', ProductController.update)
routes.delete('/products/:id', ProductController.delete)

export default routes;