import {Cliente} from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Gerente }  from  "./Funcionario/Gerente.js";     
import { Diretor }  from  "./Funcionario/Diretor.js";     
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
import { Conta } from "./Conta/Conta.js";


const diretor = new Diretor ("Ricardo",10000,123456799);
diretor.cadastrarSenha("123456");


const gerente = new Gerente("Andre",5000,123456788);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Yuri",1463632627,"321");
const contaCorrente = new ContaCorrente(cliente,1001);

console.log(contaCorrente);