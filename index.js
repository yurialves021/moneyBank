import {Cliente} from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Yuri Alves", 88899977723);
const contaCorrente = new ContaCorrente(cliente1,1001);

const contaPoupanca = new ContaPoupanca(1500,cliente1,1001);



contaCorrente.deposito(500);

console.log(contaCorrente);

contaCorrente.saque(100);
contaPoupanca.saque(100);

console.log(contaCorrente);
console.log(contaPoupanca);