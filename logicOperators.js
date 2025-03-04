
//Задача 1
/*
let age = prompt("Let us know what is your age, pls", "18");
if (age >= 14 && age <= 90){
    alert("That's good answer");
} else {
    alert("Nice to see you");
}
    */
   //Задача 2
 /*  let age = prompt("Let us know what is your age, pls", "18");
   
if ( age <= 14 || age >= 90) {
    alert('Либо дед либо дитё')
} else {
    alert('Molodoy chelovek')
}
if (!age >=14 || !age <=90) {
    alert("Zdorou")
} else{
    alert("Nice")
}*/

// Задача 3
let login = prompt("Введите Логин", 'Админ');
    if ( login == null || login === '') {
        alert('Отменено')
    }else if (login === "Админ") {
        password = prompt("Введите пароль", '');
        
        if (password === "Я главный"){
            alert('Здравствуйте!')
        } else if (password == null || password === ''){
            alert('Отменено')
        } else {
            alert('Неверный пароль')
        }
    } else {
        alert('Я вас не знаю')
    }
