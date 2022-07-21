/*
Escreva as operações lógicas abaixo em formato de código. Imprima no console se o valor da operação é verdadeira ou falsa:

a) 5 é maior que 20 e também é menor que 2;

b) 5 é igual a 5 ou é igual a “5”;

c) negação de vinte é maior que cinquenta

d) negação de (vinte é maior que cinquenta)
*/

resultado1 = 5>20 && 5<2;
console.log ('5 é maior que 20 e também é menor que 2? ', resultado1);

resultado2 = 5 === 5 || 5 === "5";
console.log ('5 é igual a 5 ou é igual a “5”? ', resultado2);

resultado3 = !20 > 50;
console.log ('negação de vinte é maior que cinquenta? ', resultado3);

resultado4 = !(20>50);
console.log ('negação de (vinte é maior que cinquenta)? ', resultado4);