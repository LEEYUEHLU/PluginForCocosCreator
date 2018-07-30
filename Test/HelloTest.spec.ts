import { hello } from './HelloTest';
import { expect } from 'chai';
import 'mocha';

describe('Hello function', () => {

    it('should return hello test', () => {
        const result = hello();
        expect(result).to.equal('Hello test!');
    });

});