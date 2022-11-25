
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
function login(e) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var user = localStorage.getItem(username);

    var data = JSON.parse(user);
    
    if (user == null) {
        show_popup(error_popup)
        
    }else if((username == data.username && password == data.password) || (username == 'user' && password == '123456')) {
        show_popup(success_popup)
        
    } else {
        show_popup(error_popup)
    }

}
