
function render() {
    const tbodyProduct = document.querySelector('#account_tbody');
    const products = JSON.parse(localStorage.getItem('products'));

    if (products.length == 0) {
        const result = ` <tr>
                <td colspan="7">
                    <p class="account_notfound">Product not found.</p>
                </td>
            </tr>`;
        tbodyProduct.innerHTML = result
    } else {
        const result = products.map((item, index) => {

            return ` <tr>
            <th>${++index}</th>
            <td>${item.name}</td>
            <td><a target="_blank" href="${item.image}"><img
                        class="product_img" src="${item.image}"
                        alt="image"></a></td>
            <td>${item.quantity}</td>
            <td>${item.price}</td>
            <td>${item.size}</td>
            <td>
                <button onclick="handleCallEdit(${item.id})" class="product_action-btn bg-edit"><i class="fa-solid fa-pen-to-square"></i></button>
                <button onclick="handleDel(${item.id})" class="product_action-btn bg-delete"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>`;
        });
        tbodyProduct.innerHTML = result.join('')
    }





}
function handleCallEdit(id) {
    localStorage.setItem('edit_product_id', JSON.stringify(id));
    loadFileHtml('content', '../../FE-BASIC-ONE-PAGE/Admin/Products/edit');
}


function handleUpdateProduct(e) {
    const id = JSON.parse(localStorage.getItem('edit_product_id'));
    const nameProduct = document.querySelector('#product_name').value
    const imageProduct = document.querySelector('#product_img').value
    const quantityProduct = document.querySelector('#product_pt').value
    const priceProduct = document.querySelector('#product_price').value
    const sizeProduct = document.querySelector('#product_size').value

    if (nameProduct != '' && imageProduct != '' && quantityProduct != '' && priceProduct != '' && sizeProduct != '') {
        loadingButton(e, true);

        const products = JSON.parse(localStorage.getItem('products'));
        const result = [];
        products.map((item, index) => {
            if (item.id === id) {
                const struct = {
                    'id': id,
                    'image': imageProduct,
                    'name': nameProduct,
                    'price': parseFloat(priceProduct),
                    'size': sizeProduct,
                    'quantity': parseInt(quantityProduct),
                    'status': true,
                    updated_at: new Date().toLocaleDateString('en-US'),
                };
                result.push(struct);
            } else {
                result.push(item);
            }
        })

        localStorage.setItem('products', JSON.stringify(result));
        localStorage.removeItem('edit_product_id');
        setTimeout(() => {
            showMessage('Success', "Update products success.", 'success', 3000);
            loadingButton(e, true);
            loadFileHtml('content', '../../FE-BASIC-ONE-PAGE/Admin/Products/list');
            activeSideBar('#sidebar_li-product');
        }, 2000)
    }
}

function handleDel(id) {
    const tbodyProduct = document.querySelector('#account_tbody');
    const products = JSON.parse(localStorage.getItem('products'));

    const result = products.map((item, index) => {

        if (item.id === id) products.splice(index, 1);
        return ` <tr>
        <th>${++index}</th>
        <td>${item.name}</td>
        <td><a target="_blank" href="${item.image}"><img
                    class="product_img" src="${item.image}"
                    alt="image"></a></td>
        <td>${item.quantity}</td>
        <td>${item.price}</td>
        <td>${item.size}</td>
        <td>
            <button onclick="handleEdit(${item.id})" class="product_action-btn bg-edit"><i class="fa-solid fa-pen-to-square"></i></button>
            <button onclick="handleDel(${item.id})" class="product_action-btn bg-delete"><i class="fa-solid fa-trash"></i></button>
        </td>
    </tr>`;
    });
    localStorage.setItem('products', JSON.stringify(products));

    tbodyProduct.innerHTML = result.join('')
}
function handleCreateProduct(e) {
    const nameProduct = document.querySelector('#product_name').value
    const imageProduct = document.querySelector('#product_img').value
    const quantityProduct = document.querySelector('#product_pt').value
    const priceProduct = document.querySelector('#product_price').value
    const sizeProduct = document.querySelector('#product_size').value

    if (nameProduct != '' && imageProduct != '' && quantityProduct != '' && priceProduct != '' && sizeProduct != '') {
        loadingButton(e, true);

        const products = JSON.parse(localStorage.getItem('products'));
        const struct = {
            'id': products.length === 0 ? 1 : products[products.length - 1].id + 1,
            'image': imageProduct,
            'name': nameProduct,
            'price': parseFloat(priceProduct),
            'size': sizeProduct,
            'quantity': parseInt(quantityProduct),
            'status': true,
            created_at: new Date().toLocaleDateString('en-US'),
            updated_at: new Date().toLocaleDateString('en-US'),
        };
        products.push(struct);
        localStorage.setItem('products', JSON.stringify(products));
        setTimeout(() => {
            showMessage('Success', "Create products success.", 'success', 3000);
            loadingButton(e, true);
            loadFileHtml('content', '../../../Admin/Products/list');
            activeSideBar('#sidebar_li-product');
        }, 2000)
    }

}
function onValidateCreateProduct() {

    Validator({
        form: '#product_create_form',
        formGroupSelector: '.form_group',
        errorSelector: '.form-message',
        rules: [

            Validator.isRequired('#product_name', "Name is required."),
            Validator.isRequired('#product_img', "Link image is required."),
            Validator.isRequired('#product_pt', "Quantity is required."),
            Validator.isNumber('#product_pt', "Quantity is number."),

            Validator.isRequired('#product_price', "Price is required."),
            Validator.isNumber('#product_price', "Price is number."),


        ],
    });


}

function handleSearchProduct(e) {

    const regex = /^[^a-zA-Z0-9]+$/;
    let value;
    e.value.match(regex) ? value = '' : value = e.value.trim();
    const tbodyProduct = document.querySelector('#account_tbody');
    const products = JSON.parse(localStorage.getItem('products'));
    let result = [];
    products.filter((item) => {
        if (stringToASCII((item.name).toLowerCase()).includes(stringToASCII(value.toLowerCase()))) {
            result = [
                ...result,
                item
            ]
        }
    });

    if (result.length <= 0) {
        html = ` <tr>
        <td colspan="7">
            <p class="account_notfound">Product not found.</p>
        </td>
    </tr>`;
        tbodyProduct.innerHTML = html;
    } else {
        const html = result.map((item, index) => {
            return ` <tr>
            <th>${++index}</th>
            <td>${item.name}</td>
            <td><a target="_blank" href="${item.image}"><img
                        class="product_img" src="${item.image}"
                        alt="image"></a></td>
            <td>${item.quantity}</td>
            <td>${item.price}</td>
            <td>${item.size}</td>
            <td>
                <button onclick="handleCallEdit(${item.id})" class="product_action-btn bg-edit"><i class="fa-solid fa-pen-to-square"></i></button>
                <button onclick="handleDel(${item.id})" class="product_action-btn bg-delete"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>`;
        });
        tbodyProduct.innerHTML = html.join("");
    }
}