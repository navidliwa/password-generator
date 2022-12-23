// Assignment Code
var generateBtn = document.querySelector("#generate");

// Declares generatePassword as a function
function generatePassword() {
  ranPass = "";
  finalPass = "";

  // Prompt user for password length 8-128 characters long
  len = prompt("Please enter a desired password length between 8 and 128 characters:");

  // Sets fallback password length
  backupLen = Math.floor(Math.random() * 121) + 8

  // Validates length
  if (len < 8 || len > 128 || !Number(len)) {
    alert(
      "Sorry, that's outside the limit! Your password will be " + backupLen + " characters in length. This length was randomly generated."
    );
    len = backupLen
  }

  // Prompts user for lowercase characters
  if (confirm("Should lowercase letters be included in your password?")) {
    ranPass += "abcdefghijklmnopqrstuvwxyz";
  }

  // Prompts user for uppercase letters
  if (confirm("Should uppercase letters be included in your password?")) {
    ranPass += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  // Prompts user for numeric characters
  if (confirm("Should numbers be included in your password?")) {
    ranPass += "0123456789";
  }

  // Prompts user for special characters
  if (confirm("Should special characters be included in your password?")) {
    ranPass += " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  }

  // Alerts user that failure to specify criteria resulted in an alphanumeric password
  if (ranPass == "") {
    alert(
      "No criteria was selected so your password will include lowercase, uppercase, and numeric characters."
      );
    ranPass += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  }

  // Iterates through ranPass len number of times to randomly generate password
  for (var i = 0; i < len; i++) {
    finalPass += ranPass.charAt(Math.floor(Math.random() * ranPass.length));
  }

  // Return password
  return finalPass
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);