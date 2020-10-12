const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');

describe('User', () => {
    let user;
    let user2;
    let pantry;
    
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
        
        user.addToFavorites('Gross Cupcakes');
        
        expect(user.favoriteRecipes).to.deep.equal(['Gross Cupcakes']);
    });
    
    it('should be able to add a recipe to recipes to cook', () => {
        expect(user.recipesToCook).to.deep.equal([]);
        
        user.addToRecipesToCook('Yummy Cupcakes');
        
        expect(user.recipesToCook).to.deep.equal(['Yummy Cupcakes']);
    });
});