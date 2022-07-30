// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  function generatePassword() {

    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    if (!enter) {
      alert("This needs a value");
  }  else if (enter < 8 || enter > 128) {
      enter = parseInt(prompt("This Value MUST be between 8 and 128!!!"));

    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;

  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowerSetNoSpecial = "abcdefghijklmnopqrstuvwxyz0123456789";
var upperSetNoSpecial = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var mixedSetNoSpecial = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
