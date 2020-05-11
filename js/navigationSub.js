const ham=document.querySelector('.hamburger1');
const menu=document.querySelector('.navMobile');
const navDesktop=document.querySelector(('.navDesktop'));
const hamburgerBG=document.querySelector('.hamburgerBG');
const mainHeader=document.querySelector('.subHeader').offsetHeight;

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
  if (prevScrollpos > currentScrollPos && currentScrollPos>mainHeader){
    ham.style.top = "0";
    navDesktop.style.top = "0";
    hamburgerBG.style.backgroundColor="white";
    hamburgerBG.style.top="0";
    navDesktop.style.backgroundColor="white";
  } 
  else if(currentScrollPos<=mainHeader){
    hamburgerBG.style.backgroundColor="white";
    navDesktop.style.backgroundColor="rgba(22, 27, 0, 0.1)";
  }
  else {
   ham.style.top = "-50px";
   navDesktop.style.top = "-50px";
   hamburgerBG.style.top="-50px";
  }
  prevScrollpos = currentScrollPos;
}

