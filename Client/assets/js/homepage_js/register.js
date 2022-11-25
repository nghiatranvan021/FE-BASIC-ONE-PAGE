var username = document.querySelector('#username')
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var c_password = document.querySelector('#c_password')
var form = document.querySelector('form')
var success_popup=document.getElementById("success");
var s_close=document.getElementById("s_button");


function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ''
}

function show_popup(popup) {
    popup.style.display="block";
    
}

function close_popup(popup) {
    popup.style.display="none";
}

s_close.onclick = close_popup(success_popup)



function checkEmailError(input) {
    const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    input.value = input.value.trim()

    let isEmailError = !regexEmail.test(input.value)    
    if (regexEmail.test(input.value)) {
        showSuccess(input)
    }else {
        showError(input, 'Email không hợp lệ')
        return isEmailError
    }
  
}

function checkMatchPasswordError(passwordInput, cfPasswordInput) {
    if(passwordInput.value != cfPasswordInput.value) {
        showError(cfPasswordInput, 'Mật khẩu không trùng khớp')
        return true
    }else {
        showSuccess(cfPasswordInput)
        return false
    }
    
}

function signup(e) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var user = {
        username : username,
        email : email,
        password : password,
    };

    var json = JSON.stringify(user);
    localStorage.setItem(username,json);
    show_popup(success_popup)

}

form.addEventListener('submit', function(e){
    e.preventDefault()
    // let isEmptyError = checkEmptyError([username, email, password, c_password])
    let isEmailError = checkEmailError(email)
    let isMatchError = checkMatchPasswordError(password, c_password)
    if (!isEmailError && !isMatchError) {
        signup(e)
    }
})