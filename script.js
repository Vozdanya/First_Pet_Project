const wrapper = document.querySelector('.wrapper')
const PopupWrapper = document.querySelector('.PopupWrapper')
const loginLink = document.querySelector('.login-link')
const registerLink = document.querySelector('.register-link')
const btnPopup = document.querySelector('.btnLogin')
const btnClose = document.querySelector('.btnClose')

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    PopupWrapper.classList.add('active-popup');
});

btnClose.addEventListener('click', ()=> {
    PopupWrapper.classList.remove('active-popup');
});


