let bmi=()=>{ 
    let weight=document.querySelector('.weight').value;
    let ht=document.querySelector('.height').value;
    let height=ht/100;
    let bmiDiv=document.querySelector('.bmi');
    let currentBmi=Math.round(weight/Math.pow(height,2));
    let bmiResult=document.querySelector('.bmiResult');
    if(weight <= 0 || height <= 0){
        alert("podane zostały niepoprawne wartośći");
    }
    else if(currentBmi<18.5){
        bmiDiv.style.backgroundColor="red";
        bmiResult.textContent=`${currentBmi} - Niedowaga`;
        console.log(currentBmi);

    }
    else if(currentBmi>=18.5 && currentBmi<=24.9){
        bmiDiv.style.backgroundColor="green";
        bmiResult.textContent=`${currentBmi} - Prawidłowa waga`;
        console.log(currentBmi);

    }
    else if(currentBmi>=25 && currentBmi<=29.9){
        bmiDiv.style.backgroundColor="orange";
        bmiResult.textContent=`${currentBmi} - Nadwaga`;
        console.log(currentBmi);

    }
    else if(currentBmi>30){
        bmiDiv.style.backgroundColor="red";
        bmiResult.textContent=`${currentBmi} - Otyłość`;
        console.log(currentBmi);
    }
    
}
document.querySelector('.bmiButton').addEventListener('click',bmi);
//BMR 
let bmrButton=document.querySelector('.bmrButton');


let bmr=()=>{
let weight=document.querySelector('.bmrWeight').value;
let height=document.querySelector('.bmrHeight').value;
let age=document.querySelector('.bmrAge').value;
let select=document.querySelector('.bmrSelect').value;
let div=document.querySelector('.bmrDiv');
let activity=document.querySelector('.activitySelect').value;
let bmrResult=document.querySelector('.bmrResult');
if(weight<=0 || height<=0 || age<=0) {alert("Podane zostały nieprawdiwłowe wartości")}
else if(select=="Mężczyzna"){
const realBmr=((9.99*weight)+(6.25*height)-(4.92*age))+5;

if(activity=="0"){
        bmrResult.textContent=`Twoje zapotrzebowanie kaloryczne to: ${Math.round(realBmr*1.2)} `; 
    }
    else if(activity=="1"){
        bmrResult.textContent=`Twoje zapotrzebowanie kaloryczne to: ${Math.round(realBmr*1.3)} `;}
        
    else if(activity=="2"){
        bmrResult.textContent=`Twoje zapotrzebowanie kaloryczne to: ${Math.round(realBmr*1.5)} `;
    }
    else if(activity=="3"){
        bmrResult.textContent=`Twoje zapotrzebowanie kaloryczne to: ${Math.round(realBmr*1.7)} `;
    }
    else if(activity=="4"){
        bmrResult.textContent=`Twoje zapotrzebowanie kaloryczne to: ${Math.round(realBmr*1.9)} `;
    }
    
}
else if(select=="Kobieta"){
    const realBmr=((9.99*weight)+(6.25*height)-(4.92*age))-161;
   
    if(activity=="0"){
        bmrResult.textContent=`Twoje zapotrzebowanie kaloryczne to: ${Math.round(realBmr*1.2)} `; 
    }
    else if(activity=="1"){
        bmrResult.textContent=`Twoje zapotrzebowanie kaloryczne to: ${Math.round(realBmr*1.3)} `;}
        
    else if(activity=="2"){
        bmrResult.textContent=`Twoje zapotrzebowanie kaloryczne to: ${Math.round(realBmr*1.5)} `;
    }
    else if(activity=="3"){
        bmrResult.textContent=`Twoje zapotrzebowanie kaloryczne to: ${Math.round(realBmr*1.7)} `;
    }
    else if(activity=="4"){
        bmrResult.textContent=`Twoje zapotrzebowanie kaloryczne to: ${Math.round(realBmr*1.9)} `;
    }
}}
bmrButton.addEventListener('click',bmr);
const makro=()=>{
    const height=document.querySelector('.macroHeight');
    const weight=document.querySelector('.macroWeight');
    const select=document.querySelector('.macroSex').value;
    const calories=document.querySelector('.macroCalories').value;
    const makroResult=document.querySelector('.makroResult');

    if(height<=0 || weight<=0 || calories<=0){
        alert("Wprowadź poprawne dane");
    }
    else if(select==0){
        const fats=Math.round(calories*0.2/9);
        const protein=Math.round(calories*0.35/4);
        const carbs=Math.round(calories*0.45/4);
        makroResult.textContent=`${fats} tłuszczy, ${protein} białka i ${carbs} węglowodanów`;

    }
    else if(select==1){
        const fats=Math.round(calories*0.3/9);
        const protein=Math.round(calories*0.35/4);
        const carbs=Math.round(calories*0.35/4);
        makroResult.textContent=`${fats} tłuszczy, ${protein} białka i ${carbs} węglowodanów`;
    }

}

document.querySelector('.macroButton').addEventListener('click', makro);