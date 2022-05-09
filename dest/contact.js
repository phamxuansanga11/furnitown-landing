//scrollY => showHeader
const header = document.querySelector('header .main__header')

let heightHeader = header.offsetHeight;

window.addEventListener('scroll', function(){
    let scrollY = window.pageYOffset;
    if(scrollY > heightHeader){
        header.classList.add('active')
    }
    else{
        header.classList.remove('active')
    }
})


//hover__menuNomal => showMenuWhite 

const menuNomal = document.querySelector('.contact__page .bg__top .menu__homepage-contact')
menuNomal.addEventListener('mouseover', () => {
    if(menuNomal.style.display == 'none'){
        menuNomal.style.display = 'flex'
        menuHover.style.display = 'block'
    }
    else{
        menuNomal.style.display = 'none'
        menuHover.style.display = 'block'
    }
})

const menuHover = document.querySelector('.contact__page .bg__top .menu__contactpage-hover')
menuHover.addEventListener('mouseout', () => {
    if(menuHover.style.display == 'block'){
        menuHover.style.display = 'none'
        menuNomal.style.display = 'flex'
    }
    else{
        menuHover.style.display = 'block'
        menuNomal.style.display = 'none'
    }
})

//show menuMobile
const left = document.querySelector('header .main__header-mobile .container__mobile .left')
const subNavMenuMobile = document.querySelector('header .main__header-mobile .container__mobile')
const navmenuMobile = document.querySelector('header .main__header-mobile .container__mobile .left .sub__nav-menu .nav__menu')

subNavMenuMobile.addEventListener('click',function(){
    left.classList.toggle('active')
    navmenuMobile.classList.toggle('active')
    console.log('hello')
})

//click menuHoverWhite => nav__menu

const navMenu = document.querySelector('.contact__page .bg__top .nav__menu-contact')

menuHover.addEventListener('click', function(e){
    e.stopPropagation();
    navMenu.classList.add('active')
    header.style.display = 'none'
})

document.addEventListener('click', function(e){
    navMenu.classList.remove('active')
    header.style.display = 'block'
})
const closeBtn = document.querySelector('.bg__top .nav__menu-contact .nav__content .nav__icon .close__btn')

closeBtn.addEventListener('click', function(e){
    navMenu.classList.remove('active')
})

//backtotop
const backToTop = document.querySelector('footer .footer__homepage .container .backtotop')
backToTop.addEventListener('click', function(e){
    scrollTo({
        top: 0,
        "behavior": "smooth"
    })
})
