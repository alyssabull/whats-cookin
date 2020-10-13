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
//       return  recipes.forEach(recipe => {
//           if (recipe.tags.includes(tagName)) {
//               recipes.push(recipe);
//           }
//        })
       return recipes.filter(recipe => {
            return recipe.tags.includes(tagName);
        })
    }
}

module.exports = User;