var cardDrop = document.getElementById('card-dropdown');
var activeDropdown;
cardDrop.addEventListener('click',function(){
  var node;
  for (var i = 0; i < this.childNodes.length-1; i++)
    node = this.childNodes[i];
    if (node.className === 'dropdown-select') {
      node.classList.add('visible');
       activeDropdown = node; 
    };
})

window.onclick = function(e) {
  console.log(e.target.tagName)
  console.log('dropdown');
  console.log(activeDropdown)
  if (e.target.tagName === 'LI' && activeDropdown){
    if (e.target.innerHTML === 'Master Card') {
      document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/2vbqk5lcpi7hjoc/MasterCard_Logo.svg.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'Master Card';
    }
    else if (e.target.innerHTML === 'American Express') {
         document.getElementById('credit-card-image').src = 'https://dl.dropboxusercontent.com/s/f5hyn6u05ktql8d/amex-icon-6902.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'American Express';      
    }
    else if (e.target.innerHTML === 'Visa') {
    }
  }
}
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
  console.log(orders);
  var pos = document.getElementById("orders");
  pos.innerHTML = "";
  for (var i = 0;i<orders.length;i++){
    const item = orders[i];
    sum += item.price;
    pos.innerHTML += `
    <table class='order-table'>
            <tbody>
              <tr>
                <td><img src='${item.img}' class='full-width'>
                </td>
                <td>
                  <br> <span class='thin'>${item.productType}</span>
                  <br> ${item.name}<br> 
                </td>
  
              </tr>
              <tr>
                <td>
                  <div class='price'>${toCurrency(item.price)}</div>
                </td>
              </tr>
            </tbody>
  
          </table>
          <div class='line'></div>`;
  }
  
}
showProducts();
function showTotal(){
  var pos = document.getElementById("total");
  pos.innerHTML = "";
  pos.innerHTML += `<span style='float:left;'>
  <div class='thin dense'>Delivery</div>
  TOTAL
</span>
<span style='float:right; text-align:right;'>
  <div class='thin dense'>30 000 VND</div>
  ${toCurrency(sum + 30000)}
</span>`;
}
showTotal();