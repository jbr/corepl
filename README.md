corepl
======

a repl for https://github.com/visionmedia/co

```bash
$ npm install -g corepl
or
$ npm install --save corepl
```

example using thunkify and request
```js
> var thunkify = require('thunkify')
> var request = require('request')
> var get = thunkify(request.get)
> yield get('https://api.github.com/repos/jbr/corepl')
```

```js
> var wait = function(ms) { return function(cb) { setTimeout(cb, ms) }}
> yield wait(1000)
// a second passes
>
```

