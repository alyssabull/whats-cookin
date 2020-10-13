const ingredients = require('../data/ingredients');
const ingredientsData = ingredients.ingredientsData;

class Pantry {
    constructor(userPantry) {
        this.userPantry = userPantry;
    }
    checkStock(recipe) {
        recipe.ingredients.forEach(ingredient => {
            const id = ingredient.id;
            this.userPantry.forEach(pantryIngredient => {
                if (pantryIngredient.ingredient === id) {
                    recipe.ingredients.splice(ingredient, 1);
                }
            })
        })
        return recipe.ingredients;
    }
    listMissingIngredients(recipe) {
        this.checkStock(recipe);
        if (recipe.ingredients.length > 0) {
            recipe.ingredients.forEach(ingredient => {
                const id = ingredient.id;
                ingredientsData.forEach(ingredientData => {
                    if (ingredientData.id === id) {
                        ingredient.name = ingredientData.name;
                        ingredient.estimatedCostInCents = ingredientData.estimatedCostInCents;
                    }
                })
            })
        }
        return recipe.ingredients;
    }  
}

module.exports = Pantry;