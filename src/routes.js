import { Router } from 'express';
import { uuid } from 'uuidv4';

const routes = new Router();

const products = [];

// list products
routes.get('/products', (req, res) => {
  const { test } = req.query;

  console.log(test);

  return res.json(products);
});

// Search a specific product
routes.get('/:id', (req, res) => {
  const { id } = req.params;

  // search a product, otherwise returns -1
  const productIndex = products.findIndex(product =>
    product.id === id
  )

  if (productIndex === -1) return res.status(400)
    .json({ error: 'Product does not found' })

  product = products[productIndex];
  return res.json(product)
});

// Create a product
routes.post('/products', (req, res) => {
  // capture the fields from request body
  const { name, description, price, category } = req.body;

  const product = {
    id: uuid(),
    name,
    description,
    price,
    category
  }

  products.push(product)

  return res.json(product)
});

// Change product
routes.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const { name, description, price, category } = req.body;

  // search a product, otherwise returns -1
  const productIndex = products.findIndex(product =>
    product.id === id
  )

  if (productIndex === -1) return res.status(400)
    .json({ error: 'Product does not found' })

  const product = {
    id,
    name,
    description,
    price,
    category
  }

  products[productIndex] = product;

  return res.json(product);
});

routes.delete('/products/:id', (req, res) => {
  const { id } = req.params;

  // search a product, otherwise returns -1
  const productIndex = products.findIndex(product =>
    product.id === id
  )

  if (productIndex === -1) return res.status(400)
    .json({ error: 'Product does not found' })

  products.splice(productIndex, 1);

  return res.status(204).send();
});

export default routes;