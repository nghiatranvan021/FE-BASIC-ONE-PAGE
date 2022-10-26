//List product here
let i = 0
let products = [{
    id: 1,
    img: "/Client/assets/images/product_image/shoes_1.png",
    name: "Nike Air Force 1 '07",
    price: 1500000,
    productType: "WOMEN",
    rate:'4.5'
},
{
    id: 2,
    img: "/Client/assets/images/product_image/shoes_2.png",
    name: "Nike Air Force 1 '07 LV8",
    price: 2500000,
    productType: "MEN",
    rate:'5.0'
},
{
    id: 3,
    img: "/Client/assets/images/product_image/shoes_3.png",
    name: "Nike Air Force 1 Mid By You",
    price: 2500000,
    productType: "MEN",
    rate:'3.2'
},
{
    id: 4,
    img: "/Client/assets/images/product_image/shoes_7.png",
    name: "lmao Zoom Fly 5",
    price: 4690000,
    productType: "MEN",
    rate :'4.0'
},]

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
            <img src="${item.img}" alt="product image">
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
        <div class="price">${item.price} VND</div>
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
        case 'all':
            createProducts(products);
    }
}
//add to order list
let order = []
function addProductToOrder(id) {
    id = parseInt(id);
    let items = products.filter((value) => value.id === id)

    order.push(items[0]);
    console.log(order);
    alert("Added to cart!");
}
function buyInCart(){
    var modal = document.getElementById('cart-info');
    modal.style.display = 'none';
    if (order.length != 0)
        alert("Your transation was successful!");
    else alert("There is nothing in cart!")
}
function BuyNow(id){
    id = parseInt(id);
    let item = products.filter((value) => value.id === id);

    var modal = document.getElementById('cart-info');
    var span = document.getElementsByClassName('close')[0];

    var buy_item = item[0];
    modal.style.display = 'block';

    span.onclick = function(){
        modal.style.display = 'none';
    }
    window.onclick = function(event){
        if (event.target == modal){
            modal.style.display = 'none';
        }
    }
    let elems = document.getElementById('cart_products');
    elems.innerHTML = "";
    elems.innerHTML +=`
        <div class="single-product">
            <div class="pr-img">
                <img src="${buy_item.img}" alt="">
            </div>
            <div class="pr-name">
                <span >${buy_item.name}</span>
            </div>
            <div class = "pr-amount">
                <span>SIZE</span>
                <input type="number" class ="amount" min = '30' max="50" value="40">
            </div>
            <div class = "pr-price">
                <span>${buy_item.price} VND</span>
            </div>
            
        </div>`;
    var pay = document.getElementById('payment');
    pay.innerHTML = "";
    pay.innerHTML += `
    <div class="total">
        <span><hr></span>
        <span>Total: ${buy_item.price} VND</span>
    </div>
    <div class="pay">
        <span><hr></span>
        <button onclick="buyInCart()">BUY</button>
    </div>`;
}

// cart button
function openCart(){
    var modal = document.getElementById('cart-info');
    var span = document.getElementsByClassName('close')[0];

    modal.style.display = 'block';
    span.onclick = function(){
        modal.style.display = 'none';
    }
    window.onclick = function(event){
        if (event.target == modal){
            modal.style.display = 'none';
        }
    }
    let elems = document.getElementById('cart_products');

    elems.innerHTML = "";
    for (let i = 0;i < order.length;i++){
        const item = order[i];
        elems.innerHTML +=`
        <div class="single-product">
            <div class="pr-img">
                <img src="${item.img}" alt="">
            </div>
            <div class="pr-name">
                <span >${item.name}</span>
            </div>
            <div class = "pr-amount">
                <span>SIZE</span>
                <input type="number" class ="amount" min = '30' max="50" value="40">
            </div>
            <div class = "pr-price">
                <span>${item.price} VND</span>
            </div>
            <div class = "delete">
                <button type="button" onclick = "deleteProduct(${item.id})">&times;</button>
            </div>
        </div>`;
        
    }
    //Sum the products
    var sum = 0;
    for (var i = 0; i<order.length;i++){
        const item = order[i];
        sum += item.price;
    }
    var pay = document.getElementById('payment');
    pay.innerHTML = "";
    pay.innerHTML += `
    <div class="total">
        <span><hr></span>
        <span>Total: ${sum} VND</span>
    </div>
    <div class="pay">
        <span><hr></span>
        <button onclick = "buyInCart()">BUY</button>
    </div>`;
}

function deleteProduct(id){
    var modal = document.getElementById('cart-info');
    modal.style.display = 'none';

    id = parseInt(id);
    let items = products.filter((value) => value.id === id)

    var ind = order.indexOf(items[0]);
    order.splice(ind,1);
    console.log(order);
    openCart();
}


