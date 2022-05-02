import {Cliente} from "./Cliente.js"

export class Conta{

    static numeroDeContas = 0;

    constructor (saldoInicial,cliente,agencia){
        this._saldoInicial = saldoInicial;
        this._cliente = cliente,
        this.agencia= agencia,
        Conta.numeroDeContas += 1;

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


    saque(valor){
        if (valor <= 0) return;
        this._saldoInicial -= valor;
    }

    deposito(valor){
        if(valor < 50) return;
        this._saldoInicial += valor;
    }

    transferir(valor,conta){
        if(valor < this._saldoInicial) return;

        this._saldoInicial -= valor;
        conta.deposito(valor);

        
    }
}

