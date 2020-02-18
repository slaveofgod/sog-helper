/*
 * SOG Helper Library v1.0.0 revision -
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
var sogh = {version:"1.0.0", revision:"-", config:{}, common:{}, validators:{}};
if (typeof exports !== "undefined") {
  exports.sogh = sogh;
}
;sogh.blurry = function(queries) {
  console.log("sogh.blurry");
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


return sogh;
}));

