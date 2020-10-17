

class User {
  constructor(name, id, pantry) {
    this.name = name;
    this.id = id;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }
  addToFavorites(recipe) {
      this.favoriteRecipes.push(recipe);
  }
  removeFromFavorites(recipe) {
      let recipeIndex = this.favoriteRecipes.indexOf(recipe);
      this.favoriteRecipes.splice(recipeIndex, 1);
  }
  addToRecipesToCook(recipe) {
      this.recipesToCook.push(recipe);
  }
  removeFromRecipesToCook(recipe) {
      let recipeIndex = this.favoriteRecipes.indexOf(recipe);
      this.recipesToCook.splice(recipeIndex, 1);
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

if (typeof module === undefined) {
  module.exports = User;
}
