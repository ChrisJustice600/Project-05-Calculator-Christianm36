const form = document.querySelector("form");
const buttons = form.querySelectorAll("button");
const label = document.querySelector("#input");
const userInput = form.elements["userInput"];


// INITIALISATION 
label.textContent = "";
userInput.value = "";


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
    userInput.value = `${textContent}${userInput.value}`
}
