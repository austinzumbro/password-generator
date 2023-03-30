// Assignment Code
var generateBtn = document.querySelector('#generate');

// Build the character arrays.
//
// I don't want to create the arrays by hand, so I'll just
// include them as strings and iterate over them to make the
// arrays.

var lowercaseAlphabetString = 'abcdefghijklmnopqrstuvwxyz';
var numericCharacterString = '0123456789';
var specialCharacterString = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

var lowercaseAlphabet = [];
var uppercaseAlphabet = [];
var numericCharacters = [];
var specialCharacters = [];

// Iterate over the strings and push the characters onto the arrays.

for (let i = 0; i < lowercaseAlphabetString.length; i++) {
	lowercaseAlphabet.push(lowercaseAlphabetString[i]);
	uppercaseAlphabet.push(lowercaseAlphabetString[i].toUpperCase());
}

for (let i = 0; i < numericCharacterString.length; i++) {
	numericCharacters.push(numericCharacterString[i]);
}

for (let i = 0; i < specialCharacterString.length; i++) {
	specialCharacters.push(specialCharacterString[i]);
}

// Password Criteria
// Default criteria options.
var criteria = {
	characters: [],
	numChars: 8,
	lowercase: true,
	uppercase: true,
	numeric: true,
	special: true,
	// validateLength: function() {
	//   if (this.length >= 8 || this.length <= 128) {
	//     return true;
	//   } else {
	//     return false;
	//   }
	// }
	collectUserInput: function () {
		// reset the character library
		this.characters = [];
		console.log(this.characters);

		// collect the number of characters specification from the user
		this.numChars = parseInt(
			prompt(
				'What length, in characters, would you like your password to be?\nThere is an 8 character minimum and a 128 character maximum.'
			)
		);
		// if user hits "cancel" then stop collecting input
		if (!this.numChars) {
			return;
		}

		// validate the user provided specifications
		// require them to re-enter a correct value
		while (!(this.numChars >= 8 && this.numChars <= 128)) {
			this.numChars = prompt(
				'Your password must be between 8 and 128 characters in length. Please enter a valid response.'
			);
			if (!this.length) break;
		}
		// if the user hits "cancel" then stop collecting input
		if (!this.numChars) {
			return;
		}

		// check if lowercase letters should be included
		// if true, add those characters to the library
		this.lowercase = confirm(
			'Please confirm that the password should include lowercase letters.\nIf you do not wish to include these characters, press Cancel.'
		);
		if (this.lowercase) {
			this.characters = this.characters.concat(lowercaseAlphabet);
		}
		console.log(this.characters);

		// check if uppercase letters should be included
		// if true, add those characters to the library
		this.uppercase = confirm(
			'Please confirm that the password should include uppercase letters.\nIf you do not wish to include these characters, press Cancel.'
		);
		if (this.uppercase) {
			this.characters = this.characters.concat(uppercaseAlphabet);
		}
		console.log(this.characters);

		// check if numeric characters should be included
		// if true, add those characters to the library
		this.numeric = confirm(
			'Please confirm that the password should include numeric characters.\nIf you do not wish to include these characters, press Cancel.'
		);
		if (this.numeric) {
			this.characters = this.characters.concat(numericCharacters);
		}
		console.log(this.characters);

		// check if special characters should be included
		// if true, add those characters to the library
		this.special = confirm(
			'Please confirm that the password should include special characters.\nIf you do not wish to include these characters, press Cancel.'
		);
		if (this.special) {
			this.characters = this.characters.concat(specialCharacters);
		}
		console.log(this.characters);
	},
};

function generatePassword() {
	// initialize a string
	let passwordString = '';

	// collect the user input regarding length, character library, etc.
	criteria.collectUserInput();

	// if user hits "cancel," abort the process and return nothing
	if (!criteria.numChars) {
		return null;
	}

	// if the user does not approve any character libraries, alert them to try again and return nothing
	if (criteria.characters.length < 1) {
		alert(
			'You must include at least one set of characters in order to generate a password.\nPlease try again and confirm at least one set of character types.'
		);
		return null;
	}

	console.log(passwordString);
	console.log(Math.floor(Math.random() * criteria.characters.length));

	for (let i = 0; i < criteria.numChars.length; i++) {
		let position = Math.floor(Math.random() * criteria.characters.length);
		console.log(position);
		let randomChar = criteria.characters[position];
		console.log(randomChar);
		passwordString += randomChar;
		console.log(passwordString);
	}
}

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');
	console.log(password);

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
