/*for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
  }
    */
/*
let i = 0;
while (i <3) {
    alert('number ${i}');
    i++ ;
}
    */
  /*
"use strict"
let number;
 do{
  let number = prompt ("Введите число большее 100", 1);
   } while ( number <= 100 && number );
   */

  "use"
  
  let n = prompt ("Введи число", 10);

outerL:
for (let i=2; i <=n; i++) {
  for (let j=2; j < i; j++ ) {
    if (i % j == 0) continue outerL ;
  }
  alert(i);
}


// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//   for (let j = 2; j < i; j++) { // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }

//   alert( i ); // простое число
// }


   
 