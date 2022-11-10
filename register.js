let form = document.getElementById('login-forms');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let login = document.getElementById('login');
    let password = document.getElementById('password');
    let rePassword = document.getElementById('repassword');
    
    if(login.value == "") {
        login.classList.add('loginFormsFail')
    } else {
        login.classList.remove('loginFormsFail')
    }

    if (password.value == '') {
        password.classList.add('loginFormsFail')
        rePassword.classList.add('loginFormsFail')
    } else if (password.value !== rePassword.value) {
        password.classList.add('loginFormsFail')
        rePassword.classList.add('loginFormsFail')
    } else {
        password.classList.remove('loginFormsFail')
        rePassword.classList.remove('loginFormsFail')
    }
})
