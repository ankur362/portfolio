const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");
const number4 = document.getElementById("number4");
const number5 = document.getElementById("number5");
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;
setInterval(() => {
    if(counter1 === 100)
    {
        return;
    }
   counter1 += 1;
   number1.innerText = counter1 + "%" ;
},20);
setInterval(() => {
    if(counter2 === 92)
    {
        return;
    }
   counter2 += 1;
   number2.innerHTML = counter2 + "%" ;
},21);
setInterval(() => {
    if(counter3 === 76)
    {
        return;
    }
   counter3 += 1;
   number3.innerHTML = counter3 + "%" ;
},26);
setInterval(() => {
    if(counter4 === 34)
    {
        return;
    }
   counter4 += 1;
   number4.innerHTML = counter4 + "%" ; 
},55);
setInterval(() => {
    if(counter5 === 85)
    {
        return;
    }
   counter5 += 1;
   number5.innerHTML = counter5 + "%" ;
},22);