// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate password based on user prompts
function generatePassword() {
  var characterCount = prompt("Enter the amount of characters (8-128):");
  var upperCase = confirm("Do you want to include uppercase letters?");
  var lowerCase = confirm("Do you want to include lowercase letters?");
  var numbers = confirm("Do you want to include numbers?");
  var specialCharacters = confirm("Do you want to include special characters?");

  // This will check if input is valid
  if (characterCount < 8 || characterCount > 128) {
    alert("Invalid character count. Please enter a number between 8 and 128.");
    return ""
  }

  //character length based on user prompts
  var charPool = "";
  if (upperCase) {
    charlength += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (lowerCase) {
    charlength += "abcdefghijklmnopqrstuvwxyz";
  }
  if (numbers) {
    charlength += "0123456789";
  }
  if (specialCharacters) {
    charlength += "!@#$%^&*()_-=+{}[]";
  }

  // Generate the password
  var password = "";
  for (var i = 0; i < charCount; i++) {
    var randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool[randomIndex];
  }

  return password;
}
