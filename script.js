
// Creating Variables
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:',./<>?";


//Fetching Element IDs
const lengthEl = document.getElementById("length");
const lowerCaseEl = document.getElementById("lowerCase");
const upperCaseEl = document.getElementById("upperCase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const passwordEl = document.getElementById("password");

//Add Event Listener
generateBtn.addEventListener("click", function(){
      
    const length = lengthEl.value;
    let characters = "";
    let password = "";

    if (lowerCaseEl.checked){
        characters += lowerCaseLetters;
    }

    if (upperCaseEl.checked){
        characters += upperCaseLetters;
    }

    if (numbersEl.checked){
        characters += numbers;
    }

    if (symbolsEl.checked){
        characters += symbols;
    }


    //Adding a for loop

    for (let i = 0; i < length; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length)); 
    }


    // Setting value for password element
    passwordEl.value = password;

});