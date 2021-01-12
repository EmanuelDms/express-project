import Category from "../models/Category";

class CategoryController {
  // Show all categories
  async index(req, res) {
    const categories = await Category.find({})
    return res.json(categories);
  }

  // Create a new category
  async store(req, res) {
    const { name } = req.body;

    const categoryExists = await Category.findOne({ name });

    if (categoryExists) {
      return res.status(400).json({ error: 'Category already exists.' })
    }

    const category = await Category.create({
      name
    });

    return res.json(category)
  }

  // Update a category
  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    const category = await Category.findById(id);

    // Retornar mensagem erro se o produto não for encontrado
    if (!category) {
      return res.status(400).json({ error: 'Category does not found.' })
    }

    // Verifica se existe um nome e o nome a ser alterado já não existe
    if (name && (name !== category.name)) {

      const categoryExists = await Category.findOne({ name });

      if (categoryExists) {
        return res.status(400).json({ error: 'Category name already exists.' })
      }
    }

    category.name = name;
    await category.save();

    return res.json(category)
  }

  async delete(req, res) {
    const { id } = req.params;

    const category = await Category.findById(id);

    if (!category) {
      return res.status(400).json({ error: 'Category does not found.' })
    }

    await category.remove();
    return res.status(204).send();
  }
}

export default new CategoryController();