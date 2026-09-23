const prompt = require("prompt-sync")();

let time = [];
let continuar = true;

function mostrarMenu(){
    console.log("----------------------------");
    console.log("1 - Cadastrar");
    console.log("2 - Deletar");
    console.log("3 - Mostar Equipe");
    console.log("4 - Média da equipe");
    console.log("5 - Buscar jogador");
    console.log("6 - Atualizar pontuação");
    console.log("7 - Sair");
    console.log("\n");
}

function mostraEquipe(){
    if (time.length === 0){
        console.log("Nenhum jogador na equipe!")
        return;
    }

    for(let i = 0; i < time.length; i++){
        let jogador = time[i];
        console.log((i + 1) + ". " + jogador.nome + " | Função: " + jogador.funcao + " | Pontuação: " + jogador.pontuacao);
    }
}

function cadastrarJogador(){
    let nomeJogador = prompt("Digite o nome do jogador: ");
    let funcaoJogador = prompt("Digite a função no time: ");
    let pontuacaoJogador = Number(prompt("Digite a pontuação: "));

    if( isNaN(pontuacaoJogador)){
        console.log("Pontuação Inválida!");
    }else{
        let recruta = {
            nome: nomeJogador,
            funcao: funcaoJogador,
            pontuacao: pontuacaoJogador,
        }

        time.push(recruta);
        console.log("Usuario "+ nomeJogador + " foi cadastrado com sucesso!");

    }

    
}

function deletarJogador(){
    if (time.length === 0){
        console.log("Nenhum jogador cadastrado")
        return;
    }
    let nomeDeletado = prompt("Digite o nome a ser deletado: ");
    let index = time.indexOf(nomeDeletado);
    let indexDeletado = -1;
    for (let i = 0; i < time.length; i++){

        if (time[i].nome === nomeDeletado){
            indexDeletado = i;
            break;
        }
    }


    if (indexDeletado === -1){
        console.log("Jogador não encontrado.");
        return;
    }
    time.splice(indexDeletado, 1);
    console.log("Jogador deletado com sucesso.");
    console.log("----------------------------");
}

function calculoDaMedia(){
    if (time.length === 0){
        console.log("Nenhum jogador cadastrado")
        return;
    }
    let totalPontos = 0;

    for (let i =0; i <time.length; i++){
        totalPontos = totalPontos + time[i].pontuacao;
    }

    let mediaPontos = totalPontos/time.length;
    console.log("A média de pontos do time é:", mediaPontos);
}

function buscarJogador(){
    let nomeDesejado = prompt("Digite o nome buscado: ");
    let encontrou = false;
    for(let i = 0; i < time.length; i++){
        let jogadorAtual = time[i];
        if(jogadorAtual.nome === nomeDesejado){
            console.log("Jogador encontrado!");
            console.log("Nome: " + jogadorAtual.nome + " | Função: " + jogadorAtual.funcao + " | Pontos: " + jogadorAtual.pontuacao); 
            encontrou = true;
        } 

    }
    if(encontrou === false){
        console.log("Jogador não encontrado!")
    }
}

function atualizarPontuacao(){
    let nomeDesejado = prompt("Qual o nome do jogador que você quer atualizar? ");
    let encontrou = false;
    for(let i = 0; i < time.length;i++){
        let jogadorAtual = time[i];
        if(jogadorAtual.nome === nomeDesejado){
            let pontosNovos = Number(prompt("Quantos pontos ele ganhou? "));
            jogadorAtual.pontuacao += pontosNovos;
            console.log("SUCESSO! a pontuação de "+ jogadorAtual.nome + " subiu para " + jogadorAtual.pontuacao);
            encontrou = true;
        }
    }
    if(encontrou === false){
        console.log("Jogador não encontrado!");
    }
}

while(continuar == true) {
    mostrarMenu();
    let opcao = prompt("Digite sua opção: ");

    if (opcao === "1"){
        cadastrarJogador();
    
    }else if(opcao === "2"){
        deletarJogador();
    } else if(opcao === "3"){
        mostraEquipe();
    } else if(opcao === "4"){
        calculoDaMedia();
    } else if (opcao === "5"){
        buscarJogador();
    } else if (opcao ==="6"){
        atualizarPontuacao();
    } else if (opcao === "7"){
        continuar = false;
    }
    else{
        console.log("Opção inválida.");
    }

}