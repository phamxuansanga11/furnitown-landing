//backtotop
const backToTop = document.querySelector('footer .footer__homepage .container .backtotop')
backToTop.addEventListener('click', function(e){
    scrollTo({
        top: 0,
        "behavior": "smooth"
    })
})
