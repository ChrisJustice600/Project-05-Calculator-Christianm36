const form = document.querySelector("form");
const buttons = form.querySelectorAll("button");
const label = document.querySelector("#input");
const userInput = form.elements["userInput"];
const currentCalcul = document.getElementById("calcul");


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
    console.log(expression);
      return eval(cleanExpression(expression));
  }


// CREATION DE LA FONCTION D'EVNEMENT D'ECOUTE 
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
      switch (this.type) {
        case "submit":
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


function resultOperator(textContent){
  if(userInput.value){
    if(currentCalcul.textContent.includes("=")){
      console.log(currentResult);
      currentCalcul.textContent = `${currentResult} ${textContent}`;
      label.textContent = currentCalcul.textContent;
      console.log(label.textContent);
    }else{
      console.log(currentCalcul.textContent);
      console.log(userInput.value);
      label.textContent = `${currentCalcul.textContent} ${userInput.value}`
      console.log(label.textContent);
  // console.log(label.textContent);
      currentResult = calculate(label.textContent)
      console.log(currentResult);
    }
}
}

function handleSubmitClick(operator){
  if(operator === "="){
    if(userInput.value){

           label.textContent = `${label.textContent} ${userInput.value}`

           console.log(label.textContent);
           currentCalcul.textContent = `${label.textContent} ${operator}`
           userInput.value = calculate(label.textContent)
           console.log(userInput.value);
           // console.log(userInput.value);
            currentResult = userInput.value
            console.log(currentResult);

          }
    }else{
      operatorCalcul(operator);
    }
}

function operatorCalcul(textContent){

  resultOperator();
  
    if(userInput.value){
      if(!currentResult){
        console.log(textContent);
        currentCalcul.textContent = `${userInput.value} ${textContent}`;
        label.textContent = currentCalcul.textContent;
        console.log(label.textContent);
      } else{
        console.log(currentResult);
        currentCalcul.textContent = `${currentResult} ${textContent}`;
        label.textContent = currentCalcul.textContent;
        console.log(label.textContent);
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
 
