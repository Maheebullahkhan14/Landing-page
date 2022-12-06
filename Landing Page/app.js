// alert(window.innerWidth)

const Menubtn = document.querySelector('.Menubtn')
const nav = document.querySelector('.nav')
const closemenu = document.querySelector('.fa-xmark')

Menubtn.addEventListener('click' ,function(){
    nav.style.top = '0px'
})

closemenu.addEventListener('click' ,function(){
    nav.style.top = '-100%'
})