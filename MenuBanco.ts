import readlinesync = require("readline-sync")
import { colors } from "../util/Colors";
import { Conta } from "../src/model/conta";
import { ContaCorrente } from "../src/model/ContaCorrente";
import { ContaPoupanca } from "../src/model/ContaPoupanca";
import { ContaController } from "../src/repository/controller/ContaController";


export function main(){

    let contas: ContaController = new ContaController

    let opcao: number
    let numero, agencia, tipo, saldo, limite, aniversario: number
    let titular: string 
    const tipoContas = ['Conta corrente' , 'Conta poupanca']


    let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
    contas.cadastrar(cc1);
    
    let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
    contas.cadastrar(cc2);
    
    let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
    contas.cadastrar(cp1);
    
    let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
    contas.cadastrar(cp2);
    
    contas.listarTodas();
      


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
        const opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log("\t\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\nCriar conta\n");
                
          console.log("Digite o número da agência: ")
                agencia= readlinesync.questionInt("")

                console.log("Digite o nome do titular da conta: ")
                titular= readlinesync.question("")
             
                console.log("Digite o tipo da conta: ")
                tipo= readlinesync.questionInt("")

                console.log("Digite o saldo da conta: (R$) ")
                saldo= readlinesync.questionFloat("")

switch (tipo){
    case 1: 
console.log("Digite o limite da conta: (R$) ")
limite = readlinesync.questionFloat("")
contas.cadastrar(
    new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite))
    break

case 2: 
console.log("Digite o dia do aniversário da conta poupança: ")
                aniversario = readlinesync.questionInt("")
                contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario))
                break
}
                keyPress()
                break

                case 2:
                console.log("\nListar todas as contas\n");
            contas.listarTodas();
            keyPress()
                break;

            case 3:
                console.log("\nConsultar dados da conta - por número\n");
             
                console.log("Digite o número da conta:  ")
                numero = readlinesync.questionInt("")
                contas.procurarPorNumero(numero)
                keyPress()
                break;
            case 4:
                console.log("\nAtualizar dados da conta\n");
                
                console.log("Digite o número da conta: ")
                numero = readlinesync.questionInt("")

                let conta = contas.buscaNoArray(numero)

                if (conta !=null){
                    console.log("Digite o número da agência: ")
                    agencia = readlinesync.questionInt("")
                    console.log("Digite o nome do titular da conta: ")
                    titular = readlinesync.question("")
                    tipo = conta.tipo
                                       
                    console.log("Digite o saldo da conta: ")
                    saldo = readlinesync.questionInt("")

    switch (tipo){
        case 1: 
        console.log("Digite o limite da conta: ")
                    limite = readlinesync.questionInt("")
contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite) )
break
case 2: 
console.log("Digite oo dia do aniversário da conta poupança: ")
                    aniversario = readlinesync.questionInt("")
contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario))
break}

} else {
    console.log("Conta número: " +numero + " não foi encontrada!")

}               
                keyPress()
                break;
 

            
            
            
    case 5:
                console.log("\nApagar uma conta\n");

                console.log("Digite o número da conta: ")
                    numero = readlinesync.questionInt("")
contas.deletar(numero)

                keyPress()
                break;
            case 6:
                console.log("\nSaque\n");
                keyPress()
                break;
            case 7:
                console.log("\nDepósito\n");
                keyPress()
                break;
            case 8:
                console.log("\nTransferência entre Contas\n");
                keyPress()
                break;
            default:
                console.log("\nOpção Inválida!\n");
                keyPress()
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