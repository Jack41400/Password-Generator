// Assignment Code
var generateBtn = document.querySelector("#generate");
//Varibles to be used.
var enter;
var confirmCharacters;
var confirmNumbers;
var confirmUpper;
var confirmLower;

//Special character list
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
//Number list
var number = [0,1,2,3,4,5,6,7,8,9];
//Uppercase alphabet list
var alphaUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//Lowercase alphabet list
var alphaLower = alphaUpper.toString().toLowerCase(); //needs to be a string for the lowercase funtion to work

// Write password to the #password input

//this starts password generation.
function writePassword() {

//this equates the password variable to the result of the generate password function.
  var password = generatePassword();

  function generatePassword() {
//Asks for input for password length and converts it to an integer.
    enter = parseInt(prompt("How many Characters should password length be? Choose between 8 and 128."));
//Validation to alert for input.
    if(!enter){
      alert("This needs a value");
//Validation to keep integer between 8 and 128.
    } else if (enter < 8 || enter > 128) {
//Asks again for password length input and converts to an integer
      enter = parseInt(prompt("Please choose a number between 8 and 128!"));
//Asks to confirm the content of the password 
    } else {

      confirmCharacters = confirm("Include Special Characters? (eg. !, #, $, %)");
      confirmNumbers = confirm("include Numbers? (eg. 1, 2, 3, 4)");
      confirmUpper = confirm("Include Uppercase? (eg. A, B, C, D)");
      confirmLower = confirm("Include Lowercase? (eg. a, b, c, d)");
    };
//Validation for all 4 confirms negative
//vvv CODE BUG: if you do not enter a correct value the first time in the prompt, it will default to this alert vvvv
    if (!confirmCharacters && !confirmNumbers && !confirmUpper && !confirmLower) {
      choices= alert("You need to choose a criteria! (min 1)");
    }
//If all 4 choices are selected
    else if (confirmCharacters && confirmNumbers && confirmUpper && confirmLower) {
//combines all 4 arrays with concat function into the choices variable
      choices = character.concat(number, alphaUpper, alphaLower);
    }
//If 3 choices are selected
    else if (confirmCharacters && confirmNumbers && confirmUpper) {
      choices = character.concat(number, alphaUpper);
    }
    else if (confirmCharacters && confirmNumbers && confirmLower) {
      choices = character.concat(number, alphaLower);
    }
    else if (confirmCharacters && confirmUpper && confirmLower) {
      choices = character.concat(alphaUpper, alphaLower);
    }
    else if (confirmNumbers && confirmUpper && confirmLower) {
      choices = number.concat(alphaUpper, alphaLower);
    }
//If 2 choices are selected
    else if (confirmCharacters && confirmNumbers) {
      choices = character.concat(number);
    }
    else if (confirmCharacters && confirmUpper) {
      choices = character.concat(alphaUpper);
    }
    else if (confirmCharacters && confirmLower) {
      choices = character.concat(alphaLower);
    }
    else if (confirmNumbers && confirmUpper) {
      choices = number.concat(alphaUpper);
    }
    else if (confirmNumbers && confirmLower) {
      choices = number.concat(alphaLower);
    }
    else if (confirmUpper && confirmLower) {
      choices = alphaUpper.concat(alphaLower);
    }
//If 1 choice is selected
    else if (confirmCharacters) {
      choices = character;
    }
    else if (confirmNumbers) {
      choices = number;
    }
    else if (confirmUpper) {
      choices = alphaUpper;
    }
    else if (confirmLower) {
      choices = alphaLower;
    }


//this sets the variables for the random password (as of now they are just manually set to 8 letters -upper and lower- and numbers).
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = ""; //this should be what is returned when running this function.

// This is a loop made to randomize the characters that will go in the return value.
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

//this inserts the varible passwordText to The HTML id #password
  var passwordText = document.querySelector("#password");
//this sets passwordText to be the same as password
  passwordText.value = password;

}

// Add event listener to generate button

//This line links clicking the generate button in the HTML with the write password function
generateBtn.addEventListener("click", writePassword);
