//List product here
let i = 0
let products = [{
    id: 1,
    img: "/Web1/Client/assets/images/product_image/shoes_1.png",
    name: "Nike Air Force 1 '07",
    price: 1500000,
    productType: "WOMEN",
    rate:'4.5',
    color :'white',
    des:'Basic design, easy to match with other clothes, comfortable'
},
{
    id: 2,
    img: "/Web1/Client/assets/images/product_image/shoes_2.png",
    name: "Nike Air Force 1 '07 LV8",
    price: 2500000,
    productType: "MEN",
    rate:'5.0',
    color :'black-white',
    des:'Basic design for sport shoes, comfortable, soft material'
},
{
    id: 3,
    img: "/Web1/Client/assets/images/product_image/shoes_3.png",
    name: "Nike Air Force 1 Mid By You",
    price: 2500000,
    productType: "MEN",
    rate:'3.2',
    color :'gray-orange',
    des:'Special design, remarkable'
},
{
    id: 4,
    img: "/Web1/Client/assets/images/product_image/shoes_7.png",
    name: "Nike Zoom Fly 5",
    price: 4690000,
    productType: "MEN",
    rate :'4.0',
    color :'orange',
    des:'Best design for sport shoes, comfortable, soft material, flexible'
},
{
    id: 5,
    img: "/Web1/Client/assets/images/product_image/shoes_11.png",
    name: "Nike Offcourt",
    price: 1000000,
    productType: "MEN",
    rate :'3.0',
    color :'black',
    des:'A basic design off Nike slipper, best seller of the year!'
},
{
    id: 6,
    img: "/Web1/Client/assets/images/product_image/shoes_12.png",
    name: "Nike Metcon 8 MF",
    price: 4000000,
    productType: "MEN",
    rate :'2.5',
    color :'red-black',
    des:'New design off training shoes, released in 2020'
},
{
    id: 7,
    img: "/Web1/Client/assets/images/product_image/shoes_13.png",
    name: "Nike Air Force 1 '07 Next Nature",
    price: 3000000,
    productType: "WOMEN",
    rate :'3.0',
    color :'white-blue',
    des:'Simple design for women shoes, easy to match with clothes'
}
,
{
    id: 8,
    img: "/Web1/Client/assets/images/product_image/shoes_14.png",
    name: "Adidas Forum Low HQ1487",
    price: 2500000,
    productType: "WOMEN",
    rate :'4.0',
    color :'white-creamy',
    des:'Adorable shoes, popular with student!'
},
{
    id: 9,
    img: "/Web1/Client/assets/images/product_image/shoes_15.png",
    name: "Puma Skye Clean",
    price: 1600000,
    productType: "WOMEN",
    rate :'3.0',
    color :'white-silver',
    des:'Adorable shoes with simple design, popular with student!'
},
{
    id: 10,
    img: "/Web1/Client/assets/images/product_image/shoes_16.png",
    name: "Nike Air Jordan 1 Mid",
    price: 6500000,
    productType: "WOMEN",
    rate :'4.5',
    color :'white-black',
    des:'Excellent Nike sneaker design, made with best material, cool fresh'
},
{
    id: 11,
    img: "/Web1/Client/assets/images/product_image/shoes_17.png",
    name: "Adidas Team Court",
    price: 650000,
    productType: "UNISEX",
    rate :'3.0',
    color :'white-blue-red',
    des:'Simple design, low price for student'
},
{
    id: 12,
    img: "/Web1/Client/assets/images/product_image/shoes_18.png",
    name: "Nike Air Force 1 Shadow",
    price: 3650000,
    productType: "UNISEX",
    rate :'4.5',
    color :'white-orange',
    des:'New design of Nike, release in 2021, made with best material'
},
{
    id: 13,
    img: "/Web1/Client/assets/images/product_image/shoes_19.png",
    name: "New York Yankees Bigball Classic",
    price: 2650000,
    productType: "UNISEX",
    rate :'4.0',
    color :'white',
    des:'Basic sneaker design of New York Yankees!'
},
{
    id: 14,
    img: "/Web1/Client/assets/images/product_image/shoes_20.png",
    name: "Adidas Ultraboost 22",
    price: 3950000,
    productType: "UNISEX",
    rate :'5.0',
    color :'black',
    des:'Premium product from Adidas, best for playing sport!'
},
{
    id: 15,
    img: "/Web1/Client/assets/images/product_image/shoes_21.png",
    name: "Adidas 4D FWD PULSE GX2985",
    price: 2200000,
    productType: "WOMEN",
    rate :'4.5',
    color :'pink',
    des:'A girly sneaker design, flexible for jogging'
},
{
    id: 16,
    img: "/Web1/Client/assets/images/product_image/shoes_17.png",
    name: "Adidas Team Court",
    price: 650000,
    productType: "UNISEX",
    rate :'3.0',
    color :'white-blue-red',
    des:'Simple design, low price for student'
},
{
    id: 17,
    img: "/Web1/Client/assets/images/product_image/shoes_22.png",
    name: "Puma Skye Clean Black",
    price: 1990000,
    productType: "WOMEN",
    rate :'4.0',
    color :'white-black',
    des:'Simple design of Puma'
},
{
    id: 18,
    img: "/Web1/Client/assets/images/product_image/shoes_23.png",
    name: "Adidas NMD R1 J Clear",
    price: 2100000,
    productType: "WOMEN",
    rate :'4.0',
    color :'pink',
    des:'Adorable shoes made from Adidas'
},
{
    id: 19,
    img: "/Web1/Client/assets/images/product_image/shoes_24.png",
    name: "Charles & Keith Tweed Slip-on",
    price: 500000,
    productType: "WOMEN",
    rate :'4.0',
    color :'black-white',
    des:'The design is for easy to put on'
},
{
    id: 20,
    img: "/Web1/Client/assets/images/product_image/shoes_25.png",
    name: "Lacoste Gripshot Leather 222",
    price: 2400000,
    productType: "MEN",
    rate :'4.0',
    color :'Brown',
    des:'Mature design of Lacoste'
},
{
    id: 21,
    img: "/Web1/Client/assets/images/product_image/shoes_26.png",
    name: "Adidas ULTRA4D Hurricane",
    price: 4000000,
    productType: "MEN",
    rate :'5.0',
    color :'Multi-color',
    des:'Complex design of Adidas sneaker released in 2022'
},
{
    id: 22,
    img: "/Web1/Client/assets/images/product_image/shoes_27.png",
    name: "Nike Air Max Genome White",
    price: 5500000,
    productType: "MEN",
    rate :'4.5',
    color :'White',
    des:'Original sneaker of Nike'
},
{
    id: 23,
    img: "/Web1/Client/assets/images/product_image/shoes_28.png",
    name: "Nike Renew Run 2",
    price: 1800000,
    productType: "MEN",
    rate :'4.0',
    color :'black',
    des:'Best sneaker for jogging '
},
{
    id: 24,
    img: "/Web1/Client/assets/images/product_image/shoes_29.png",
    name: "Adidas Duramo SL",
    price: 1480000,
    productType: "UNISEX",
    rate :'4.0',
    color :'white',
    des:'Simple sneaker of Adidas'
},
{
    id: 25,
    img: "/Web1/Client/assets/images/product_image/shoes_30.png",
    name: "Nike Air Force 1 Unlock By You",
    price: 3950000,
    productType: "UNISEX",
    rate :'5.0',
    color :'orange-white-purple',
    des:'Unisex Nike Air Force 1 sneaker released in 2020'
},
{
    id: 26,
    img: "/Web1/Client/assets/images/product_image/shoes_31.png",
    name: "Nike Jordan 1 Low Bred Toe",
    price: 4500000,
    productType: "UNISEX",
    rate :'5.0',
    color :'white-red-black',
    des:'Premium Nike Jordan 1 sneaker, made from best material, comfotable'
},
{
    id: 27,
    img: "/Web1/Client/assets/images/product_image/shoes_32.png",
    name: "Vans Era",
    price: 1550000,
    productType: "UNISEX",
    rate :'4.5',
    color :'black-white',
    des:'Simple Vans shoes'
},]

