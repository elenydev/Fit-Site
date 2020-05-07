const ham=document.querySelector('.hamburger1');
const menu=document.querySelector('.navMobile');

let showMenu=()=>{
    menu.classList.toggle('navMobileActive');
        
}
ham.addEventListener('click', showMenu);
