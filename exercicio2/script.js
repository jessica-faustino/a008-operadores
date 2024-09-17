 /*const a = prompt ('Digite o primeiro número: ');
console.log ('A = ',a);

 const b = prompt ('Digite o segundo número: ');
console.log ('B = ', b);

resultado1 = a > b;
console.log ('O primeiro numero é maior que segundo?', resultado1);

resultado2 = a === b;
console.log ('O primeiro numero é igual ao segundo?', resultado2);

resultado3 = a%b == 0;
console.log ('O primeiro numero é divisível pelo segundo?', resultado3);

resultado4 = b%a == 0;
console.log ('O segundo numero é divisível pelo primeiro?', resultado4); */

let a = prompt ("Digite o primeiro numero: ");
console.log ("A = ", a);

while (a != 0){

for (let cont = 1 ; cont <= 9 ; cont ++){
    
    a = a * cont;
    console.log (a);

    let a = prompt ('Digite um número: ');
    console.log ('A = ',a);   
}

}