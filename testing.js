
// // ---------Функция запрещающая скроллить--------- //

// window.onscroll = function () {
//     alertcool();
// };
  
// function alertcool() {
//     alert("Не крути");
//   }

// // ---------Функция запрещающая скроллить--------- //



// // ---------Функция prompt, запрашивающая имя и запрещающая заходить не Геору--------- //

// let name = prompt("Ты кто?")
// if ((name == "Геор") + (name == null)) {
//     alert("Добро пожаловать!")
// }
// else {
//     alert("Выйди!")
// }

// // ---------Функция prompt, запрашивающая имя и запрещающая заходить не Геору--------- //


// // ---------Функция confirm запрещающая заходить не Геору в одну строку--------- //
// confirm("Ты Геор?") ? alert("Добро пожаловать!") : alert("Выйди!")
// // ---------Функция confirm запрещающая заходить не Геору в одну строку--------- //


// // ---------Функция switch для сравнения вводимого числа--------- //

// let age = prompt("Введи значение?")
// switch(true) {
//     case age == 12:
//         alert("Работает")
//          break;
//     default:
//         alert('не работает')
// }

// // ---------Функция switch для сравнения вводимого числа--------- //



// function randomNumber() {
//     let number = Math.floor(Math.random()*100);
//     for(let count=1; count<=10; count++) {
//         let result = +prompt(`У вас попыток №${count}, Введите число: `)
//         if (result == number) {
//            return alert(`Вы угадали число ${number} с ${count} попытки! Поздравляю!`)
//             break;
//         } else if (result>number) {
//             alert(`Ваше число ${result} больше. У вас еще ${count} попыток!`)
//         }   else if (result<number) {
//             alert(`Ваше число ${result} меньше. У вас еще ${count} попыток!`)
//         }
//     }
//     return alert(`Вы не угадали число. Число было: ${number}`)
    
// }

// randomNumber()

// let block = document.querySelector('.block');
// let btn = document.querySelector('.btn');
// let btn1 = document.querySelector('.btn1');

// function onClickButton() {
//     block.classList.toggle('colorAdd');
//     btn1.classList.toggle('btn1');    
// }


// function chekForm(el) {
//     var name = el.name.value  //document.getElementById('name').value;
//     var name2 = document.getElementsByName('name');
//     var pass = el.pass.value
//     var repass = el.repass.value
//     var state = el.state.value

// const profile = {
    
// }
    
//     if(name == "" || pass == "" || repass != pass || repass == "" || state == "" ) {
//         alert('Поле незаполнено')
//     }
//     else if ((name.length <= 3) || (name.length > 50)) {
//         name2.classList.add('formsFail');

//     }
//     else {
//         profile.nameProfile = name;
//         profile.passProfile = pass;
//         profile.stateProfile = state; 
//         console.log(profile)
//     }

//     // console.log(`${name} - ${pass} - ${state}`);
//     return false

// }

let form = document.getElementById('login-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    

    let name = document.getElementById('name');
    let password = document.getElementById('pass');
    let rePassword = document.getElementById('repassword');
    
    if(name.value == "") {
        name.classList.add('formsFail')
        console.log('hello')
    } else {
        name.classList.remove('formsFail')
    }

    if (password.value == '') {
        password.classList.add('formsFail')
        rePassword.classList.add('formsFail')
    } else if (password.value !== rePassword.value) {
        password.classList.add('formsFail')
        rePassword.classList.add('formsFail')
    } else {
        password.classList.remove('formsFail')
        rePassword.classList.remove('formsFail')
    }
})
