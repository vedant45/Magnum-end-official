let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');
let about = document.querySelector('.gotoabout');
let contact = document.querySelector('.gotocontact');
let map = document.querySelector('.gotomap');
let reviews = document.querySelector('.gotoreviews');

hamberger.addEventListener('click',function(){
    mobileNav.classList.add('open');
});

times.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});

about.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});

contact.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});

map.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});

reviews.addEventListener('click',function(){
    mobileNav.classList.remove('open');
});