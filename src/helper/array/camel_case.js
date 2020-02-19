/**
 * @function
 * @description
 * <p>Convert the input array to camel case.</p>
 * @param {Array} inputArray Array to convert.
 * @param {Boolean} skipFirst Skip first word.
 * @returns {Array}
 * @example
 * sogh.camelCase(['user', 'name', 'and', 'email']); // return ['User', 'Name', 'And', 'Email']
 */
sogh.camelCase = function (inputArray, skipFirst) {
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