// Assignment Code
var generateBtn = document.querySelector("#generate");
// password length prompt
function generatePassword() {
  var passwordLength = prompt("How long would you like your password to be? (between 8-128)");
  // return correct password length
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Bruh, it says enter a password length between 8 and 128.");
    return generatePassword();
  }
  // prompts for proper password
  if (passwordLength >= 8 && passwordLength <= 128) {
    var number = confirm("Do you want to include numbers?");
    var lCase = confirm("Do you want to include lowercase letters?");
    var uCase = confirm("Do you want to include uppercase letters?");
    var specialCharacter = confirm("Do you want to include special characters?");
  }
  // if function so user selects proper password
  if (specialCharacter === false && number === false && lCase === false && uCase === false) {
    alert("Do you want a password or not?");
    return generatePassword();
  }
  // if functions to return the arrays of criteria
  if (number) {
    var number = ["123456789"]
  }
  if (number === false) {
    var number = [""]
  }
  if (lCase) {
    var lCase = ["abcdefghijklmnopqrstuvwxyz"]
  }
  if (lCase === false) {
    var lCase = [""]
  }
  if (uCase) {
    var uCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
  }
  if (uCase === false) {
    var uCase = [""]
  }
  if (specialCharacter) {
    var specialCharacter = ["!@#$%^&*()"];
  }
  if (specialCharacter === false) {
    var specialCharacter = [""]
  }
  // variable decided by current criteria
  var randomCharacter = number + specialCharacter + lCase + uCase
  // loop to generate length of password specified by operator
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomPassword = randomCharacter[Math.floor(Math.random() * randomCharacter.length)];
    password += randomPassword;
  }
  // return password
  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
