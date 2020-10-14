const ingredients = require('../data/ingredients');
const ingredientsData = ingredients.ingredientsData;

class User {
  constructor(name, id, pantry) {
    this.name = name;
    this.id = id;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }
  addToFavorites(recipeName) {
    this.favoriteRecipes.push(recipeName);
  }
  addToRecipesToCook(recipeName) {
    this.recipesToCook.push(recipeName);
  }
  filterRecipeByTag(recipes, tagName) {
   return recipes.filter(recipe => {
    return recipe.tags.includes(tagName);
    })
  }
  searchRecipeByIngredient(recipes, keyword) {
    let keywordID;
    ingredientsData.forEach(ingredientData => {
      if (keyword === ingredientData.name) {
        keywordID = ingredientData.id;
      }
      return recipes.filter(recipe => {
        if (recipe.ingredients.id === keywordID) {
          return recipe;
        }
      })
    })
    return recipes;
  }
}

module.exports = User;
