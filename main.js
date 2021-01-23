console.log('hello node');
const hello = require('./module.js').hello;
hello();

import common from './module.js';
common.hello()
common.goodbye();
let num = 1;
num = "hello2";

require('./main.ts');