//scrollY => showMenu
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

//hover__menu-prodcut 
const menuNomal = document.querySelector('.bg__productchild-page .bg__top .menu__homepage')
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

const menuHover = document.querySelector('.bg__productchild-page .bg__top .menu__product-childpage-hover')
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

//nav__menu
const navMenu = document.querySelector('.bg__productchild-page .bg__top .nav__menu-product-child')

menuHover.addEventListener('click', function(e){
    e.stopPropagation();
    navMenu.classList.add('active')
    header.style.display = 'none'
})

document.addEventListener('click', function(e){
    navMenu.classList.remove('active')
    header.style.display = 'block'
})
const closeBtn = document.querySelector('.bg__productchild-page .bg__top .nav__menu-product-child .nav__content .nav__icon .close__btn')

closeBtn.addEventListener('click', function(e){
    navMenu.classList.remove('active')
})

//click to menuMobile => menuMobile
const left = document.querySelector('header .main__header-mobile .container__mobile .left')
const subNavMenuMobile = document.querySelector('header .main__header-mobile .container__mobile')
const navmenuMobile = document.querySelector('header .main__header-mobile .container__mobile .left .sub__nav-menu .nav__menu')

subNavMenuMobile.addEventListener('click',function(){
    left.classList.toggle('active')
    navmenuMobile.classList.toggle('active')
    console.log('hello')
})

//bactotop
const backToTop = document.querySelector('footer .footer__homepage .container .backtotop span')
backToTop.addEventListener('click', function(e){
    scrollTo({
        top: 0,
        "behavior": "smooth"
    })
})
