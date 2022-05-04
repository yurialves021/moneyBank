import {Cliente} from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

const cliente1 = new Cliente("Yuri Alves", 88899977723);
const contaCorrente = new ContaCorrente(cliente1,1001);
const contaPoupanca = new ContaPoupanca(1500,cliente1,1001);
const contaSalario = new ContaSalario(cliente1);



contaSalario.deposito(100);
contaSalario.sacar(10);

console.log(contaSalario);

