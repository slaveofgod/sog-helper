/**
 * @function
 * @description
 * <p>Convert any string to camelcase string.</p>
 * @param {String} input String to convert.
 * @returns {String}
 * @example
 * sogh.camelCaseString('user_name_and_email'); // return UserNameAndEmail
 */
sogh.camelCaseString = function (input) {
    var words = sogh.words(input);

    return sogh.toCamelCase(words);
};