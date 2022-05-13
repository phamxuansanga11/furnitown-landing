//home__Page
const menuMobile = document.querySelector('.main__slider .slider__fixed .menu__homepage')
const menuMobileHover = document.querySelector('.main__slider .slider__fixed .menu__homepage-hover')

menuMobile.addEventListener('mouseover', function(e){
    if(menuMobile.style.display == 'none'){
        menuMobile.style.display = 'flex'
        menuMobileHover.style.display = 'block'
    }
    else{
        menuMobile.style.display = 'none'
        menuMobileHover.style.display = 'block'
    }
})

menuMobileHover.addEventListener('mouseout', function(e){
    if(menuMobileHover.style.display == 'block'){
        menuMobileHover.style.display = 'none'
        menuMobile.style.display = 'flex'
    }
    else{
        menuMobileHover.style.display = 'block'
        menuMobile.style.display = 'none'
    }

})
const navMenu = document.querySelector('.main__slider .slider__fixed .nav__menu')

menuMobileHover.addEventListener('click', function(e){
    e.stopPropagation();
    navMenu.classList.add('active')
    header.style.display = 'none'
})

document.addEventListener('click', function(e){
    navMenu.classList.remove('active')
    header.style.display = 'block'
})
const closeBtn = document.querySelector('.main__slider .slider__fixed .nav__menu .nav__content .nav__icon .close__btn')

closeBtn.addEventListener('click', function(e){
    navMenu.classList.remove('active')
})

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


//slider__flictiky
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  wrapAround: true,
  prevNextButtons: false,
  groupCells: 1,
});


const btnPrev = document.querySelector('.main__slider .slider__fixed .btn__ctrl-slider .btn__prev')
const btnNext = document.querySelector('.main__slider .slider__fixed .btn__ctrl-slider .btn__next')


btnPrev.addEventListener('click', () => {
    flkty.previous();
})

btnNext.addEventListener('click', () => {
    flkty.next();
})
