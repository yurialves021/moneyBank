import {Cliente} from "./Cliente.js"

export class Conta{
    constructor (saldoInicial,cliente,agencia){
        this._saldoInicial = saldoInicial;
        this._cliente = cliente,
        this.agencia= agencia

    }

    set cliente(novoValor){
        if (novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldoInicial;
    }
}