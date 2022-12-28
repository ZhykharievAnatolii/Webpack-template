import React from "react";

import {sum} from "./sum";

document.addEventListener('DOMContentLoaded',()=>{

    const firstInput=+prompt('Enter first number');

    React.createElement('div',{children:'test'})
    console.log(sum(firstInput,5));
});



