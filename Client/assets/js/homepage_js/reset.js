var username = document.querySelector('#username')
var email = document.querySelector('#old_password')
var password = document.querySelector('#password')
var c_password = document.querySelector('#c_password')
var form = document.querySelector('form')


var success_popup=document.getElementById("success");
var error_popup =document.getElementById("errors");
var s_close=document.getElementById("s_button");
var e_close=document.getElementById("e_button");

function show_popup(popup) {
    popup.style.display="block";
    
}

function close_popup(popup) {
    popup.style.display="none";
}

e_close.onclick = close_popup(error_popup)
s_close.onclick = close_popup(success_popup)

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

function checkMatchPasswordError(passwordInput, cfPasswordInput) {
    if(passwordInput.value != cfPasswordInput.value) {
        showError(cfPasswordInput, 'Mật khẩu không trùng khớp')
        return true
    }else {
        showSuccess(cfPasswordInput)
        return false
    }
    
}

function reset(e) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var old_password = document.getElementById('old_password').value;
    var password = document.getElementById('password').value;

    var user = localStorage.getItem(username);
    
    var data = JSON.parse(user);

    if(user != null) {
        user = {
            username: username,
            email: data.email,
            password: password,
        };

        var json = JSON.stringify(user);
        localStorage.setItem(username,json);
        
        

        if(username == data.username && old_password == data.password) {
            show_popup(success_popup)
        } else {
            show_popup(error_popup)
        }
    } else {
        show_popup(error_popup)
    }
    
    

}

form.addEventListener('submit', function(e){
    e.preventDefault()
    // let isEmptyError = checkEmptyError([username, email, password, c_password])
    let isMatchError = checkMatchPasswordError(password, c_password)
    if (!isMatchError) {
        reset(e)
    }
})