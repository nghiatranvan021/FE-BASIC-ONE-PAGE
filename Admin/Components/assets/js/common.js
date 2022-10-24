// loadHtml


function loadFileHtml(idTag, curlFile, isLoading = true, isLoadingTable = false) {

    isLoading ? loading(2000) : "";
    isLoadingTable ? loadingTable(true) : "";
    const htmlLoad = document.getElementById(idTag);
    htmlLoad.innerHTML = `<iframe src="${curlFile}.html"
        onload="this.before((this.contentDocument.body||this.contentDocument).children[0]);this.remove()"></iframe>`;
}

// open close sidebar
function openCloseSideBar() {
    const sideBar = document.getElementById('sidebar');
    const spanHiden = document.querySelectorAll('.visibility');

    if (sideBar.offsetWidth >= (screen.width * 0.12)) {
        for (var x = 0; x < spanHiden.length; x++) {
            spanHiden[x].style.visibility = 'hidden';
        }
        sideBar.style.width = 4 + '%'
    } else {
        for (var x = 0; x < spanHiden.length; x++) {
            spanHiden[x].style.visibility = 'inherit';
        }

        sideBar.style.width = 12 + '%'
    }
}
function activeSideBar(idButton) {
    const btnOther = document.querySelectorAll('.sidebar_li');
    const btnAddClass = document.querySelector(idButton);
    if (btnOther) {
        for (var x = 0; x < btnOther.length; x++) {

            if (btnOther[x].classList.contains('active')) btnOther[x].classList.remove('active');
        }
    }

    if (btnAddClass) btnAddClass.classList.add('active');
}


function loading(duration = 1500) {
    const loading = document.querySelector('.model_loading');
    if (loading) {
        loading.style.display = 'flex';
    }
    const clearTimeout = setTimeout(() => {
        loading.style.display = 'none';
    }, duration)

}
// handle off modal profile
function activeDropdown(e) {
    const modal = document.querySelector('.dropdown_profile');
    modal.getAttribute('data-modal') === 'off' ? modal.setAttribute('data-modal', 'on') : modal.setAttribute('data-modal', 'off')
}


// mesage
function toast({
    title = "Success",
    message = "",
    type = "success",
    duration = 5000,
}) {

    const main = document.getElementsByClassName('toast__message-custom');

    if (main) {
        const toast = document.createElement("div");
        const icons = {
            success: "fa fa-check-circle",
            error: "fa fa-times-circle",
        };
        // auto close
        const autoClose = setTimeout(function () {
            main[0].removeChild(toast);
        }, duration + 1000);
        //click close
        toast.onclick = function (e) {
            if (e.target.closest(".message__close")) {
                main[0].removeChild(toast);
                clearTimeout(autoClose);
            }
        };
        const icon = icons[type];
        toast.classList.add("message", `toast--message-${type}`);
        const delay = (duration / 1000).toFixed(2);
        toast.style.animation = `animation ease 0.3s,animationFadeout linear 1s ${delay}s forwards`;
        toast.innerHTML = ` 
                            <div class="message__icon">
                                <i class="${icon}" aria-hidden="true"></i>
                            </div>
                            <div class="message__body">
                                <h4 class="message__title">
                                    ${title}
                                </h4>
                                <p class="message__message">
                                    ${message}
                                </p>
                            </div>
                            <div class="message__close">
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </div>`;
        main[0].appendChild(toast);
    }
}
// hàm call message
function showMessage(title, message, type, duration) {
    toast({
        title: title,
        message: message,
        type: type,
        duration: duration,
    });
}
// loading btn
function loadingButton(e, isShow = true) {
    if (isShow) {

        e.classList.toggle('button--loading');
        e.style.cursor = 'not-allowed';
        e.style.pointerEvents = 'none';
    } else {
        e.classList.toggle('button--loading');
        e.style.cursor = 'pointer';
        e.style.pointerEvents = 'auto';
    }
}
function handleHoverSibar(e) {
    const sideBar = document.getElementById('sidebar');
    if (sideBar.offsetWidth <= Math.round(screen.width * 0.04)) {
        if (e.hasAttribute('data-tool-tip')) {
            e.removeAttribute('data-tool-tip');
        } else {
            e.setAttribute('data-tool-tip', null);
        }

    }
}
function setCookie(c_name, value, exdays) {

    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}


