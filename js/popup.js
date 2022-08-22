const popupOpen = document.querySelector('.footer-button');
const popupWindow = document.querySelector('.contacts-form-pop-up');
const popupClose = popupWindow.querySelector('.pop-up-close-button');
const popupForm = popupWindow.querySelector('.pop-up-form');
const nameForm = popupWindow.querySelector('.name-form');
const emailForm = popupWindow.querySelector('.email-form');
const textForm = popupWindow.querySelector('.text-form');


/*   check storage */
let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
    storageName = localStorage.getItem("name");
    storageEmail = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
};
/* finish check storage*/


popupOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    popupWindow.classList.remove('cutout');

    if (storageName) {
        nameForm.value = storageName;
    };
    if (storageEmail) {
        emailForm.value = storageEmail;
    };
    textForm.value = '';
    nameForm.focus();
});


popupClose.addEventListener('click', function () {
    popupWindow.classList.add('cutout');
    popupWindow.classList.remove('form-error');
});


popupForm.addEventListener('submit', function (evt) {
    
    if (!nameForm.value || !emailForm.value || !textForm.value) {
        console.log('works!');
        evt.preventDefault();
        popupWindow.classList.remove('form-error');
        popupWindow.offsetWidth = popupWindow.offsetWidth;
        popupWindow.classList.add('form-error');
        
    } else {
        if (isStorageSupport) {
            localStorage.setItem('name', nameForm.value);
            localStorage.setItem('email', emailForm.value);
        }
    }
});

window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
        popupWindow.classList.add('cutout');
        popupWindow.classList.remove('form-error');
    }
});