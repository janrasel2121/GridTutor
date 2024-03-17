window.addEventListener("scroll", function(){
    var nav = document.querySelector('.navbar');
    nav.classList.toggle('active', window.scrollY > 0)
})
const dropMenu = document.querySelector('.box');
const toggleBtn = document.querySelector('.fa-bars');

toggleBtn.addEventListener('click', () => {
    dropMenu.classList.toggle('active');

    const isOpen = dropMenu.classList.contains('active');

    toggleBtn.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
})