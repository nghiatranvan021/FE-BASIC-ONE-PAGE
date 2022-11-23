// account
let accounts = [];
function accountLoadContent() {
    const dataLocalAccount = localStorage.getItem('accounts');
    if (JSON.parse(dataLocalAccount) === null) {
        accounts = [];
    } else {
        accounts = JSON.parse(dataLocalAccount);
    }
    const tbody = document.getElementById('account_tbody');
    if (accounts.length <= 0) {
        html = `  <tr>
                    <td colspan="6">
                        <p class="account_notfound"> Account not found.</p>
                    </td>
                 </tr>`;
        tbody.innerHTML = html;
    } else {
        const html = accounts.map((account, index) => {
            return `<tr>
            <th>${++index}</th>
            <td>${account.first_name} ${account.last_name}</td>
            <td>${account.phone}</td>
            <td>${account.address}</td>
            <td>${account.created_at}</td>
            <td>
                <label class="switch">
                    <input onChange="handleSaveAccount(${account.id})" type="checkbox" ${account.status === true ? 'checked' : ""}>
                    <span class="slider round"></span>
                </label>
            </td>
        </tr>`;
        });
        tbody.innerHTML = html.join("");
    }
}
function handleSaveAccount(id) {
    showMessage('Success', 'Change status accounts successfully', 'success', 3000)
    if (id !== null) {
        const result = JSON.parse(localStorage.getItem('accounts')).map((account) => {
            let data = {};
            if (account.id === id) {
                data = {
                    ...account,
                    status: !account.status,
                    updated_at: new Date().toLocaleDateString('en-US'),
                }
            } else {
                data = account;
            }
            return data;
        });

        localStorage.setItem('accounts', JSON.stringify(result));
    }
}
function HandleSubmitSearch(e) {
    const regex = /^[^a-zA-Z0-9]+$/;
    let value;
    e.value.match(regex) ? value = '' : value = e.value.trim();
    const tbody = document.getElementById('account_tbody');
    let result = [];
    JSON.parse(localStorage.getItem('accounts')).filter((account) => {
        if (stringToASCII((account.first_name + " " + account.last_name).toLowerCase()).includes(stringToASCII(value.toLowerCase()))) {
            result = [
                ...result,
                account
            ]
        }
    });

    if (result.length <= 0) {
        html = `  <tr>
                    <td colspan="6">
                        <p class="account_notfound"> Account not found.</p>
                    </td>
                 </tr>`;
        tbody.innerHTML = html;
    } else {
        const html = result.map((account, index) => {
            return `<tr>
            <th>${++index}</th>
            <td>${account.first_name} ${account.last_name}</td>
            <td>${account.phone}</td>
            <td>${account.address}</td>
            <td>${account.created_at}</td>
            <td>
                <label class="switch">
                    <input onChange="handleSaveAccount(${account.id})" type="checkbox" ${account.status === true ? 'checked' : ""}>
                    <span class="slider round"></span>
                </label>
            </td>
        </tr>`;
        });
        tbody.innerHTML = html.join("");
    }
}
