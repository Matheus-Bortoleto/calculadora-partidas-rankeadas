console.log("Qual o nome do herói?");
let nomeHeroi = "Cavaleiro Leigo";
console.log(nomeHeroi);

console.log (" ");
console.log("Quantas vitórias o Herói tem?");
let numVitoras = 30;
console.log(numVitoras);

console.log (" ");
console.log("Quantas derrotas o Herói tem?");
let numDerrotas = 3;
console.log(numDerrotas);


let saldoVitorias = saldoRankeadas();
function saldoRankeadas(numVitoras,numDerrotas) {
    return numVitoras - numDerrotas;
}

"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
