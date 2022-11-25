
function toCurrency(price){
  return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
  }).format(price)
}
var sum =0;
function showProducts(){
  let orders = localStorage.getItem("bought_products");
  orders = JSON.parse(orders);

  let size = localStorage.getItem("sizes");
  size = JSON.parse(size);
  var pos = document.getElementById("pr-layout");
  pos.innerHTML = '';
  for (var i = 0;i<orders.length;i++){
    const item = orders[i];
    sum += item.price;
    pos.innerHTML += `
    <div class = "product">
          <div class = "pro-img">
            <img src="${item.img}" alt="">
          </div>
          <div class="info">
          <div class = "pro-name">${item.name}</div>
          <div class = "pro-size">Size: ${size[i]}</div>
          <div class = "pro-price">${toCurrency(item.price)}</div>
          </div>
          
        </div>`;
  }
  
}
showProducts();
function showTotal(){
  let pos = document.getElementById("total");
  pos.innerHTML = "";
  pos.innerHTML += `      <div class= "t-title">SHIPPING FEE: 0 đ</div>
  <div class="t-price">TOTAL: ${toCurrency(sum)}</div>

`
}
showTotal();

function buy(){
  let lst = localStorage.getItem("bought_products");
  lst = JSON.parse(lst);
  if(lst.length == 0)
    alert("Nothing to purchase!");
  else{
    let pos = document.getElementById("thanks-model");
    pos.style.display = "block";
    let write = document.getElementById("tks-p");
    console.log(write);
    write.innerHTML += `<p>Your orders have been <b>confirmed</b>, the package will be dilivered to your address in personal information, if address hasn't filled, we only confirm when address is filled</p>
    <br><p><b><i>Thank you for your support!</i></b></p>`
    let hide = document.getElementById("pr-layout");
    hide.style.display = "none";
    hide = document.getElementById("total");
    hide.style.display = "none";
  }
}
function closemd(){
  let pos = document.getElementById("pur-modal");
  pos.style.display = "none";
  console.log("clicked")
}
function isNumeric(num){
  return !isNaN(num);
}
// function checkPurchase(){
//   let addVar = document.getElementById("varadd").value;
//   console.log(addVar);
//   if (addVar == ""){
//     alert("Address can not be empty");
//     return false;
//   }
  
//   let addPhone = document.getElementById("varphone").value;
//   if (!isNumeric(parseInt(addPhone)) && addPhone.length != 10){
//     alert("Wrong phone number input!")
//     return false;
//   }
//   return true;
// }

function closetmd(){
  let pos = document.getElementById("thanks-model");
  pos.style.display = "none";
  console.log("clicked")
}