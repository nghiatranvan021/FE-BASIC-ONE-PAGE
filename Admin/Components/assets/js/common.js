// loadHtml


function loadFileHtml(idTag, curlFile) {
    loading(2000);
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