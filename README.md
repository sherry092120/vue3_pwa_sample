# vue-pwa

build後常出現的兩個錯誤：
(1)
error:
Can't find self.__WB_MANIFEST in your SW source.

解答：
After upgrade from v3 to v6, the following change fixed this error.

service-worker.js

from:

workbox.precaching.precacheAndRoute([]);

to:

import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
precacheAndRoute(self.__WB_MANIFEST);


(2)
error:
Module not found: Error: Can't resolve 'src/service-worker.js' in '/Users/XXX/XXX/test/sample_install/vue-pwa'

解答：
vue.config.js:

workboxOptions: {
    exclude: [/\.html$/], //html不進行service Worker缓存
    swSrc: './src/service-worker.js'
}

** swSrc 路徑要有./


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
