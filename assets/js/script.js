// Assignment Code
var generateBtn = document.querySelector('#generate');

// Build the character arrays.
//
// I don't want to create the arrays by hand, so I'll just
// include them as strings and iterate over them to make the
// arrays.

var lowercaseAlphabetString = 'abcdefghijklmnopqrstuvwxyz';
var specialCharacterString = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
var integerCharacterString = '0123456789';

var lowercaseAlphabet = [];
var uppercaseAlphabet = [];
var specialCharacters = [];
var integerCharacters = [];

// Iterate over the strings and push the characters onto the arrays.

for (let i = 0; i < lowercaseAlphabetString.length; i++) {
	lowercaseAlphabet.push(lowercaseAlphabetString[i]);
	uppercaseAlphabet.push(lowercaseAlphabetString[i].toUpperCase());

	// Check if the iteration worked.
	// console.log(lowercaseAlphabet[i]);
	// console.log(uppercaseAlphabet[i]);
	// It does! Commenting this out.
}

for (let i = 0; i < integerCharacterString.length; i++) {
	integerCharacters.push(integerCharacterString[i]);
}

for (let i = 0; i < specialCharacterString.length; i++) {
	specialCharacters.push(specialCharacterString[i]);

	// Check if the iteration worked.
	// console.log(specialCharacters[i]);
	// It does! Commenting this out.
}

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
