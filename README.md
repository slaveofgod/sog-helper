# sog-helper

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![DeepScan grade][deepscan-image]][deepscan-url]

The library of helpers.

##### This library offers a lot of different useful helpers.

## Navigation

 * [Installation and Usage](#installation-and-usage)
 * [Available Helpers](#available-helpers)

## Installation and Usage

The library can be loaded as a standalone script.

Install the library with `npm install sog-helper`

```html
<script type="text/javascript" src="build/output/sog-helper.min.js"></script>
<script type="text/javascript">

    sogh.blurry('div#container-id table tbody td:nth-child(6) a');

    // Or
    sogh.blurry([
        'div#container-id table tbody td:nth-child(6) a',
        'div#container-id table tbody td:nth-child(7)'
    ]);
</script>
```

[⬆ navigation](#navigation)


## Available Helpers
Below is a list of all available helpers:

 * [Blurry](#blurry)
 * [Camel Case](#camel-case)
 * [Sluggable](#sluggable)
 * [Words](#words)

[⬆ navigation](#navigation)

## Helpers

##### Blurry

This helper makes blurry hidden text. For instance it is necessary to hide all email address on the page.

_example_:
```javascript
sogh.blurry('div#container-id table tbody td:nth-child(6) a');

// Or
sogh.blurry([
    'div#container-id table tbody td:nth-child(6) a',
    'div#container-id table tbody td:nth-child(7)'
]);
```

[⬆ navigation](#navigation)

---

##### Camel Case

Convert any string to camelcase string.

_example_:
```javascript
sogh.camelCase('user_name_and_email'); // return UserNameAndEmail
```

[⬆ navigation](#navigation)

---

##### Sluggable

Convert any string to sluggable string.

_example_:
```javascript
sogh.sluggable('user name and email'); // return user-name-and-email
```

[⬆ navigation](#navigation)

---

##### Words

Convert string to words.

_example_:
```javascript
sogh.words('user_name_and_email'); // return ['user', 'name', 'and', 'email']
```

[⬆ navigation](#navigation)

---

## License (MIT)

```
Copyright (c) 2020 Slave of God <iamtheslaveofgod@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```


[npm-url]: https://npmjs.org/package/sog-helper
[npm-image]: http://img.shields.io/npm/v/sog-helper.svg

[travis-url]: https://travis-ci.org/slaveofgod/sog-helper
[travis-image]: http://img.shields.io/travis/slaveofgod/sog-helper.svg

[deepscan-url]: https://deepscan.io/dashboard#view=project&tid=7185&pid=9698&bid=129162
[deepscan-image]: https://deepscan.io/api/teams/7185/projects/9698/branches/129162/badge/grade.svg

[downloads-image]: http://img.shields.io/npm/dm/sog-helper.svg