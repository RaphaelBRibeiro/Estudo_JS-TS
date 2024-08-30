// Crição de Variavel
// Não pode conter espaços os traços
// Não podemos começar o nome de uma Variavel com um numero
// Não utilize VAR, utilize Let

let nome = 'ROdovaldo'; //Declaração de Variavel
let Esposa;

Esposa = 'Vitoria'; //Iniciando um Variavel

console.log(nome, ' nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu', Esposa, '.');
console.log(nome, 'casou-se com maria em 2012.');
console.log('Maria teve 1 filho com,', nome ,'em 2015.');
console.log('O filho de', nome ,'se chama Eduardo.');


//Criação de Constantes
// Não podemos modificar o valor de uma constante
// Não podemos começar o nome de uma constantecom um numero
// Não utilize VAR, utilize Const
// Não pode conter espaços os traços

const Nome = 'Joao';
const PrimeiroNumero = 2;
const SegundoNumero = 8;
const conta = PrimeiroNumero * SegundoNumero;

console.log (conta)

console.log (typeof Nome);
console.log (typeof PrimeiroNumero, typeof SegundoNumero);
console.log (typeof PrimeiroNumero, typeof SegundoNumero);


// formas de enviar uma informação com um texto escrito 
// Na empresa Joao é funcionario e ROdovaldo é o chefe.

console.log (`Na empresa ${Nome} é funcionario e ${nome} é o chefe.`);

//uma VAR voce pode redeclarar uma variavel quantas vezes quiser.
var Empresa = 'Arno';
console.log (Empresa);
var Empresa = 'Mancer';
console.log (Empresa);

// tipos de dados primitivos 
/*
Constantes: é preciso ser definida assim que criada e não pode ser alterada após criada
Const Nome = 'Luiz'; String
Const Num = 10; Number
Const Num2 = 10.5; Number
const aprovado = true; Boolean = true ou false (lógico)

Variaves - Let: ela pode ser criada e depois definida, pode ser alterada após definida. se for criada mas n definida recebe o valor de Undefind (Indefinido)
let Aluno = ; Undefined -> não aponta pra local nenhum na memoria
let sobrenome = null; null -> não aponta pra local nenhum na memoria

*/ 