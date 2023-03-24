const fs = require('fs');
const { deflate } = require('zlib');
const leia = require('prompt-sync')();


/* const faturamento = require('./dados.json')
console.log(faturamento[3].valor); */

/* fs.readFile('./dados.json', 'utf-8', (erro, data)=>{
    const faturamento = JSON.parse(data)
    console.log(faturamento)
}) */

const valores = fs.readFileSync('./dados.json', 'utf-8')
const faturamento = JSON.parse(valores)


let achou =false;

while(!achou){

console.log("\nEscolha uma das opções abaixo:\n\n[1] - O menor valor de faturamento ocorrido em um dia do mês.\n[2] - O maior valor de faturamento ocorrido em um dia do mês. \n[3] - Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.\n[0] - Sair do Programa !\n")

let num = parseFloat(leia("Digite um número:"))

 switch (num) {

    case 1:
    let menorValor = Infinity;
        for (let i = 0; i < faturamento.length; i++) {
           let valorAtual = faturamento[i].valor;
           if(valorAtual < menorValor)
           menorValor = valorAtual;
     }
     console.log(`\n>>>>>>>> O menor valor em um dia do mês foi R$${menorValor.toFixed(1)}.`)
    
    break;

    case 2:
        let maiorValor = -Infinity;
        let i = 0; 
        for (i = 0; i < faturamento.length; i++) {
           let valorAtual = faturamento[i].valor;
           if(valorAtual > maiorValor)
           maiorValor = valorAtual;
     }
     console.log(`\n>>>>>>>> O maior valor em um dia do mês foi R$${maiorValor.toFixed(4)} .`)

    break;

    case 3:

    break;

    case 0:
        achou = true;
        console.log('\n\n=================================\nFIM DO PROGRAMA !\n=================================\n')
    break;

    default:
        console.log("\n\n=================================\nOpção inválida! \nTente novamente !!\n=================================\n");

 }   
}

