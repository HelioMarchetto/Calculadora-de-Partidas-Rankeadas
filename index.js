function getTotalVitorias(vitoria = 0, derrota = 0){
    let totalVitorias = vitoria - derrota;
    let nivelRanqueada;

    const patente = [
        {minVitoria: 0, maxVitoria: 10, nome: "Ferro"},
        {minVitoria: 11, maxVitoria: 20, nome: "Bronze"},
        {minVitoria: 21, maxVitoria: 50, nome: "Prata"},
        {minVitoria: 51, maxVitoria: 80, nome: "Ouro"},
        {minVitoria: 81, maxVitoria: 90, nome: "Diamante"},
        {minVitoria: 91, maxVitoria: 100, nome: "Lendário"},
        {minVitoria: 101, maxVitoria: Infinity, nome: "Imortal"}
    ]

    nivelRanqueada = "Sem patente"

    for (let contador = 0; contador < patente.length; contador++){
        if (totalVitorias >= patente[contador].minVitoria && totalVitorias <= patente[contador].maxVitoria){
            nivelRanqueada = patente[contador].nome;
            break;
        }
    }

    return "O Herói tem de saldo de "+ totalVitorias +" vitórias e está no nível de " + nivelRanqueada

}

const resultado = getTotalVitorias(0,1);
console.log(resultado)
