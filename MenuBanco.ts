import readlinesync = require("readline-sync")
import { colors } from "../util/Colors";
import { Conta } from "../src/model/conta";

export function main(){
    {

        const conta: Conta = new Conta(1, 123, 1, "João da Silva", 1000);
        conta.visualizar();
        conta.sacar(0);
        conta.visualizar();
        conta.depositar(0);
        conta.visualizar();       
    }
    

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
            console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
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
            console.log("\n**********************************************");
            console.log("Projeto Desenvolvido por: Bruna Teles");
        console.log("github.com/bru-tls");
            console.log("******************************************");
        }
        
        function keyPress(): void {
            console.log(colors.reset, "");
            console.log("\nPressione enter para continuar...");
            readlinesync.prompt();
        } 
        main()