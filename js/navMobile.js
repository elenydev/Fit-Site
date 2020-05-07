const ham=document.querySelector('.hamburger1');
const menu=document.querySelector('.navMobile');

let showMenu=()=>{
    menu.classList.toggle('navMobileActive');
        
}
ham.addEventListener('click', showMenu);

const menuItems=document.querySelector('.navMobile');

menuItems.addEventListener('click', function(){
    menu.classList.remove('navMobileActive');
})