import {Cliente} from "./Cliente.js"

export class Conta{

    constructor (saldoInicial,cliente,agencia){
        if(this.constructor == Conta){

            throw new Error("Você não deveria instanciar um objeto do tipo conta");
        }

        this._saldoInicial = saldoInicial;
        this._cliente = cliente;
        this.agencia= agencia;
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


    saque(){
      throw new Error("Este metodo é abstrato!!");
    }

    _saque(valor,taxa){
        if (valor <= 0) return;
        const valorSacado = taxa * valor;
        this._saldoInicial -= valorSacado;
        
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

