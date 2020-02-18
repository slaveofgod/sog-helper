/**
 * @private
 * @function
 * @name _typeLookup
 * @description Create look up table for types
 */
var _typeLookup = function () {
    var result = { };
    var names = ["Array", "Object", "Function", "Date", "RegExp", "Float32Array"];

    for (var i = 0; i < names.length; i++)
        result["[object " + names[i] + "]"] = names[i].toLowerCase();

    return result;
}();

/**
 * @name sogh
 * @namespace
 * @description Root namespace for the SOG Helper Library
 */
var sogh = {
    version: "__CURRENT_SDK_VERSION__",
    revision: "__REVISION__",
    config: { },
    common: { },
    validators: { },

};

if (typeof exports !== 'undefined')
    exports.sogh = sogh;
