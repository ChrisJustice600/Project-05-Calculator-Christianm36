const form = document.querySelector("form");
const buttons = form.querySelectorAll("button");
const label = document.querySelector("#input");
const userInput = form.elements["userInput"];
const currentCalcul = document.getElementById("calcul");
console.log(currentCalcul);


// INITIALISATION 
label.textContent = "";
userInput.value = "";
let currentResult = "";

function cleanExpression(expression) {
    return expression
      .replace(/÷/g, "/")
      .replace(/×/g, "*")
  }
  
  function calculate(expression) {
      return eval(cleanExpression(expression));
  }


// CREATION DE LA FONCTION D'EVNEMENT D'ECOUTE 
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      switch (this.type) {
        case "submit":
            console.log(this.textContent);
          handleSubmitClick(this.textContent);
          break;
        case "reset":
          handleResetClick(label, form);
          break;
        case "button":
          handleButtonClick(this.textContent, userInput);
          break;
        default:
          break;
      }
    });
  });

function handleButtonClick(textContent, userInput){
    userInput.value = `${userInput.value}${textContent}`
    console.log(label.textContent);
}

function resultOperator(){
  label.textContent = `${label.textContent} ${userInput.value}`

  // console.log(label.textContent);
  currentCalcul.textContent = `${label.textContent}`
  currentResult = calculate(label.textContent)

   return currentResult
}
function handleSubmitClick(operator){
  if(operator === "="){
    if(userInput.value){

           label.textContent = `${label.textContent} ${userInput.value}`

           console.log(label.textContent);
           currentCalcul.textContent = `${label.textContent} ${operator}`
           userInput.value = calculate(label.textContent)
           // console.log(userInput.value);
            currentResult = userInput.value
          }
    }else{
      operatorCalcul(operator);
    }
}

function operatorCalcul(textContent){
  
    if(userInput.value){
      if(!currentResult){
        console.log(textContent);
        currentCalcul.textContent = `${userInput.value} ${textContent}`;
        label.textContent = currentCalcul.textContent;
        console.log(label.textContent);
      }else {
        currentCalcul.textContent = `${currentResult} ${textContent}`;
        label.textContent = currentCalcul.textContent;
      }
    userInput.value = "";
    }else{
      currentCalcul.textContent = `${0} ${textContent}`;
      label.textContent = currentCalcul.textContent;
      console.log(label.textContent);
    }
}


form.addEventListener("submit", function(event) {
    event.preventDefault();
  });
 