//push data to localstorage

localStorage.setItem("lst_products",JSON.stringify(products));

//show notice
function showNotice(s){
    var pos = document.getElementById("notice");
    pos.style.display = 'block';
    pos.innerHTML = "";
    pos.innerHTML += `
    <div class="notice-title">NOTIFICATION <i class = "fa fa-bell"></i></div>
    <div class ="notice-content">
        <p>${s}</p>
    </div>`;
    window.onclick = function(event){
        if (event.target == pos){
            pos.style.display = 'none';
        }
    }
    
}
//convert to currency
function toCurrency(price){
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price)
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
    window.location = '#';
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
            <img src="${item.img}" alt="product image" onclick = "showDetail(${item.id})">
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
        <div class="price">${toCurrency(item.price)}</div>
    </div>
    </div>`
    }
}

createProducts(products);
//show list products in many kinds
function createOtherProduct(type,element) {
    window.location = "#";
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
let order = [];
let bought = [];
function addProductToOrder(id) {
    id = parseInt(id);
    let items = products.filter((value) => value.id === id)
    order.push(items[0]);
    var symbol = "<i class = 'fa fa-check'></i>";
    showNotice("Added to cart " + symbol);
    localStorage.setItem("orders",JSON.stringify(order))
}

function BuyNow(id){
    id = parseInt(id);
    let item = products.filter((value) => value.id === id)

    order.push(item[0]);
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
                <span>${toCurrency(buy_item.price)}</span>
            </div>
            
        </div>`;
    var pay = document.getElementById('payment');
    pay.innerHTML = "";
    pay.innerHTML += `
    <div class="total">
        <span><hr></span>
        <span>Total: ${toCurrency(buy_item.price)}</span>
    </div>
    <div class="pay">
        <span><hr></span>
        <button onclick="buyInCart()">BUY</button>
    </div>`;
    
}


