'use strict';

const sogh = require('../build/output/sog-helper');

describe('Camel Case', () => {

    test('user_name_and_email', () => {
        expect(sogh.camelCase('user_name_and_email')).toBe('UserNameAndEmail');
    });

    test('user_name_and_email [skipFirst: true]', () => {
        expect(sogh.camelCase('user_name_and_email', true)).toBe('userNameAndEmail');
    });
});