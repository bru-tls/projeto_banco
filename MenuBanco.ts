import readlinesync = require("readline-sync")
import { colors } from "../util/Colors";
import { Conta } from "../src/model/conta";
import { ContaCorrente } from "../src/model/ContaCorrente";
import { ContaPoupanca } from "../src/model/ContaPoupanca";


export function main(){
    {
    
   // Instanciando um novo Objeto da Classe Conta
   console.log("\nCriar o Objeto da Classe Conta")
   let c1: Conta = new Conta(1, 123, 1, "Natasha", 1000000);
   c1.visualizar();
  

     // Objeto da Classe ContaCorrente (Teste)
    const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    // Objeto da Classe ContaPoupanca (teste)
    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();   }
    

let opcao: number;


while (true) {

console.log("          \n BANCO DO BRAZIL COM Z \n \n        ");
  
        console.log("    1 - Criar conta   ");
        console.log("    2 - Listar as contas               ");
        console.log("    3 - Buscar conta por numero              ");
        console.log("    4 - Atualizar Dados da Conta             ");
        console.log("    5 - Apagar Conta                         ");
        console.log("    6 - Sacar                                ");
        console.log("    7 - Depositar                            ");
        console.log("    8 - Transferir valores entre Contas      ");
        console.log("    9 - Sair                                 ");


        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log("\t\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\nCriar conta\n");

                break;
            case 2:
                console.log("\nListar todas as contas\n");

                break;
            case 3:
                console.log("\nConsultar dados da conta - por número\n");

                break;
            case 4:
                console.log("\nAtualizar dados da conta\n");

                break;
            case 5:
                console.log("\nApagar uma conta\n");

                break;
            case 6:
                console.log("\nSaque\n");

                break;
            case 7:
                console.log("\nDepósito\n");

                break;
            case 8:
                console.log("\nTransferência entre Contas\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");

                break;
        }   
        
    } 
}

function sobre(): void {
            console.log("\n\t\t\t\**********************************************");
            console.log("\t\t\t\tProjeto Desenvolvido por: Bruna Teles");
        console.log(" \t \t  \t\t\     github.com/bru-tls");
            console.log("\t\t\t******************************************");
        }
        
        function keyPress(): void {
            console.log(colors.reset, "");
            console.log("\nPressione enter para continuar...");
            readlinesync.prompt();
        } 
        main()