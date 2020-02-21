'use strict';

const sogh = require('../build/output/sog-helper');

describe('Words', () => {

    test('user_name_and_email', () => {
        expect(sogh.words('user_name_and_email').join(',')).toBe('user,name,and,email');
    });

    test('user name and email', () => {
        expect(sogh.words('user name and email').join(',')).toBe('user,name,and,email');
    });
});