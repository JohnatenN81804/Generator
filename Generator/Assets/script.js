// Get references to the #generate element
var generateButtonElem = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    var generatedPassword = generatePassword();
    var passwordTextElem = document.querySelector('#password');
    passwordTextElem.value = generatedPassword;
}

// Add event listener to generate button
generateButtonElem.addEventListener('click', writePassword);

// Generate password based on user prompts
function generatePassword() {
    var characterCount = prompt('Enter the amount of characters (8-128):');
    var includeUpperCase = confirm('Do you want to include uppercase letters?');
    var includeLowerCase = confirm('Do you want to include lowercase letters?');
    var includeNumbers = confirm('Do you want to include numbers?');
    var includeSpecialCharacters = confirm('Do you want to include special characters?');

    // This will check if input is valid
    if (characterCount < 8 || characterCount > 128) {
        alert('Invalid character count. Please enter a number between 8 and 128.');
        return '';
    }

    // Character pool based on user prompts
    var charPool = '';
    if (includeUpperCase) {
        charPool += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (includeLowerCase) {
        charPool += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (includeNumbers) {
        charPool += '0123456789';
    }
    if (includeSpecialCharacters) {
        charPool += '!@#$%^&*()_-=+{}[]';
    }

    // Generate the password
    var password = '';
    for (var i = 0; i < characterCount; i++) {
        var randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }

    return password;
}
