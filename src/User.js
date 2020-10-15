

class User {
  constructor(name, id, pantry) {
    this.name = name;
    this.id = id;
    this.pantry = pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }
  toggleFavorites(recipe) {
    if (recipe.isFavorited === false) {
      recipe.isFavorited = true;
      this.favoriteRecipes.push(recipe);
    } else if (recipe.isFavorited === true) {
      recipe.isFavorited = false;
      let recipeIndex = this.favoriteRecipes.indexOf(recipe);
      this.favoriteRecipes.splice(recipeIndex, 1);
    }
  }
  toggleRecipesToCook(recipe) {
    if (recipe.isToCook === false) {
      recipe.isToCook = true;
      this.recipesToCook.push(recipe);
    } else if (recipe.isToCook === true) {
      recipe.isToCook = false;
      let recipeIndex = this.recipesToCook.indexOf(recipe);
      this.recipesToCook.splice(recipeIndex, 1);
    }
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
