function handleShowOrderDetail(id) {
    const modal = document.querySelector('#modal_popup');
    const cartUser = JSON.parse(localStorage.getItem('cartUser_' + id));
    const html = ` <div class="order_detail" onclick="event.stopPropagation()">
    <span  class="admin_user_close"><i onclick="modalPopUp(false)" class="fa-solid fa-xmark"></i></span>
    <div class="product" style="display: flex; flex-direction: column;">
        <p class="title">Order detail</p>
        <div class="product_action">
            <div class="product_action-search">
                
            </div>
            <div class="product_action-add">

            </div>
        </div>
        <table class="account_table" style="margin-bottom: 0;width:100%;">
            <thead>
                <tr>
                    <th percent="1">
                        Stt
                    </th>
                    <th percent="2">Name</th>
                    <th percent="2">Image</th>
                    <th percent="1">Quantity</th>
                    <th percent="1">Price</th>
                    <th percent="1">Size</th>
                    <th percent="2">Total</th>
                <tr>
            </thead>
            <tbody></tbody>
        </table>

        <div class="table_scroll">
            <table class="account_table" style="width:100%;">
                <thead>
                </thead>
                <tbody id="account_tbody">
                                    ${cartUser.map((cart, index) => {
        return `<tr loading="lazy">
                
                            <th percent="1">${++index}</th>
                            <td percent="2">${cart.name}</td>
                            <td percent="2"><a target="_blank" href="${cart.image}"><img
                            class="product_img" src="${cart.image}"
                            alt="image"></a></td>
                            <td percent="1">${cart.quantity}</td>
                            <td percent="1"> ${cart.price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'VND',
        })}</td>
                            <td percent="1">${cart.size}</td>
                            <td percent="2"> ${(cart.price * cart.quantity).toLocaleString('en-US', {
            style: 'currency',
            currency: 'VND',
        })} </td>
                        
                        </tr>`;
    }).join('')

        }
                </tbody >
            </table >
        </div >

    </div >
    <div id="loading_table-parent">
        <div id="loading_table"></div>
    </div>
</div > `;
    modal.innerHTML = html
    loadingTable(true, true, 2000);
    modalPopUp(true)
}

