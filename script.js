// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// add char variables as arrays
// number of characters, UPPER, lower, special characters
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r","s", "t", "u", "v", "w", "x", "y", "z"];
var  specialChar = ['', '!', '"', '#', '$', '%', '&', "'", '(',')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>','?', '@', '[',']', '^', '_', '`', '{', '|', '}', '~']
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; //will write password to page

}

// Event listener for password button
generateBtn.addEventListener("click", writePassword);

//function to generate password (){
  function generatePassword (){
    //prompt for password length
    var passwordLength = parseInt(prompt("How many characters would you like your password to be?", "must be between 8 and 128 characters"));
    //if not a nunber, alert
    if(Number.isNaN(passwordLength)){
      alert("You must enter a number betweeen 8 and 128");
      //return to generate password
      return null;

      //if not between 8-128, alert
    } if(passwordLength < 8 || passwordLength > 128){
      alert("must be between 8 and 128 characters")
      //
      return null;
    } 
      //confirm each character type
      var hasUpperCase = confirm("Do you want to include upper case letters?");
      var hasLowerCase = confirm("Do you want to include lower case letters?");
      var hasSpecialChar = confirm("Do you want include special characters?");
      var hasNumbers = confirm("Do you want to include numbers?");
    

    //conditional statements that take user character choices and build user char choices
    if (!hasUpperCase && !hasLowerCase && !hasSpecialChar && !hasNumbers) {
      var userCharChoices = alert("You must choose at least one criteria");
      
    } else if (hasUpperCase && hasLowerCase && hasSpecialChar && hasNumbers) {
      userCharChoices = upperCase.concat(lowercase, specialChar, numbers);
    }
    
    else if(hasUpperCase && hasLowerCase && hasNumbers) {
      userCharChoices= upperCase.concat(hasLowerCase, numbers);
    }
    else if(hasUpperCase && hasLowerCase && hasSpecialChar) {
      userCharChoices = upperCase.concat(numbers, specialChar);
    }
    else if(hasUpperCase && hasNumbers && hasSpecialChar) {
      userCharChoices = upperCase.concat(numbers, specialChar);
    }
    else if(hasLowerCase && hasNumbers && hasSpecialChar) {
      userCharChoices = lowerCase.concat(numbers, specialChar);
    }
    
    else if(hasUpperCase && hasLowerCase) {
      userCharChoices = upperCase.concat(lowercase);
    }
    else if(hasUpperCase && hasSpecialChar) {
      userCharChoices = upperCase.concat(specialChar);
    }
    else if(hasUpperCase && hasNumbers) {
      userCharChoices = upperCase.concat(numbers);
    }
    else if(hasLowerCase && hasSpecialChar) {
      userCharChoices = lowerCase.concat(specialChar);
    }
    else if(hasLowerCase && hasNumbers) {
      userCharChoices = lowerCase.concat(numbers);
    }
    else if(hasSpecialChar && hasNumbers) {
      userCharChoices = specialChar.concat(numbers);
    }
    
    else if(hasUpperCase) {
      userCharChoices = upperCase;
    }
    else if(hasLowerCase) {
      userCharChoices = lowerCase;
    }
    else if(hasSpecialChar) {
      userCharChoices = specialChar;
    }
    else if(hasNumbers) {
      userCharChoices = numbers;
    };

    //variable for storing final password as an array
    var finalPassword = [];

    //for loop that inerates through password length and selects a random character from user char choices and pushes it into final password
    for(var i = 0; i < passwordLength; i++) {
      var randomOutput = userCharChoices[Math.floor(Math.random() * userCharChoices.length)];
      finalPassword.push(randomOutput);
    }
    //converting final password into string
    var password = finalPassword.join("");
    return password;

  };
