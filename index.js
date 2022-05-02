import {Cliente} from "./Cliente.js";
import {Conta} from "./Conta.js";

const cliente1 = new Cliente("Yuri Alves", 88899977723);
const conta1 = new Conta(0,cliente1,1001);


conta1.deposito(300);

conta1.saque(40);

console.log(conta1);
