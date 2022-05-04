import {Cliente} from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Yuri Alves", 88899977723);
const contaCorrente = new ContaCorrente(cliente1,1001);
const contaPoupanca = new ContaPoupanca(1500,cliente1,1001);
const contaSalario = new ContaSalario(cliente1);



contaSalario.deposito(100);
contaSalario.saque(10);

console.log(contaSalario);

