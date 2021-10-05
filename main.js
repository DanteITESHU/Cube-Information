document.querySelector('.menu-btn').addEventListener('click', ()=>{
    document.querySelector('.nav-menu').classList.toggle('show');
})
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.noticias',{delay:100});
ScrollReveal().reveal('.banner-one',{delay:100});
ScrollReveal().reveal('.banner-two',{delay:100});