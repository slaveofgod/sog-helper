/*
 * SOG Helper Library v1.1.2 revision 0bc2b63
 * Copyright 2019-2020 Slave of God <iamtheslaveofgod@gmail.com>. All rights reserved.
 */
;(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.sogh = factory();
    }
}(this, function () {

var _typeLookup = function() {
  var result = {};
  var names = ["Array", "Object", "Function", "Date", "RegExp", "Float32Array"];
  for (var i = 0; i < names.length; i++) {
    result["[object " + names[i] + "]"] = names[i].toLowerCase();
  }
  return result;
}();
var sogh = {version:"1.1.2", revision:"0bc2b63", config:{}, common:{}, validators:{}};
if (typeof exports !== "undefined") {
  exports.sogh = sogh;
}
;sogh.blurry = function(queries) {
  if (false === Array.isArray(queries)) {
    queries = [queries];
  }
  var style = document.createElement("style");
  style.innerHTML = ".sog-blurry {" + "color: transparent;" + "text-shadow: rgba(0, 0, 0, 0.5) 0px 0px 7px;" + "}";
  document.querySelector("html body").appendChild(style);
  for (var i = 0; i < queries.length; i++) {
    var nodes = document.querySelectorAll(queries[i]);
    for (var j = 0; j < nodes.length; j++) {
      var node = nodes[j];
      if ("A" === node.nodeName) {
        var el = document.createElement("span");
        el.innerHTML = node.innerHTML;
        node.innerHTML = "";
        node.appendChild(el);
        node = el;
      }
      node.classList.add("sog-blurry");
    }
  }
};
sogh.camelCaseString = function(input) {
  var words = sogh.words(input);
  return sogh.toCamelCase(words);
};
sogh.sluggable = function(input) {
  var words = sogh.words(input);
  return words.join("-");
};
sogh.convertToString = function(input) {
  if (input) {
    if (typeof input === "string") {
      return input;
    }
    return String(input);
  }
  return "";
};
sogh.words = function(input) {
  input = sogh.convertToString(input);
  var regex = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g;
  return input.match(regex);
};
sogh.camelCase = function(inputArray, skipFirst) {
  var result = "";
  for (var i = 0, len = inputArray.length; i < len; i++) {
    var currentStr = inputArray[i];
    var tempStr = currentStr.toLowerCase();
    if (true === skipFirst && i != 0 || true !== skipFirst) {
      tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1);
    }
    result += tempStr;
  }
  return result;
};


return sogh;
}));

