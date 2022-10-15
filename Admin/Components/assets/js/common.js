// loadHtml
function loadFileHtml(idTag, curlFile) {
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
    loading(3000);
    const btnOther = document.querySelectorAll('.sidebar_li');
    const btnAddClass = document.querySelector(idButton);
    if (btnOther) {
        for (var x = 0; x < btnOther.length; x++) {

            if (btnOther[x].classList.contains('active')) btnOther[x].classList.remove('active');
        }
    }

    if (btnAddClass) btnAddClass.classList.add('active');
}


function loading(duration) {
    const loading = document.querySelector('.model_loading');
    if (loading) {
        loading.style.display = 'flex';
    }
    const clearTimeout = setTimeout(() => {
        loading.style.display = 'none';
    }, duration)
    // clearTimeout(clearTimeout);
}
