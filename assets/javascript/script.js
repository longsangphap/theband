const buyBtns = document.querySelectorAll('.js-buy-btn');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const closeBtns = document.querySelectorAll('.js-btn-close');
function showModal() {
    modal.classList.add('open')
}

function closeModal() {
    modal.classList.remove('open');
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showModal);
}
for (const close of closeBtns) {
    close.addEventListener('click', closeModal);
}
const header = document.querySelector("header");
const mobileMenu = document.querySelector(".mobile-menu-btn")
var headerHeight = header.clientHeight;
// Đóng / Mở menu
mobileMenu.onclick = function() {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null
    }
}
// Tự động đóng khi chọn menu item
var menuItems = document.querySelectorAll('nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    
    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu == false) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}