import { calculate } from "./calculator.js";

// TODO: Faire la manipulation du DOM dans ce fichier
// console.log("hello")
const buttons = document.querySelectorAll(".numpad");
const inputText = document.querySelector("input");
const plus = document.getElementById("plus");
const equal = document.getElementById("equals");
const moins = document.getElementById("minus")
// console.log(minus)
const calcul = document.getElementById("calcul");

// console.log(inputText.value)
// console.log(buttons)
inputText.value = "";
calcul.textContent = "";
buttons.forEach((button) => {
    // console.log(button)
    button.addEventListener("click", (e) => {
       
        inputText.value = e.target.textContent
        calcul.textContent += e.target.textContent


    })
})
plus.addEventListener("click", (e)=>{
    e.preventDefault();
    // inputText.value += e.target.textContent
    calcul.textContent += e.target.textContent
})
moins.addEventListener("click", (e)=>{
    e.preventDefault();
    inputText.value += e.target.textContent
    calcul.textContent += e.target.textContent
})
equal.addEventListener("click", (e)=> {
    e.preventDefault();
  
    calcul.textContent +=equal.textContent
    // e.target.textContent
    // calcul.textContent += calculate(inputText.value)
    // inputText.value = eval(inputText.value)
    console.log(calcul.textContent)
})