

class Recipe {
    constructor(id, image, ingredients, instructions, name, tags) {
        this.id = id;
        this.image = image;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.name = name;
        this.tags = tags;
        this.isFavorited = false;
        this.isToCook = false;
    }

    getIngredients(recipe) {
      recipe.ingredients.forEach(ingredient => {
        const id = ingredient.id;
        ingredientsData.forEach(ingredientData => {
          if (ingredientData.id === id) {
            ingredient.name = ingredientData.name;
          }
        })
      })
    }
}

if (typeof module === undefined) {
  module.exports = Recipe;
}
