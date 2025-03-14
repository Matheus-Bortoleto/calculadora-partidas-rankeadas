console.log("Qual o nome do herói?");
let nomeHeroi = "Cavaleiro Leigo";
console.log(nomeHeroi);

console.log (" ");
console.log("Quantas vitórias o Herói tem?");
let numVitorias = 30;
console.log(numVitorias);

console.log (" ");
console.log("Quantas derrotas o Herói tem?");
let numDerrotas = 3;
console.log(numDerrotas);


let saldoVitorias = saldoRankeadas(numVitorias, numDerrotas);

function saldoRankeadas(numVitorias,numDerrotas) {
    return numVitorias - numDerrotas;
}

function determinarNivel(numVitorias) {
    if (numVitorias < 10) {
        return "Ferro";
    } else if (numVitorias >= 11 && numVitorias <= 20) {
        return "Bronze";
    } else if (numVitorias >= 21 && numVitorias <= 50) {
        return "Prata";
    } else if (numVitorias >= 51 && numVitorias <= 80) {
        return "Ouro";
    } else if (numVitorias >= 81 && numVitorias <= 90) {
        return "Diamante";
    } else if (numVitorias >= 91 && numVitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

let nivel = determinarNivel(numVitorias);

console.log(" ");
console.log("O Herói " + nomeHeroi + " tem saldo de " + saldoVitorias + " vitórias está no nível de " + nivel);