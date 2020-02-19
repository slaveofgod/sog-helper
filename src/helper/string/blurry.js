/**
 * @function
 * @description
 * <p>Make blurry hidden text.</p>
 * @param {String|Array} queries CSS queries of elements which content has to be hidden.
 * @example
 * sogh.blurry('div#container-id table tbody td:nth-child(6) a');
 *
 * // Or
 * sogh.blurry([
 *     'div#container-id table tbody td:nth-child(6) a',
 *     'div#container-id table tbody td:nth-child(7)'
 * ]);
 */
sogh.blurry = function (queries) {
    console.log('sogh.blurry');

    if (false === Array.isArray(queries)) {
        queries = [queries];
    }

    var style = document.createElement('style');
    // https://sitesdoneright.com/blog/2014/09/how-to-make-blurry-text-with-css
    style.innerHTML =
        '.sog-blurry {' +
            'color: transparent;' +
            'text-shadow: rgba(0, 0, 0, 0.5) 0px 0px 7px;' +
        '}';

    document.querySelector('html body').appendChild(style);

    for (var i = 0; i < queries.length; i ++) {
        var nodes = document.querySelectorAll(queries[i]);
        for (var j = 0; j < nodes.length; j ++) {
            var node = nodes[j];

            if ('A' === node.nodeName) {
                var el = document.createElement('span');
                el.innerHTML = node.innerHTML;
                node.innerHTML = '';
                node.appendChild(el);

                node = el;
            }

            node.classList.add('sog-blurry');
        }
    }
};