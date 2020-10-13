const chai = require('chai');
const expect = chai.expect;

const Pantry = require('../src/Pantry');

describe('Pantry', () => {
    it('should be a function', () => {
        expect(Pantry).to.be.a('function');
    });
    
    it('should create an instance of Pantry', () => {
        const pantry = new Pantry();
        
        expect(pantry).to.be.an.instanceof(Pantry);
    });
});