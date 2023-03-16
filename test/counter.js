const { expect } = require("chai");
const { ethers } = require("hardhat");

describe('Counter Contract', () => {
    it('Should increment the counter', async () => {
        //libreria que nos sirve para interactuar con contratos inteligentes
        const Counter = await ethers.getContractFactory('Counter');
        const counter = await Counter.deploy(0); //deploy llama automaticamente al constructor del contrato
        await counter.increment(); //llamdo del metodo incrementar
        const updateCounter = counter.getCounter();

        expect(updateCounter).to.equal(1)

    });
});