function handleSearchOrder(e) {

    const regex = /^[^a-zA-Z0-9]+$/;
    let value;
    e.value.match(regex) ? value = '' : value = e.value.trim();

    const tbody = document.querySelector('#account_tbody');
    let result = [];
    const orders = JSON.parse(localStorage.getItem('orders'));


    orders.filter((item) => {
        if (stringToASCII((item.first_name + " " + item.last_name).toLowerCase()).includes(stringToASCII(value.toLowerCase()))) {
            result = [
                ...result,
                item
            ]
        }
    });
    if (result.length <= 0) {
        const html = `<tr>
            <td colspan="6">
                <p class="account_notfound"> Order not found.</p>
            </td>
            </tr> `;
        tbody.innerHTML = html
    } else {
        const html = result.map((order, index) => {

            return ` <tr>
    
            <th>${++index}</th>
            <td>${order.first_name} ${order.last_name}</td>
            <td>${order.quantity}</td>
            <td>${order.total.toLocaleString('en-US', {
                style: 'currency',
                currency: 'VND',
            })}</td>
            <td>
                <select onchange="handleOnchangeStatus(${order.id},this)" class="order_select" name="">
                    <option ${order.status === 'approved' && 'selected'} value="approved">Approved</option>
                    <option ${order.status === 'pending' && 'selected'} value="pending">Pending</option>
                    <option ${order.status === 'cancel' && 'selected'} value="cancel">Cancel</option>
                </select>
            </td>
            <td>
                <button onclick="handleShowOrderDetail(${order.id})" class="orders_action-btn bg-edit"><i
                        class="fa-solid fa-circle-exclamation"></i></i></button>
        
            </td>
        
        </tr> `;

        });
        tbody.innerHTML = html.join('')
    }


}
function handleShowOrder() {
    const tbody = document.querySelector('#account_tbody');
    let html = '';
    const orders = JSON.parse(localStorage.getItem('orders'));
    if (orders.length <= 0) {
        html = `< tr >
    <td colspan="6">
        <p class="account_notfound"> Order not found.</p>
    </td>
    </tr > `;
    } else {
        html = orders.map((order, index) => {

            return ` <tr>
    
            <th>${++index}</th>
            <td>${order.first_name} ${order.last_name}</td>
            <td>${order.quantity}</td>
            <td>${order.total.toLocaleString('en-US', {
                style: 'currency',
                currency: 'VND',
            })}</td>
            <td>
                <select onchange="handleOnchangeStatus(${order.id},this)" class="order_select" name="">
                    <option ${order.status === 'approved' && 'selected'} value="approved">Approved</option>
                    <option ${order.status === 'pending' && 'selected'} value="pending">Pending</option>
                    <option ${order.status === 'cancel' && 'selected'} value="cancel">Cancel</option>
                </select>
            </td>
            <td>
                <button onclick="handleShowOrderDetail(${order.id})" class="orders_action-btn bg-edit"><i
                        class="fa-solid fa-circle-exclamation"></i></i></button>
        
            </td>
        
        </tr> `;
        });
    }

    tbody.innerHTML = html.join('')
}
function handleOnchangeStatus(id, e) {

    const orders = JSON.parse(localStorage.getItem('orders'));

    orders.map((item, index) => {
        if (item.id === id) {
            item.status = e.value
            orders[index] = {
                ...item
            }
        }
    })
    localStorage.setItem('orders', JSON.stringify(orders));
    showMessage('Success', 'Update status success.', 'success', 2000);
}
function handleSearchStatus(e) {
    const tbody = document.querySelector('#account_tbody');
    const orders = JSON.parse(localStorage.getItem('orders'));



    const result = orders.map((order, index) => {

        if (e.value == order.status) {

            return ` <tr>

        <th>${++index}</th>
        <td>${order.first_name} ${order.last_name}</td>
        <td>${order.quantity}</td>
        <td>${order.total.toLocaleString('en-US', {
                style: 'currency',
                currency: 'VND',
            })}</td>
        <td>
            <select onchange="handleOnchangeStatus(${order.id},this)" class="order_select" name="">
                <option ${order.status === 'approved' && 'selected'} value="approved">Approved</option>
                <option ${order.status === 'pending' && 'selected'} value="pending">Pending</option>
                <option ${order.status === 'cancel' && 'selected'} value="cancel">Cancel</option>
            </select>
        </td>
        <td>
            <button onclick="handleShowOrderDetail(${order.id})" class="orders_action-btn bg-edit"><i
                    class="fa-solid fa-circle-exclamation"></i></i></button>
    
        </td>
    
     </tr> `;
        } else if (e.value == 'all') {

            return ` <tr>

        <th>${++index}</th>
        <td>${order.first_name} ${order.last_name}</td>
        <td>${order.quantity}</td>
        <td>${order.total.toLocaleString('en-US', {
                style: 'currency',
                currency: 'VND',
            })}</td>
        <td>
            <select onchange="handleOnchangeStatus(${order.id},this)" class="order_select" name="">
                <option ${order.status === 'approved' && 'selected'} value="approved">Approved</option>
                <option ${order.status === 'pending' && 'selected'} value="pending">Pending</option>
                <option ${order.status === 'cancel' && 'selected'} value="cancel">Cancel</option>
            </select>
        </td>
        <td>
            <button onclick="handleShowOrderDetail(${order.id})" class="orders_action-btn bg-edit"><i
                    class="fa-solid fa-circle-exclamation"></i></i></button>
    
        </td>
    
     </tr> `;
        }

    });


    tbody.innerHTML = result.join('')

}