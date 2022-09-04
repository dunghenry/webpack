const moment = require('moment');
import _ from 'lodash';
// import {sum} from './sum'; //export const sum = (a, b) => a + b;
const {sum} = require('./sum'); 
import './libs/others';
console.log(1);
console.log(sum(1, 2));
console.log(sum(3, 10));
console.log(moment().format('LT'))
console.log(_.size([1, 2, 3]));


const PI = 3.14;
console.log(`PI is ${PI}`);