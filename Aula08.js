// Crie um seguinte Script que infome a segunte frase com as suas devidas variaveis:
// Luiz Otávio tem 30 anos, pesa 84 kg.
//Tem 1.80 metro de altura. O seu IMC é de 25.9259259. 
//Luiz nasceu em 1980.

const nome =  'Raphael';
const sobrenome = 'Braga Ribeiro';
const idade = 23;
const peso = 84;
const alturaEmM = 1.81;
let imc 
let AnoNascimento

imc = peso / (alturaEmM * alturaEmM); 
AnoNascimento = 2024 - idade ;


console.log (`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}Kg.`);
console.log (`Tem ${alturaEmM} metros de altura. O seu IMC é de ${imc}.`);
console.log (`${nome}, nasceu em, ${AnoNascimento}.`);

