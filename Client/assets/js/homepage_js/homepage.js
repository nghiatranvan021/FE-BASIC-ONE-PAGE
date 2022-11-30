var success_popup=document.getElementById("success");
var s_close=document.getElementById("s_button");

function show_popup() {
    success_popup.style.display="block";
}

function close_popup() {
    success_popup.style.display="none";
}


document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('radio1').checked = true;

var counter = 2;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 6000);
})

let i = 0
let products = [{
    id: 1,
    img: "../../Client/assets/images/product_image/shoes_1.png",
    name: "Nike Air Force 1 '07",
    price: 1500000,
    productType: "WOMEN",
    rate:'4.5',
    color :'white',
    des:'Basic design, easy to match with other clothes, comfortable'
},
{
    id: 2,
    img: "../../Client/assets/images/product_image/shoes_2.png",
    name: "Nike Air Force 1 '07 LV8",
    price: 2500000,
    productType: "MEN",
    rate:'5.0',
    color :'black-white',
    des:'Basic design for sport shoes, comfortable, soft material'
},
{
    id: 3,
    img: "../../Client/assets/images/product_image/shoes_3.png",
    name: "Nike Air Force 1 Mid By You",
    price: 2500000,
    productType: "MEN",
    rate:'3.2',
    color :'gray-orange',
    des:'Special design, remarkable'
},
{
    id: 4,
    img: "../../Client/assets/images/product_image/shoes_7.png",
    name: "Nike Zoom Fly 5",
    price: 4690000,
    productType: "MEN",
    rate :'4.0',
    color :'orange',
    des:'Best design for sport shoes, comfortable, soft material, flexible'
},

]

//push data to localstorage

localStorage.setItem("lst_products",JSON.stringify(products));


//convert to currency
function toCurrency(price){
    var s = "";
    s = price.toLocaleString('en-US', {
        style:'currency',
        currency: 'VND',
    })
    return s;
}
//Find product by lowercase name
function findProduct(){
    var str_search = document.getElementById('search').value;
    let src_lst = [];
    for (i = 0 ; i< products.length;i++){
        if (products[i].name.toLowerCase().search(str_search) != -1)
            src_lst.push(products[i]);
    }
    console.log(src_lst);
    if (src_lst.length === 0){
        alert("Sorry, we don't have these product now!");
    }else
        createProducts(src_lst);
}
//Show list product
function createProducts(products) {
    let elem = document.getElementById("all");
    elem.innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        const item = products[i];
        elem.innerHTML += `
    <div class="product">
    <div class="product-content">
        <div class = "product-image">
            <img src="${item.img}" alt="product image" onclick = "enter_image()">
        </div>
        <div class = "product-btn">
                <button type="button" class = "btn-add" onclick="addProductToOrder(${item.id})">ADD TO CART 
                    <span><i class="fas fa-plus"></i></span>
                </button>
                <button type="button" class="btn-buy" onclick="BuyNow(${item.id})">BUY NOW
                    <span><i class="fas fa-shopping-cart"></i></span>
                </button>
        </div>
    </div>
    <div class="product-info">
        <div class = "info-top">
            <div class = "type">${item.productType}</div>
            <div class="rating">
                <span>
                    ${item.rate}
                    <i class="fas fa-star"></i>
                </span>
            </div>
        </div>
        <div class="name">${item.name}</div>
        <div class="price">${toCurrency(item.price)} VND</div>
    </div>
    </div>`
    }
}

createProducts(products);
//show list products in many kinds
function createOtherProduct(type,element) {
    let type_product = []
    let tabs = document.getElementsByClassName('tabs-item');
    for (i = 0 ;i<tabs.length;i++){
        tabs[i].style.background = 'black';
        tabs[i].style.color = 'white';
    }
    element.style.background = 'white';
    element.style.color = 'black';
    switch(type){
        case 'men':
            for (let i = 0; i < products.length; i++) {
                const item = products[i];
                if (item.productType === "MEN") {
                    type_product.push(item)
                }
            }
            createProducts(type_product)
            break;
        case 'women':
            for (let i = 0; i < products.length; i++) {
                const item = products[i];
                if (item.productType === "WOMEN") {
                    type_product.push(item)
                }
            }
            createProducts(type_product)
            break;
        case 'unisex':
            for (let i = 0; i < products.length; i++) {
                const item = products[i];
                if (item.productType === "UNISEX") {
                    type_product.push(item)
                }
            }
            createProducts(type_product)
            break;
        case 'all':
            createProducts(products);
    }
}
//add to order list

function addProductToOrder(id) {
    //them vao gio hang
    show_popup();
}

function BuyNow(id){
    //mua ngay
    window.location.href = "cart.html"
}

function enter_image() {
    // hinh anh
    window.location.href = "product_page.html"
}