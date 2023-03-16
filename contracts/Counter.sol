// SPDX-License-Identifier: MIT
pragma solidity >=0.8.7;  //version de los compiladores

contract Counter {
    uint counter;

    constructor(uint _counter) {  //el guion bajo _para indicar que es un parametro y no se confunda con el nombre de la propiedad
        counter = _counter;
    }

    function getCounter() public view returns(uint) {
        return counter;
    }


    function increment() public {
        counter ++;
    }


}





