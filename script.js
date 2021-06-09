//1. Panaudoti Javascript "use-strict" režimą.
"use strict"
//2. Apsirašyti 4 kintamuosius: skaicius1, skaicius2, skaicius3, skaicius4.

let skaicius1, skaicius2, skaicius3, skaicius4;

skaicius1 = 2;
skaicius2 = 4;
skaicius3 = 6;
skaicius4 = 12;

//3. Į konsolę išvesti visus 4 skaičius, jų visų sumą ir sandaugą.
console.log(skaicius1, skaicius2, skaicius3, skaicius4);
let suma = skaicius1 + skaicius2 + skaicius3 + skaicius4;
let daugyba = skaicius1 * skaicius2 * skaicius3 * skaicius4;

console.log(suma);
console.log(daugyba);

//3. Sukeisti skaicius1 ir skaicius2 reikšmes vietomis, pasinaudojant laikinuoju kintamuoju.

let temp = skaicius1;
skaicius1 = skaicius2;
skaicius2 = temp;

console.log(skaicius1, skaicius2);

//4. Sukeisti skaicius3 ir skaicius4 reikšmes vietomis be laikinojo kintamojo.

skaicius3 += skaicius4; 
skaicius4 = skaicius3 - skaicius4;
skaicius3 -= skaicius4;



console.log(skaicius3, skaicius4);

//5. Į alert išvesti sukeitimo rezultatus.

alert( 'skaicius1 = ' + skaicius1 + '; skaicius2 = ' + skaicius2 + '; skaicius3 = ' + skaicius3 + '; skaicius4 =' + skaicius4);

//6. Susikurti kintamąjį maxSkaicius, jam priskirti maksimalią įmanomą skaitinę reikšmę (infinity netinka) ir išvesti į konsolę.

let maxskaicius;

maxskaicius = Number.MAX_VALUE;

console.log(maxskaicius);















