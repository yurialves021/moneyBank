import {Cliente} from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Gerente }  from  "./Funcionario/Gerente.js";     
import { Diretor }  from  "./Funcionario/Diretor.js";     
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


const diretor = new Diretor ("Ricardo",10000,123456799);
const gerente = new Gerente("Andre",5000,123456788);

diretor.cadastrarSenha("123456");

const estaLogado = SistemaAutenticacao.login(diretor,"123456");

console.log(estaLogado);