import { calculate } from "./calculator.js";

// TODO: Faire la manipulation du DOM dans ce fichier
// console.log("hello")
const buttons = document.querySelectorAll(".numpad");
const inputText = document.querySelector("input");
const plus = document.getElementById("plus");
const equal = document.getElementById("equals");
const moins = document.getElementById("minus");
const times = document.getElementById("times");
const divideby = document.getElementById("divideby");
const percentage = document.getElementById("percentage");
// console.log(minus)
const calcul = document.getElementById("calcul");

// console.log(inputText.value)
// console.log(buttons)
inputText.value = "";
calcul.textContent = " ";
let lastT;
let caldel;
buttons.forEach((button) => {
    // console.log(button)
    button.addEventListener("click", (e) => {
        // inputText.value += e.target.textContent;
        // console.log(inputText.value);
        // inputText.value += e.target.textContent
        // console.log(inputText.value);
        // console.log(calcul.textContent);
        // console.log(inputText.value);
        // result =  calcul.textContent
        // console.log(result);
        // calcul.textContent = 
        // let hasTwo = false;
        // let valeur = inputText.value
        // console.log(valeur);
        
    /////////-------------- Verifier le virgul decimal dans ma chaine---------------------///////
    if (e.target.textContent === "." && inputText.value.includes(".")) {
      return;
    }
    inputText.value += e.target.textContent;
      console.log(inputText.value);
    //   console.log(inputText.value.length)

    //////////------------------ Gestion de zero au debut de l'Input------------//////////////
    if(inputText.value[0] === "0" && inputText.value[1] === "0"){
        console.log("ok ok ")
        inputText.value = inputText.value.slice(0, -1);
    // Sortir de la fonction pour empêcher toute autre action après avoir réinitialisé la valeur
    return;
    }
    })
    // console.log(e.target);
    // inputText.addEventListener("input", () => {
        
    // })
  

})


plus.addEventListener("click", (e)=>{
    e.preventDefault();
    // inputText.value += e.target.textContent
    calcul.textContent += inputText.value + " "+e.target.textContent+" ";

    inputText.value = "";
    // calcul.textContent = e.target.textContent
    console.log(calcul.textContent);
})
moins.addEventListener("click", (e)=>{
    e.preventDefault();
    // inputText.value += e.target.textContent

    calcul.textContent += inputText.value + " "+e.target.textContent+" ";
   
    inputText.value = "";
    // calcul.textContent = e.target.textContent
    // console.log(calcul.textContent);
})
times.addEventListener("click", (e)=>{
    e.preventDefault();
    // inputText.value += e.target.textContent
//    let fois = "";
//    fois = e.target.textContent
//    console.log(typeof(e.target.textContent));
// let texte = "×";

let foisContent = e.target.textContent.replace(/×/g, "*");
calcul.textContent += inputText.value + " "+foisContent+" ";
   
inputText.value = "";
// calcul.textContent = e.target.textContent
// console.log(calcul.textContent)
})
divideby.addEventListener("click", (e)=>{
    e.preventDefault();
    // inputText.value += e.target.textContent
//    let fois = "";
//    fois = e.target.textContent
//    console.log(typeof(e.target.textContent));
// let texte = "×";

let foisContent = e.target.textContent.replace(/÷/g, "/");
calcul.textContent += inputText.value + " "+foisContent+" ";
   
inputText.value = "";
// calcul.textContent = e.target.textContent
// console.log(calcul.textContent)
})


equal.addEventListener("click", (e)=> {
    e.preventDefault();
    // console.log(inputText.value)
    // console.log(calcul.textContent + inputText.value)
    calcul.textContent += inputText.value;
    console.log(calcul.textContent);
    inputText.value = eval(calcul.textContent)
    
    calcul.textContent +=" "+ e.target.textContent
    console.log(calcul.textContent);
    console.log(inputText.value);
})
percentage.addEventListener("click", (e)=>{
    e.preventDefault();
  
let foisContent = e.target.textContent.replace(/÷/g, "/");
console.log(inputText.value);

calcul.textContent += inputText.value;
    console.log(calcul.textContent);
    inputText.value = eval(calcul.textContent)
    inputText.value =  inputText.value/100

})