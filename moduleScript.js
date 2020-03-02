import {returnHi as sayHi,last,middle} from './moduleUtils.js';//named exports

import * as everything from './moduleShital.js';
import { handleButtonClick } from './moduleHandlers.js';


// // import shital from './moduleShital.js';//default exports
// // console.log(shital);
// console.log(everything);

// const name="shital";

// console.log(sayHi(name));

// console.log("its working");
// console.log(middle,last);


const button=document.querySelector('button');

button.addEventListener('click',handleButtonClick)

