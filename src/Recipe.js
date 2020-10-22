

class Recipe {
    constructor(id, image, ingredients, instructions, name, tags) {
      this.id = id;
      this.image = image;
      this.ingredients = ingredients;
      this.instructions = instructions;
      this.name = name;
      this.tags = tags;
    }
    getIngredients(recipe) {
      recipe.ingredients.forEach(ingredient => {
        const id = ingredient.id;
        ingredientsData.forEach(ingredientData => {
          if (ingredientData.id === id) {
            ingredient.name = ingredientData.name;
            ingredient.cost = ingredientData.estimatedCostInCents / 100;
            ((ingredient.cost /100) * 100);
            Math.round(ingredient.cost);
          }
        })
      })
    }
}

if (typeof module === undefined) {
  module.exports = Recipe;
}
