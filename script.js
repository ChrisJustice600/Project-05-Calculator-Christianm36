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
calcul.textContent = " ";
let result = "";
buttons.forEach((button) => {
    // console.log(button)
    button.addEventListener("click", (e) => {
       
        inputText.value += e.target.textContent
        console.log(inputText.value);
        // console.log(calcul.textContent);
        // console.log(inputText.value);
        // result =  calcul.textContent
        // console.log(result);
        // calcul.textContent = 

    })
})
plus.addEventListener("click", (e)=>{
    e.preventDefault();
    // inputText.value += e.target.textContent
    calcul.textContent += inputText.value + e.target.textContent
    inputText.value = "";
    // calcul.textContent = e.target.textContent
    console.log(calcul.textContent);
})

equal.addEventListener("click", (e)=> {
    e.preventDefault();
    console.log(inputText.value)
    console.log(calcul.textContent + inputText.value)
    calcul.textContent += inputText.value;
    console.log(eval(calcul.textContent));
    inputText.value = eval(calcul.textContent)
    calcul.textContent += e.target.textContent
    // result = calcul.textContent 
    // console.log(result);
    // e.target.textContent
    // calcul.textContent += calculate(inputText.value)
    // inputText.value = eval(calcul.textContent)
    // console.log(calcul.textContent)
    // result =  calcul.textContent
})