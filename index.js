import {Cliente} from "./Cliente.js";
import {Conta} from "./Conta.js";

const cliente1 = new Cliente("Yuri Alves", 88899977723);
const conta1 = new Conta(0,cliente1,1001);

console.log(cliente1);
console.log(conta1);