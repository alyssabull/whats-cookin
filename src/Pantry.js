class Pantry {
  constructor(userPantry) {
    this.userPantry = userPantry;
    this.missingIngredients = [];
  }
  getPantryItems() {
    this.userPantry.map(ingredient => {
      const id = ingredient.ingredient;
      ingredientsData.map(ingredientData => {
        if(ingredientData.id === id) {
          ingredient.name = ingredientData.name;
        }
      })
    })
    return this.userPantry;
  }
  checkStock(recipe) {
    this.missingIngredients = [];
    recipe.ingredients.forEach(ingredient => {
      const id = ingredient.id;
          if (!this.missingIngredients.includes(ingredient)) {
            return this.missingIngredients.push(ingredient);
          }
    })
    this.userPantry.forEach(pantryIngredient => {
        let id = pantryIngredient.ingredient;
        this.missingIngredients.forEach(ingredient => {
            if (id === ingredient.id) {
                let ingredientIndex = this.missingIngredients.indexOf(ingredient);
                return this.missingIngredients.splice(ingredientIndex, 1);
            }
        })
    })
      return this.missingIngredients;
  }
}

if (typeof module === undefined) {
  module.exports = Pantry;
}
