let nome = "João"
let nivel = ""
let i = "22.000"

while (nivel === "") {
    if (i <= 1.000) {nivel = "ferro"}
    else if (i <= 2.000) {nivel = "bronze"}
    else if (i <= 5.000) {nivel = "prata"}
    else if (i <= 7.000) {nivel = "ouro"}
    else if (i <= 8.000) {nivel = "platina"}
    else if (i <= 9.000) {nivel = "ascendente"}
    else if (i <= 10.000) {nivel = "imortal"}
    else if (i >= 10.001) {nivel = "imortal"}
    i--
}

console.log ("O Herói de nome " + nome, "está no nivel de " + nivel)