function handelLogOut() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('userInfo');
    showMessage('Success', 'Logout successfully', 'success', 2000);
    setTimeout(() => {
        window.location.href = '../Login/';
    }, 1000)

}
function modalPopUp(isShow) {
    const modal = document.querySelector('#modal_popup');
    if (modal) {
        isShow ? modal.setAttribute('data-show', null) : modal.removeAttribute('data-show');
    }

}

function handleModalprofile() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const modal = document.querySelector('#modal_popup');
    const html = `<div class="admin_user" onclick="event.stopPropagation()">
  <span  class="admin_user_close"><i onclick="modalPopUp(false)" class="fa-solid fa-xmark"></i></span>
    <p class="title">User settings</p>
    <div class="user_contact">
        <div class="user_contact-left">
            <div class="contact_profile">
                <div class="contact_profile_avatar">
                    <img src="${userInfo.avatar}" alt="avatar">
                </div>
                <div class="contact_profile_pro">
                    <p> <b>Email:</b> <span>${userInfo.email}</span></p>
                    <p> <b>Phone:</b> <span>${userInfo.phone}</span></p>
                </div>
            </div>
            <div id="contact_form" class="contact_form">
            </div>
        </div>
        <div class="user_contact-right">
            <p class="user_contact-title">Link different accounts</p>
            <div class="user_attach">
                <button type="button" class="user_attach-group facebook">
                    <i class="fa-brands fa-facebook"></i>
                    <p>FaceBook</p>
                </button>
                <button type="button" class="user_attach-group google">
                    <i class="fa-brands fa-google"></i>
                    <p>google</p>
                </button>
                <button type="button" class="user_attach-group tiktok">
                    <i class="fa-brands fa-tiktok"></i>
                    <p>tiktok</p>
                </button>
            </div>

            <div class="user_delete">
                <p class="title_delete">Deleting Profile</p>
                <div class="user_delete_contact">
                    <div class="user_delete_icon">
                        <i class="fa-solid fa-circle-info"></i>
                    </div>
                    <div class="user_delete_property">
                        <p class="user_delete-text">Deleting the User Profile removes all your data, including accounts,
                            projects, inboxes, and
                            domains.

                            The action permanently deletes all accounts you own and all the associated data. You also
                            won't be able to access shared accounts.

                            Once you click "Delete My Profile", we send you a confirmation email.

                            <button> Delete My Profile</button>
                        </p>
                        <p class="user_delete-text"> <b>Note:</b> If you want to delete your account, go to Account Settings.

                            Further steps are necessary to reassure that this profile belongs to you, as well as to
                            inform you about the types of data which will be erased as part of the process.</p>

                    </div>
                </div>
            </div>
        </div>

    </div>
   <div id="loading_table-parent">
         <div  id="loading_table"></div>
   </div>
  
</div>`;
    modal.innerHTML = html;
    loadFileHtml('contact_form', '../Users/form_profile', false)
    loadingTable(true);
    modalPopUp(true)


}
function loadingTable(isShow, isOff = true, duration = 1500) {
    const loading = document.querySelector('#loading_table-parent');
    if (loading) {
        isShow ? loading.setAttribute('data-show', null) : loading.removeAttribute('data-show');
    }
    if (isOff) {
        setTimeout(() => {
            loadingTable(false);
        }, duration)
    }

}



