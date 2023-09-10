var displayString='';
const display=document.querySelector('.display');
function updateDisplay(){
    if(displayString.length===0){
        displayString=''
        display.innerHTML='0'
    }
    else{
        display.innerHTML=displayString;
    }
    if(displayString.length>20){
        displayString=displayString.slice(0,displayString.length-1);
        display.innerHTML=displayString;
    }
    
}
function equate(){
    const nums=[];
    const operators=[];
    
    var lastChar=0;
    for(var i=0;i<displayString.length;i++){
        let char=displayString[i];
        if(displayString[0]==='-'){
        nums.push(0);
        i++;
        }
        if(char==='+'||char==='-'||char==='/'||char==='x'){
            operators.push(char);
            let string=displayString.slice(lastChar,i);
            lastChar=i+1;
            nums.push(parseFloat(string));
        }  
    }
    if(lastChar!=displayString.length){
        let string=displayString.slice(lastChar,i);
        lastChar=i+1;
        nums.push(parseFloat(string));
    }
    console.log(nums,operators);
    if(nums.length!=operators.length+1){
        display.innerHTML='Unable to calculate'
    }
    var ans=nums[0];
    
    for (var j=0;j<nums.length-1;j++){
        if(operators[j]==='+'){
            ans=ans+nums[j+1];
        }
        if(operators[j]==='-'){
            ans=ans-nums[j+1];
        }
        if(operators[j]==='x'){
            ans=ans*nums[j+1];
        }
        if(operators[j]==='/'){
            ans=ans/nums[j+1];
        }
    }
    displayString=ans;
    display.innerHTML=displayString;
}
const equals=document.querySelector('.equals');
equals.addEventListener('click',equate);
const one=document.querySelector('.one');
one.addEventListener('click',fn1)
function fn1 (){
    displayString+=one.innerHTML;
    updateDisplay();
}  
const two=document.querySelector('.two');
two.addEventListener('click',fn2)
function fn2 (){
    displayString+=two.innerHTML;
    updateDisplay();
}  
const three=document.querySelector('.three');
three.addEventListener('click',fn3)
function fn3 (){
    displayString+=three.innerHTML;
    updateDisplay();
}  
const four=document.querySelector('.four');
four.addEventListener('click',fn4)
function fn4 (){
    displayString+=four.innerHTML;
    updateDisplay();
}  
const five=document.querySelector('.five');
five.addEventListener('click',fn5)
function fn5 (){
    displayString+=five.innerHTML;
    updateDisplay();
}  
const six=document.querySelector('.six');
six.addEventListener('click',fn6)
function fn6 (){
    displayString+=six.innerHTML;
    updateDisplay();
}  
const seven=document.querySelector('.seven');
seven.addEventListener('click',fn7)
function fn7 (){
    displayString+=seven.innerHTML;
    updateDisplay();
}  
const eight=document.querySelector('.eight');
eight.addEventListener('click',fn8)
function fn8 (){
    displayString+=eight.innerHTML;
    updateDisplay();
}  
const nine=document.querySelector('.nine');
nine.addEventListener('click',fn9)
function fn9 (){
    displayString+=nine.innerHTML;
    updateDisplay();
}  
const zero=document.querySelector('.zero');
zero.addEventListener('click',fn0)
function fn0 (){
    displayString+=zero.innerHTML;
    updateDisplay();
}  
const plus=document.querySelector('.plus');
plus.addEventListener('click',fnPlus)
function fnPlus (){
    displayString+=plus.innerHTML;
    updateDisplay();
}  
const minus=document.querySelector('.minus');
minus.addEventListener('click',fnMinus)
function fnMinus (){
    displayString+=minus.innerHTML;
    updateDisplay();
}  
const into=document.querySelector('.into');
into.addEventListener('click',fnInto)
function fnInto (){
    displayString+=into.innerHTML;
    updateDisplay();
}  
const divide=document.querySelector('.divide');
divide.addEventListener('click',fnDivide)
function fnDivide (){
    displayString+=divide.innerHTML;
    updateDisplay();
}  
const dot=document.querySelector('.dot');
dot.addEventListener('click',fnDot)
function fnDot (){
    displayString+=dot.innerHTML;
    updateDisplay();
}  
const del=document.querySelector('.del');
del.addEventListener('click',fnDel)
function fnDel (){
    displayString=displayString.slice(0,displayString.length-1);
    updateDisplay();
}  
const reset=document.querySelector('.reset');
reset.addEventListener('click',fnReset)
function fnReset (){
    displayString='';
    updateDisplay();
}  