function buyInCart(){
    var modal = document.getElementById('cart-info');
    modal.style.display = 'none';
    
    if (order.length != 0){
        showNotice("Your transaction was successful! &#10003;");
        bought = bought.concat(order);
        localStorage.setItem("bought_products",JSON.stringify(bought));
        order = [];
        localStorage.removeItem("orders");
        
    }
    else alert("There is nothing in cart!");
    
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
                <span>${toCurrency(item.price)}</span>
            </div>
            <div class = "delete">
                <button type="button" onclick = "deleteProduct(${item.id})">&times;</button>
            </div>
        </div>`;
        
    }
    //Sum the products
    sum = 0;
    for (var i = 0; i<order.length;i++){
        const item = order[i];
        sum += item.price;
    }
    var pay = document.getElementById('payment');
    pay.innerHTML = "";
    pay.innerHTML += `
    <div class="total">
        <span><hr></span>
        <span>Total: ${toCurrency(sum)}</span>
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
    localStorage.setItem("orders",JSON.stringify(order));
    openCart();
}

function getRate(rate){
    var rate0 = rate;
    rate = parseInt(rate);
    var s = "";
    for (var i = 0;i<rate;i++)
        s += "<span ><i class='fa fa-star'></i></span>";
    if (Math.abs(rate0 - rate) > 0){
        s +="<span ><i class='fa-solid fa-star-half'></i></span>"
    }
    return s;
}
function showDetail(id){
    id = parseInt(id);
    let item = products.filter((value) => value.id === id)

    var selected = item[0];
    var s = getRate(selected.rate);
    var detail = document.getElementById('detail-info');
    detail.style.display = 'block';
    detail.innerHTML = "";
    detail.innerHTML+=`<div id="detail-content">
    <div id="close-detail" onclick = "closeDetail()">&times;</div>
    <div class = "detail-img">
        <img src="${selected.img}" alt="">
    </div>
    <div class = "detail-text">
        <div class="detail-name">
            ${selected.name}
            <hr>
        </div>
        <div class="detail-rate">
        ${selected.rate}
        ${s}
        </div>
        <div class = "detail-price">
            ${toCurrency(selected.price)}
        </div>
        <div class = "detail-title">
            About this product
            <div class = "description">
                <p>${selected.des}</p>
            </div>
        </div>
        <div class="more-detail">
            <span>Color: ${selected.color}</span>
            <span>Shipping area: Ho Chi Minh city</span>
            <span>Shipping fee: free</span>
        </div>
    </div>
</div>`
    
}
function closeDetail(){
    
    var detail = document.getElementById('detail-info');
    detail.style.display = 'none';

}


