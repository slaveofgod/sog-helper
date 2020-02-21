/**
 * @function
 * @description
 * <p>Convert any string to camelcase string.</p>
 * @param {String} input String to convert.
 * @param {Boolean} skipFirst Skip first word.
 * @returns {String}
 * @example
 * sogh.camelCase('user_name_and_email'); // return UserNameAndEmail
 */
sogh.camelCase = function (input, skipFirst) {
    var inputArray = sogh.words(input);

    var result = "";
    for(var i = 0 , len = inputArray.length; i < len; i++) {
        var currentStr = inputArray[i];
        var tempStr = currentStr.toLowerCase();

        if(
            (true === skipFirst && i != 0)
            || true !== skipFirst
        ) {
            // convert first varter to upper case (the word is in lowercase)
            tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1);
        }

        result += tempStr;
    }

    return result;
};