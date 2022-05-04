import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
    constructor(saldoInicial,cliente,agencia){
        super(saldoInicial,cliente,agencia);

    }

    saque(valor) {
        const taxa = 1.05;
        this._saque(valor, taxa);
    }
}