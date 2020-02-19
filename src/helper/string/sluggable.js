/**
 * @function
 * @description
 * <p>Convert any string to sluggable string.</p>
 * @param {String} input String to convert.
 * @returns {String}
 * @example
 * sogh.sluggable('user name and email'); // return user-name-and-email
 */
sogh.sluggable = function (input) {
    var words = sogh.toWords(input);

    return words.join('-');
};