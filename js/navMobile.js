const ham=document.querySelector('.hamburger1');
const menu=document.querySelector('.navMobile');
const navDesktop=document.querySelector(('.navDesktop'));

ham.addEventListener('click', function(){
    menu.classList.toggle('navMobileActive');
})

window.addEventListener('click', function(event){
    if(event.target != ham && event.target != menu){
        menu.classList.remove('navMobileActive');
    }
})

const menuItems=document.querySelector('.navMobile');
menuItems.addEventListener('click', function(){
    menu.classList.remove('navMobileActive');
})
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    ham.style.top = "0";
    navDesktop.style.top = "0";
  } else {
   ham.style.top = "-50px";
   navDesktop.style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
