const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const Recipe = require('../src/Recipe');

describe('User', () => {
    let user;
    let user2;
    let pantry;
    let recipe;
    let recipe2;
    let ingredients;
    let instructions;

    beforeEach(() => {
      pantry = [
        {
          ingredient: 756,
          amount: 7
        },
        {
          ingredient: 203,
          amount: 2
        },
        ];
      user = new User('Jim', 1, pantry);
      user2 = new User('John', 2, [
        {
          ingredient: 756,
          amount: 7
        },
        {
          ingredient: 203,
          amount: 2
        },
        ]);
      ingredients = [
        {
          "id": 20081,
          "quantity": {
            "amount": 15,
            "unit": "c"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 5,
            "unit": "tsp"
          }
        }];
      instructions = [
        {
          "instruction": "Butter the bread",
          "number": 1
        },
        {
          "instruction": "Toast the buttered bread",
          "number": 2
        }];
      recipe = new Recipe(123456, 'https://something.jpg', ingredients, instructions, 'Toast', ['breakfast', 'brunch']);
      recipe2 = new Recipe(456789, 'https://something.jpg', ingredients, instructions, 'Muffins', ['breakfast', 'snack']);
    });

    it('should be a function', () => {
      expect(User).to.be.a('function');
    });

    it('should create an instance of a User', () => {
      expect(user).to.be.an.instanceof(User);
    });

    it('should be able to take in a first argument of a name', () => {
      expect(user.name).to.equal('Jim');
    });

    it('should only be able to take in a string for a name', () => {
        expect(user.name).to.be.a('string');
    });

    it('should be able to take in a second argument of an ID', () => {
      expect(user.id).to.equal(1);
    });

    it('should only be able to take in a positive integer for an ID', () => {
      expect(user.id).to.be.above(0);
    });

    it('should have a pantry', () => {
      expect(user.pantry).to.deep.equal(pantry);
      expect(user2.pantry).to.deep.equal([
        {
          ingredient: 756,
          amount: 7
        },
        {
          ingredient: 203,
          amount: 2
        },
        ]);
    });

    it('should only be able to take in an array for a pantry', () => {
      expect(user.pantry).to.be.an('array');
    });

    it('should start with an empty array for favorite recipes', () => {
      expect(user.favoriteRecipes).to.deep.equal([]);
    });

    it('should start with an empty array for recipes to cook', () => {
      expect(user.recipesToCook).to.deep.equal([]);
    });

    it('should be able to add a recipe to favorites', () => {
      expect(user.favoriteRecipes).to.deep.equal([]);

      user.toggleFavorites(recipe);

      expect(user.favoriteRecipes).to.deep.equal([recipe]);
    });
    
    it('should be able to remove a recipe from favorites', () => {
      expect(user.favoriteRecipes).to.deep.equal([]);

      user.toggleFavorites(recipe);
        
      expect(user.favoriteRecipes).to.deep.equal([recipe]);
        
      user.toggleFavorites(recipe);

      expect(user.favoriteRecipes).to.deep.equal([]);
    });

    it('should be able to add a recipe to recipes to cook', () => {
      expect(user.recipesToCook).to.deep.equal([]);

      user.toggleRecipesToCook(recipe2);

      expect(user.recipesToCook).to.deep.equal([recipe2]);
    });
    
    it('should be able to remove a recipe from recipes to cook', () => {
      expect(user.recipesToCook).to.deep.equal([]);

      user.toggleRecipesToCook(recipe2);

      expect(user.recipesToCook).to.deep.equal([recipe2]);
        
      user.toggleRecipesToCook(recipe2);
        
      expect(user.recipesToCook).to.deep.equal([]);
    });

    it('should be able to filter recipes by tag', () => {
      user.toggleFavorites(recipe);
      user.toggleFavorites(recipe2);

      expect(user.favoriteRecipes).to.deep.equal([recipe, recipe2]);

      user.filterRecipeByTag(user.favoriteRecipes, 'brunch');

      expect(user.filterRecipeByTag(user.favoriteRecipes, 'brunch')).to.deep.equal([recipe]);
    });

    it('should be able to filter recipes by ingredient', () => {
      user.toggleFavorites(recipe);
      user.toggleFavorites(recipe2);
      user.searchRecipeByIngredient(user.favoriteRecipes, 'wheat flour');

      expect(user.searchRecipeByIngredient(user.favoriteRecipes, 'wheat flour')).to.deep.equal([recipe, recipe2]);
    });
});
