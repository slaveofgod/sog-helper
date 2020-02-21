'use strict';

const sogh = require('../build/output/sog-helper');

describe('Sluggable', () => {

    test('user_name_and_email', () => {
        expect(sogh.sluggable('user_name_and_email')).toBe('user-name-and-email');
    });

    test('user name and email', () => {
        expect(sogh.sluggable('user name and email')).toBe('user-name-and-email');
    });
});