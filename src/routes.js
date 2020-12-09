const { Router } = require('express');
const { uuid } = require('uuidv4')

const routes = new Router();

const products = [];

routes.get('/', (req, res) => {
  return res.json({ message: 'Tipo GET!' })
})

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
})

// Change product
routes.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const { name, description, price, category } = req.body;

  return res.json({ message: 'Tipo PUT!' })
})

routes.delete('/', (req, res) => {
  return res.json({ message: 'Tipo DELETE!' })
})

module.exports = routes;