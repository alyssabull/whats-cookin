const chai = require('chai');
const expect = chai.expect;

const Recipe = require('../src/Recipe');

describe('Recipe', () => {
    it('should be a function', () => {
        expect(Recipe).to.be.a('function');
    });

    it('should create a new instance of a recipe', () => {
        const recipe = new Recipe();

        expect(recipe).to.be.an.instanceof(Recipe);
    });

    it('should be able to take in a first argument of an ID', () => {
        const recipe = new Recipe(123456);

        expect(recipe.id).to.equal(123456);
    });

    it('should only take in a positive integer for an ID', () => {
        const recipe = new Recipe(123456);

        expect(recipe.id).to.be.above(0);
    });

    it('should be able to take in a second argument of an image', () => {
        const recipe = new Recipe(123456, 'https://something.jpg');

        expect(recipe.image).to.equal('https://something.jpg');
    });

    it('should only take in a string for an image', () => {
        const recipe = new Recipe(123456, 'https://something.jpg');

        expect(recipe.image).to.be.a('string');
    });

    it('should include https in image string', () => {
        const recipe = new Recipe(123456, 'https://something.jpg');

        expect(recipe.image).to.include('https');
    });

    it('should be able to take in a third argument of ingredients', () => {
        const ingredients = [
          {
            "id": 22222,
            "quantity": {
              "amount": 15,
              "unit": "c"
            }
          },
          {
            "id": 19302,
            "quantity": {
              "amount": 5,
              "unit": "tsp"
            }
          }];
        const recipe = new Recipe(123456, 'https://something.jpg', ingredients);

        expect(recipe.ingredients).to.deep.equal(ingredients);
    });

    it('should only take in an array of ingredients', () => {
        const ingredients = [
          {
            "id": 22222,
            "quantity": {
              "amount": 15,
              "unit": "c"
            }
          },
          {
            "id": 19302,
            "quantity": {
              "amount": 5,
              "unit": "tsp"
            }
          }];
        const recipe = new Recipe(123456, 'https://something.jpg', ingredients);

        expect(recipe.ingredients).to.be.an('array');
    });

    it('should be able to take in a fourth argument of instructions', () => {
        const ingredients = [
          {
            "id": 22222,
            "quantity": {
              "amount": 15,
              "unit": "c"
            }
          },
          {
            "id": 19302,
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
        const recipe = new Recipe(123456, 'https://something.jpg', ingredients, instructions);

        expect(recipe.instructions).to.deep.equal(instructions);
    });

    it('should only take in an array of instructions', () => {
        const ingredients = [
          {
            "id": 22222,
            "quantity": {
              "amount": 15,
              "unit": "c"
            }
          },
          {
            "id": 19302,
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
        const recipe = new Recipe(123456, 'https://something.jpg', ingredients, instructions);

        expect(recipe.instructions).to.be.an('array');
    });

    it('should take in a fifth argument of name', () => {
        const ingredients = [
          {
            "id": 22222,
            "quantity": {
              "amount": 15,
              "unit": "c"
            }
          },
          {
            "id": 19302,
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
        const recipe = new Recipe(123456, 'https://something.jpg', ingredients, instructions, 'Toast');

        expect(recipe.name).to.equal('Toast');
    });

    it('should only take in a string for a name', () => {
        const ingredients = [
          {
            "id": 22222,
            "quantity": {
              "amount": 15,
              "unit": "c"
            }
          },
          {
            "id": 19302,
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
        const recipe = new Recipe(123456, 'https://something.jpg', ingredients, instructions, 'Toast');

        expect(recipe.name).to.be.a('string');
    });

    it('should take in a sixth argument of tags', () => {
        const ingredients = [
          {
            "id": 22222,
            "quantity": {
              "amount": 15,
              "unit": "c"
            }
          },
          {
            "id": 19302,
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

        expect(recipe.tags).to.deep.equal(['breakfast', 'brunch']);
    });

    it('should be able to modify ingredients to include the name', function() {
      const ingredients = [
        {
          "id": 20081,
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
        }]

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

        recipe.getIngredients(recipe);
        expect(recipe.ingredients[0].name).to.equal('wheat flour');
        expect(recipe.ingredients[1].name).to.equal('bicarbonate of soda');
    })
});
