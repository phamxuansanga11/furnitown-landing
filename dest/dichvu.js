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


//event__click to menuMobile => show menuMobile
const left = document.querySelector('header .main__header-mobile .container__mobile .left')
const navmenuMobile = document.querySelector('header .main__header-mobile .container__mobile .left .sub__nav-menu .nav__menu')

left.addEventListener('click',function(e){
    e.stopPropagation();
    left.classList.toggle('active')
    navmenuMobile.classList.toggle('active')
    console.log('hello')
})

//backtotop
const backToTop = document.querySelector('footer .footer__homepage .container .backtotop')
backToTop.addEventListener('click', function(e){
    scrollTo({
        top: 0,
        "behavior": "smooth"
    })
})

//menu__hover-dichvu

const menuNomal = document.querySelector('.menu__homepage-dichvu')
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

const menuHover = document.querySelector('.menu__homepage-hover--dichvu')
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

//event__click-to__menuhover => show navmenu
const navMenu = document.querySelector('.nav__menu-dichvu')

menuHover.addEventListener('click', function(e){
    e.stopPropagation();
    navMenu.classList.add('active')
    header.style.display = 'none'
})

document.addEventListener('click', function(e){
    navMenu.classList.remove('active')
    header.style.display = 'block'
})