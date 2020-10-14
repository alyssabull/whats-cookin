const chai = require('chai');
const expect = chai.expect;

const Pantry = require('../src/Pantry');
const User = require('../src/User');
const Recipe = require('../src/Recipe');

describe('Pantry', () => {
    it('should be a function', () => {
        expect(Pantry).to.be.a('function');
    });

    it('should create an instance of Pantry', () => {
        const pantry = new Pantry();

        expect(pantry).to.be.an.instanceof(Pantry);
    });

    it('should have a user pantry', () => {
        const currentPantry = [  {
        "ingredient": 11477,
        "amount": 4
      },
      {
        "ingredient": 11297,
        "amount": 4
      }]
        const user = new User('Joe', 1, currentPantry);
        const pantry = new Pantry(user.pantry);

        expect(pantry.userPantry).to.deep.equal(user.pantry);
    });

    it('should check that a users pantry has the correct ingredients', () => {
        const currentPantry = [  {
        "ingredient": 11477,
        "amount": 4
      },
      {
        "ingredient": 11297,
        "amount": 4
      }]
        const ingredients = [
        {
          "id": 11477,
          "quantity": {
            "amount": 15,
            "unit": "c"
          }
        },
        {
          "id": 18372,
          "quantity": {
            "amount": 5,
            "unit": "tsp"
          }
        }];
        const instructions = [
          {
            "instruction": "Butter the bread",
            "number": 1
          },
          {
            "instruction": "Toast the buttered bread",
            "number": 2
          }];
        const recipe = new Recipe(123456, 'https://something.jpg', ingredients, instructions, 'Toast', ['breakfast', 'brunch']);
        const user = new User('Joe', 1, currentPantry);
        const pantry = new Pantry(user.pantry);

        pantry.checkStock(recipe);

        expect(pantry.checkStock(recipe)).to.deep.equal([recipe.ingredients[0]]);
    });

    it('should list missing ingredients after checking pantry', () => {
        const currentPantry = [  {
        "ingredient": 11477,
        "amount": 4
      },
      {
        "ingredient": 11297,
        "amount": 4
      }]
        const ingredients = [
        {
          "id": 11477,
          "quantity": {
            "amount": 15,
            "unit": "c"
          }
        },
        {
          "id": 18372,
          "quantity": {
            "amount": 5,
            "unit": "tsp"
          }
        }];
        const instructions = [
          {
            "instruction": "Butter the bread",
            "number": 1
          },
          {
            "instruction": "Toast the buttered bread",
            "number": 2
          }];
        const ingredientData = [
        {
          "id": 20081,
          "name": "wheat flour",
          "estimatedCostInCents": 142
        },
        {
          "id": 18372,
          "name": "bicarbonate of soda",
          "estimatedCostInCents": 582
        }];
        const recipe = new Recipe(123456, 'https://something.jpg', ingredients, instructions, 'Toast', ['breakfast', 'brunch']);
        const user = new User('Joe', 1, currentPantry);
        const pantry = new Pantry(user.pantry);

        pantry.listMissingIngredients(recipe);

        expect(pantry.listMissingIngredients(recipe)).to.deep.equal([{
          "id": 18372,
          "quantity": {
            "amount": 5,
            "unit": "tsp"
          },
          "name": "bicarbonate of soda",
          "estimatedCostInCents": 582
        }]);
    });

    it('should show the name and amount of ingredients in the pantry', () => {
      const currentPantry = [  {
      "ingredient": 20081,
      "amount": 4
    },
    {
      "ingredient": 18372,
      "amount": 4
    }]
      const ingredientData = [
      {
        "id": 20081,
        "name": "wheat flour",
        "estimatedCostInCents": 142
      },
      {
        "id": 18372,
        "name": "bicarbonate of soda",
        "estimatedCostInCents": 582
      }];
      const user = new User('Joe', 1, currentPantry);
      const pantry = new Pantry(user.pantry);
      pantry.getPantryItems();
      expect(pantry.getPantryItems()).to.deep.equal([  {
      "ingredient": 20081,
      "amount": 4,
      "name": "wheat flour",
    },
    {
      "ingredient": 18372,
      "amount": 4,
      "name": "bicarbonate of soda",
    }])
    })
});
