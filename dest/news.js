
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

//hover menuNomal => showMenuHover
const menuNomal = document.querySelector('.bg__news-page .bg__top-news .menu__news-page')
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

const menuHover = document.querySelector('.menu__newspage-hover')
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

//nav Menu
const navMenu = document.querySelector('.nav__menu-news')

menuHover.addEventListener('click', function(e){
    e.stopPropagation();
    navMenu.classList.add('active')
    header.style.display = 'none'
})

document.addEventListener('click', function(e){
    navMenu.classList.remove('active')
    header.style.display = 'block'
})
const closeBtn = document.querySelector('.nav__menu-news .nav__content .nav__icon .close__btn')

closeBtn.addEventListener('click', function(e){
    navMenu.classList.remove('active')
})

//button next page
const btnWitdPage = document.querySelectorAll('.news__page-content .container .btn__nextpage .btn')
const tabItem = document.querySelectorAll('.tab-content .tab-item')

btnWitdPage.forEach(function(btn, index){
    btn.addEventListener('click', (e) => {
        let tabId = index + 1;
        btnWitdPage.forEach((reMoveBtn, index) => {
            reMoveBtn.classList.remove('active')
        })
        tabItem.forEach((reMoveTabItem, index) => {
            reMoveTabItem.classList.remove('active')
        })
        btn.classList.add('active')
        document.querySelector(`.tab-pane-${tabId}`).classList.add('active')
    })

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