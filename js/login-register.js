var btn_account = document.getElementById('btn-account');
var login = document.getElementById('login');
var register = document.getElementById('register');

function Login(){
    login.style.left="50px";
    register.style.left="450px";
    btn_account.style.left="0";
}

function Register(){
    login.style.left="-450px";
    register.style.left="50px";
    btn_account.style.left="110px";
}
