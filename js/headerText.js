let firstH1=document.querySelector('.typeText1');
let secondH1=document.querySelector('.typeText2');
const aboutLink=document.querySelector('.aboutLink');

const typeText1Content="Witaj w naszym świecie";
const typeText2Content="Świecie, w który liczy się trening.";
let i=0;
let x=0;
function typing(){
if(i<typeText1Content.length){
    firstH1.textContent+=typeText1Content.charAt(i);
    i++;
    setTimeout(typing,30);
}
}
setTimeout(typing,1100);

function typing2(){
    if(x<typeText2Content.length){
        secondH1.textContent+=typeText2Content.charAt(x);
        x++;
        setTimeout(typing2,20);
    }
}
setTimeout(typing2,2200);

function aboutLinkActive(){
    aboutLink.classList.remove('aboutLink')
    aboutLink.classList.add('aboutLinkActive');
}
setTimeout(aboutLinkActive, 3600);