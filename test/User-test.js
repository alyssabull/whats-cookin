const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');

describe('User', function() {
    it('should be a function', function() {
        
        expect(User).to.be.a('function');
    });
    it('should create an instance of a User', function() {
        const user = new User();
        
        expect(user).to.be.an.instanceof(User);
    });
    it('should be able to take in a first argument of a name', function() {
        const user = new User('Jim');
        
        expect(user.name).to.equal('Jim');
    });
    it('should only be able to take in a string for a name', function() {
        const user = new User('Jim');
        
        expect(user.name).to.be.a('string');
    });
    it('should be able to take in a second argument of an ID', function() {
        const user = new User('Jim', 1);
        
        expect(user.id).to.equal(1);
    });
    it('should only be able to take in a positive integer for an ID', function() {
        const user = new User('Jim', 2);
        
        expect(user.id).to.be.above(0);
    });
    it('should have a pantry', function() {
        const pantry = [
            {
                ingredient: 123,
                amount: 2
            },
            {
                ingredient: 172,
                amount: 4
            },
        ];
        const user = new User('Jim', 1, pantry);
        const user2 = new User('John', 2, [
            {
                ingredient: 756,
                amount: 7
            },
            {
                ingredient: 203,
                amount: 2
            },
        ]);
        
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
    it('should only be able to take in an array for a pantry', function() {
        const pantry = [
            {
                ingredient: 123,
                amount: 2
            },
            {
                ingredient: 172,
                amount: 4
            },
        ];
        const user = new User('Jim', 1, pantry);
        expect(user.pantry).to.be.an('array');
    });
    it('should start with an empty array for favorite recipes', function() {
        const pantry = [
            {
                ingredient: 123,
                amount: 2
            },
            {
                ingredient: 172,
                amount: 4
            },
        ];
        const user = new User('Jim', 1, pantry);
        
        expect(user.favoriteRecipes).to.deep.equal([]);
    });
    it('should start with an empty array for recipes to cook', function() {
        const pantry = [
            {
                ingredient: 123,
                amount: 2
            },
            {
                ingredient: 172,
                amount: 4
            },
        ];
        const user = new User('Jim', 1, pantry);
        
        expect(user.recipesToCook).to.deep.equal([]);
    });
    it('should be able to add a recipe to favorites', function() {
        const pantry = [
            {
                ingredient: 123,
                amount: 2
            },
            {
                ingredient: 172,
                amount: 4
            },
        ];
        const user = new User('Jim', 1, pantry);
        
        expect(user.favoriteRecipes).to.deep.equal([]);
        
        user.addToFavorites('Gross Cupcakes');
        
        expect(user.favoriteRecipes).to.deep.equal(['Gross Cupcakes']);
    });
    it('should be able to add a recipe to recipes to cook', function() {
        const pantry = [
            {
                ingredient: 123,
                amount: 2
            },
            {
                ingredient: 172,
                amount: 4
            },
        ];
        const user = new User('Jim', 1, pantry);
        
        expect(user.recipesToCook).to.deep.equal([]);
        
        user.addToRecipesToCook('Yummy Cupcakes');
        
        expect(user.recipesToCook).to.deep.equal(['Yummy Cupcakes']);
    });
});