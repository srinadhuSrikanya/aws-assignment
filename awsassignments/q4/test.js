const assert = require('assert');

const { expect } = require('chai');

const { add, sub, mul, div } = require('./app');



describe('add two numbers', () => {

    it('Should Add 2 Numbers Together', () => {

        const result = add(3, 3);

        expect(result).to.be.eq(6);

    });

    it('Should Add 1 Number', () => {

        const result = add(3);

        expect(result).to.be.eq(3);

    });

    it('Should Add Default Value', () => {

        const result = add();

        expect(result).to.be.eq(0);

    });

});



describe('Subtract  two numbers', () => {

    it('Should Subtract 2 Numbers', () => {

        const result = sub(3, 3);

        expect(result).to.be.eq(0);

    });

});



describe('multiply two numbers', () => {

    it('Should multiply 2 Numbers', () => {

        const result = mul(3, 3);

        expect(result).to.be.eq(9);

    });

});



describe('divide two numbers', () => {

    it('Should divide 2 Numbers', () => {

        const result = div(3, 3);

        expect(result).to.be.eq(1);

    });

});