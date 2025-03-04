/*let a = prompt("Первое число", 1);
let b = prompt('Второе число', 2);
alert(+a + +b); */

// Задача на if 
/* Задача 1
'use strict'
let nameJS = prompt('Какое официальное название JavaScript?', 'What???');
if (nameJS == "ECMAscript") {
    alert("Верно!");
} else {
    alert('Не знаете? "ECMAScript!" ');
}
 */

// Задача 2
/*
let ui = prompt("Введи число", "Ne");
let iu = Number(ui);
if (iu === false) {
    alert('Give me a number!')
    
} else if (iu > 0) {
    alert(1);
} else if (iu < 0){
    alert(-1);
} else if (iu == 0) {
    alert('0');
}
    */

//Задача 4
/*
let a = prompt("input a");
let b = prompt ('input b');
let c = +a + +b;
let result = (c < 4)? "Мало" :
 'Много' ;
 alert(result);
  */


 let login = prompt('Input your Login', 'Wall-e');
 let message = (login == 'Сотрудник')? 'Привет' :
    (login == 'Директор')? 'Здравствуйте' : 
    (login == '')? 'Нет логина' :
     '';
     alert(message);