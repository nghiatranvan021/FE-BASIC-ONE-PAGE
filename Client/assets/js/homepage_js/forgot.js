var email = document.querySelector('#email')
var form = document.querySelector('form')

var success_popup=document.getElementById("success");
var s_close=document.getElementById("s_button");

function show_popup(popup) {
    popup.style.display="block";
    
}

s_close.onclick = close_popup(success_popup)

function close_popup(popup) {
    popup.style.display="none";
}

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

form.addEventListener('submit', function(e){
    e.preventDefault()
    let isEmailError = checkEmailError(email)
    if (!isEmailError) {
        show_popup(success_popup)
    }
})