let lst = localStorage.getItem("bought_products");
lst = JSON.parse(lst);
function toCurrency(price){
  return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
  }).format(price)
}
function show(){

  let orders = localStorage.getItem("bought_products");
  orders = JSON.parse(orders);
  console.log(orders)
  let size = localStorage.getItem("sizes");
  size = JSON.parse(size);
  let pos = document.getElementById("layout");
  pos.innerHTML ='';
  for(var i = 0;i<lst.length;i++){
    const item = orders[i];
    pos.innerHTML += `<div class = "product">
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
show ();
// function deleteProduct(id){

//   id = parseInt(id);
//   let items = products.filter((value) => value.id === id)

//   var ind = order.indexOf(items[0]);
//   order.splice(ind,1);
//   localStorage.setItem("orders",JSON.stringify(order));
// }