function handleSaveProfile(e) {
    const accounts = JSON.parse(localStorage.getItem('accountAdmin'));
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const first_name = document.querySelector('#input_firstname').value;
    const last_name = document.querySelector('#input_lastName').value;
    const email = document.querySelector('#input_email').value;
    const phone = document.querySelector('#input_phone').value;
    e.onClick = (event) => {
        event.preventDefault();
    }
    if (first_name !== "" && last_name !== "" && email !== "" && phone !== "") {
        loadingTable(true, false);
        let newUserInfo = {};
        let token = {};
        const result = accounts.map((account) => {
            let data = {};
            if (userInfo.email == account.email && userInfo.id == account.id) {
                data = {
                    ...account,
                    last_name: last_name,
                    first_name: first_name,
                    email: email,
                    phone: phone,
                    updated_at: new Date().toLocaleDateString('en-US')
                }
                newUserInfo = {
                    ...data,
                    password: null
                }
                token = {
                    email: email,
                    password: atob(account.password)
                }
            } else {
                data = {
                    ...account
                }
            }
            return data;
        });
        localStorage.setItem('accountAdmin', JSON.stringify(result));
        localStorage.setItem('userInfo', JSON.stringify(newUserInfo))
        localStorage.setItem('access_token', btoa(JSON.stringify(token)))
        loadFileHtml('header', '../Components/header', false)
        loadingTable(true, true, 1000);
        setTimeout(() => {
            modalPopUp(false);
            showMessage('Success', "Save successfully,", 'success', 3000);
        }, 1000)
    } else {
        showMessage('Error', "Something went wrong,please try again", 'error', 3000);
    }
}



function handleValidateProfile() {
    Validator({
        form: '#form_profile',
        formGroupSelector: '.contact_form-group',
        errorSelector: '.form-message',
        rules: [

            Validator.isRequired('#input_firstname', "First name is required."),
            Validator.isRequired('#input_lastName', "Last name is required."),
            Validator.isRequired('#input_email', "Email is required."),
            Validator.isEmail('#input_email', "Email is invalid."),
            Validator.isRequired('#input_phone', "Phone is required."),
            Validator.isPhoneNumber('#input_phone', "Phone is invalid.")

        ],
    })
}
function handleValidateChangePassWord() {
    Validator({
        form: '#form_changePassword',
        formGroupSelector: '.contact_form-group',
        errorSelector: '.form-message',
        rules: [

            Validator.isRequired('#input_pass', "Password is required."),
            Validator.isRequired('#input_newpass', "New password is required."),
            Validator.minLength('#input_newpass', 6, "New password at least 6 characters."),
            Validator.isRequired('#input_confirm', "Confirm password is required."),
            Validator.isConfirmed('#input_confirm', () => document.querySelector("#input_newpass").value, "Password does not match."),
        ],
    })
}



function handleShowPassword(e, id) {
    const input = document.querySelector(id);
    input && e && input.type === 'password' ? input.type = 'text' : input.type = 'password';

}

// checkout login
function checkLogin() {
    const accounts = JSON.parse(localStorage.getItem('accountAdmin'));
    const token = localStorage.getItem("access_token");
    if (token !== null) {
        const tokenDecode = JSON.parse(atob(token));
        let isCheck = false;
        let userInfo = {};
        accounts.filter((account) => {
            if (tokenDecode.email === account.email && tokenDecode.password === atob(account.password)) {
                isCheck = true;
                userInfo = {
                    ...account,
                    password: null
                }
            }
        });
        if (!isCheck) {
            window.location.href = '../Login/';
        } else {
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
        }

    } else {
        window.location.href = '../Login/';
    }
}

