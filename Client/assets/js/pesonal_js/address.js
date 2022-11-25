
function openmd(){
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("BUTTON");
  var close = document.getElementsByClassName("close")[0];
  btn.onclick = function () {
  modal.style.display = "block";
  }
  close.onclick = function () {
  modal.style.display = "none";
  }
}
let lst = localStorage.getItem('lst_info');
  lst = JSON.parse(lst)
  let pos= document.getElementById("ADDRESS_3");
  pos.innerHTML = '';
  pos.innerHTML +=`${lst[0]} ${lst[1]}<br />${lst[3]}<br /> Tel: ${lst[2]}
  `
function saveinfo(){
  console.log("clicked");
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
  let fname = document.getElementById("INPUT_1").value;
  let lname = document.getElementById("INPUT_2").value;
  let phone = document.getElementById("INPUT_3").value;
  let adds = document.getElementById("INPUT_4").value;
  let lst_info = [fname,lname,phone,adds];
  localStorage.setItem("lst_info",JSON.stringify(lst_info));

  let lst = localStorage.getItem('lst_info');
  lst = JSON.parse(lst)
  let pos= document.getElementById("ADDRESS_3");
  pos.innerHTML = '';
  pos.innerHTML +=`${lst[0]} ${lst[1]}<br />${lst[3]}<br /> Tel: ${lst[2]}
  `
}


