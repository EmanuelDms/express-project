import Category from "../models/Category";
import Product from "../models/Product";

class ProductController {
  // Show all products
  async index(req, res) {
    const products = await Product.find({}).populate('category');
    return res.json(products);
  }

  // Create a product
  async store(req, res) {
    const { name, description, price, category } = req.body;

    const categoryExists = await Category.findById(category);

    // Checks if the category doesn't exist
    if (!categoryExists) {
      return res.status(400).json({ error: 'Category does not found.' })
    }

    const productExists = await Product.findOne({ name });

    // Checks if the product exists
    if (productExists) {
      return res.status(400).json({ error: 'Product name already exists' })
    }

    // Create a product
    const product = await Product.create({
      name, description, price, category
    });

    return res.json(product);
  }

  // Update a product
  async update(req, res) {
    const { id } = req.params;
    const { name, description, price, category } = req.body;

    const product = await Product.findById(id);

    // Checks if the product exists
    if (!product) {
      return res.status(400).json({ error: 'Product does not found.' })
    }

    // Checks if exists another product in database (different product of request param {id} )
    if (name && (name !== product.name)) {
      const productExists = await Product.findOne({ name });

      if (productExists) {
        return res.status(400).json({ error: 'Product already exists.' })
      }
    }

    const categoryExists = await Category.findById(category);

    // Checks if the category doesn't exist
    if (!categoryExists) {
      return res.status(400).json({ error: 'Category does not found.' })
    }

    // Change values
    product.name = name;
    product.description = description;
    product.price = price;
    product.category = category;

    // Commit update
    await product.save();

    return res.json(product);
  }

  // Delete a product
  async delete(req, res) {
    const { id } = req.params;

    const product = await Product.findById(id);

    // Search the product
    if (!product) {
      return res.status(400).json({ error: 'Product does not found' });
    }

    // Commit delete
    await product.remove();

    return res.status(204).send();
  }
}

export default new ProductController();