// handle change new password
function handleSaveChangePassword(e) {
    e.onClick = (event) => {
        event.preventDefault();
    }
    const password = document.querySelector('#input_pass').value;
    const newPassword = document.querySelector('#input_newpass').value;
    const token = JSON.parse(atob(localStorage.getItem('access_token')));
    const accounts = JSON.parse(localStorage.getItem('accountAdmin'));
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (password === token.password && newPassword) {
        loadingTable(true, false);
        let token = {};
        const result = accounts.map((account) => {
            let data = {};
            if (userInfo.email == account.email && userInfo.id == account.id) {
                data = {
                    ...account,
                    password: btoa(newPassword),
                    updated_at: new Date().toLocaleDateString('en-US')
                }

                token = {
                    email: account.email,
                    password: newPassword
                }
                console.log(token);
            } else {
                data = {
                    ...account
                }
            }
            return data;
        });
        localStorage.setItem('accountAdmin', JSON.stringify(result));
        localStorage.setItem('access_token', btoa(JSON.stringify(token)))
        loadingTable(true, true, 1000);
        setTimeout(() => {
            modalPopUp(false);
            showMessage('Success', "Save successfully,", 'success', 3000);
        }, 1000)
    } else {
        showMessage('Error', "Something went wrong,please try again", 'error', 3000);
    }
}

// listen network 

// const checkOnlineStatus = async () => {
//     const isCheck = false;
//     try {
//         const online = await fetch("https://img.shields.io/github/workflow/status/ssda/asd/ss");

//         if (online.status >= 200 && online.status < 300) {
//             return true;
//         }
//         return false;
//     } catch (err) {
//         console.log('errr', err);
//         return false;
//     }
// };


// wraning trick admin
function createAdminAccount() {
    const data = [{
        id: 1,
        first_name: 'Trần',
        last_name: 'Nghĩa',
        avatar: 'https://lh3.googleusercontent.com/ogw/AOh-ky1UoCicCIhbT7HviuSTX3Y_QcEMGes-0l1k7Hqq=s64-c-mo',
        role: 'admin',
        gender: 'male',
        status: true,
        address: 'Hồ Chí Minh',
        email: 'tranvannghia021@gmail.com',
        phone: '0945251832',
        password: btoa('123456'),
        created_at: new Date().toLocaleDateString('en-US'),
        updated_at: new Date().toLocaleDateString('en-US'),
    },
    {
        id: 2,
        first_name: 'Trần',
        last_name: 'Phú',
        avatar: 'https://lh3.googleusercontent.com/ogw/AOh-ky1UoCicCIhbT7HviuSTX3Y_QcEMGes-0l1k7Hqq=s64-c-mo',
        role: 'admin',
        gender: 'male',
        status: true,
        address: 'Hồ Chí Minh',
        email: 'tranphu26092001@gmail.com',
        phone: '0945251832',
        password: btoa('123456'),
        created_at: new Date().toLocaleDateString('en-US'),
        updated_at: new Date().toLocaleDateString('en-US'),
    }
    ];
    localStorage.setItem('accountAdmin', JSON.stringify(data));
    const accounts = [
        {
            id: 1,
            first_name: 'Trần',
            last_name: 'Phu',
            avatar: 'https://lh3.googleusercontent.com/ogw/AOh-ky1UoCicCIhbT7HviuSTX3Y_QcEMGes-0l1k7Hqq=s64-c-mo',
            role: 'user',
            gender: 'male',
            address: "Hồ Chí Minh",
            email: 'tranvannghia021@gmail.com',
            phone: '0945251832',
            status: true,
            password: btoa('123456'),
            created_at: new Date().toLocaleDateString('en-US'),
            updated_at: new Date().toLocaleDateString('en-US'),
        },
        {
            id: 2,
            first_name: 'Nguyễn',
            last_name: 'Kim',
            avatar: 'https://lh3.googleusercontent.com/ogw/AOh-ky1UoCicCIhbT7HviuSTX3Y_QcEMGes-0l1k7Hqq=s64-c-mo',
            role: 'user',
            gender: 'male',
            address: "Hồ Chí Minh",
            email: 'nguyenkim@gmail.com',
            phone: '00833664573',
            status: true,
            password: btoa('123456'),
            created_at: new Date().toLocaleDateString('en-US'),
            updated_at: new Date().toLocaleDateString('en-US'),
        },
    ];
    localStorage.setItem('accounts', JSON.stringify(accounts));
}

// createAdminAccount()
