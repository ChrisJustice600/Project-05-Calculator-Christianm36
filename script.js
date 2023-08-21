

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
const plusoumoins = document.getElementById("plusoumoins");
// console.log(minus)
const calcul = document.getElementById("calcul");
const reset = document.getElementById("reset")
const clear = document.getElementById("clear")


clear.addEventListener("click", (e)=>{
    e.preventDefault();

 
    const valeurActuelle = inputText.value;
    const nouvelleValeur = valeurActuelle.slice(0, -1); // Retirer le dernier caractère

    inputText.value = nouvelleValeur;

})
reset.addEventListener("click", (e)=>{
    e.preventDefault();

    calcul.textContent = "";

    inputText.value = "";

})

inputText.addEventListener("keydown", (event) => {
  event.preventDefault();
});

// console.log(inputText.value)
// console.log(buttons)
inputText.value = "";
calcul.textContent = " ";

buttons.forEach((button) => {
    // console.log(button)
    button.addEventListener("click", (e) => {
        
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

})

let forCal = "";
plus.addEventListener("click", (e)=>{
    e.preventDefault();
    // inputText.value += e.target.textContent
    if(forCal.includes("=")) {
        calcul.textContent = "";
        calcul.textContent = inputText.value + " "+e.target.textContent+" ";
        inputText.value = "";
    }else {
        calcul.textContent += inputText.value + " "+e.target.textContent+" ";

    inputText.value = "";

    console.log(calcul.textContent);
    }
})
moins.addEventListener("click", (e)=>{
    e.preventDefault();
    // inputText.value += e.target.textContent
    if(forCal.includes("=")) {
        calcul.textContent = "";
        calcul.textContent = inputText.value + " "+e.target.textContent+" ";
        inputText.value = "";
    }else {
        calcul.textContent += inputText.value + " "+e.target.textContent+" ";

    inputText.value = "";

    console.log(calcul.textContent);
    }.target.textContent
    // console.log(calcul.textContent);
})
times.addEventListener("click", (e)=>{
    e.preventDefault();
    // inputText.value += e.target.textContent
    if(forCal.includes("=")) {
        calcul.textContent = "";
        calcul.textContent = inputText.value + " "+e.target.textContent+" ";
        inputText.value = "";
    }else {
        calcul.textContent += inputText.value + " "+e.target.textContent+" ";

    inputText.value = "";

    console.log(calcul.textContent);
    }
// calcul.textContent = e.target.textContent
// console.log(calcul.textContent)
})
divideby.addEventListener("click", (e)=>{
    e.preventDefault();
    // inputText.value += e.target.textContent
    if(forCal.includes("=")) {
        calcul.textContent = "";
        calcul.textContent = inputText.value + " "+e.target.textContent+" ";
        inputText.value = "";
    }else {
        calcul.textContent += inputText.value + " "+e.target.textContent+" ";

    inputText.value = "";

    console.log(calcul.textContent);
    }
// calcul.textContent = e.target.textContent
// console.log(calcul.textContent)
})


equal.addEventListener("click", (e)=> {
    e.preventDefault();
    let res = "";
    
    // console.log(inputText.value)
    // console.log(calcul.textContent + inputText.value)
    calcul.textContent += inputText.value;

    console.log(calcul.textContent);
    inputText.value = eval(calcul.textContent)
    res =  inputText.value;
    // console.log(res)
    calcul.textContent +=" "+ e.target.textContent
    forCal = calcul.textContent; 
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

plusoumoins.addEventListener("click", (e)=>{
    e.preventDefault();

    console.log(inputText.value);
    // if (e.target.textContent === "." && inputText.value.includes(".")) {
    //     return;
    //   }

    if (inputText.value.indexOf("+") === -1) {
        // if (inputText.value.includes("-")) {
        //     return;
        //   }
        inputText.value = "-" + inputText.value
    }else{
        inputText.value = "" + inputText.value
    }  

   
})