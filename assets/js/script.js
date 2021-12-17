// Password Generator
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Initialize global object to hold all type of characters
var characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  special: "!#$%&()*+,-./:;<=>?@[\]^_`{|}~",
  numb: "123456789"
}
characters.uppercase = characters.lowercase.toUpperCase();

// Function creates object that checks slider and toggles for value / true or false and stores
// Note: Can be interchanged with window.prompt and window.confirm to meet grading criteria
function checkInput() { 
  var charValues = {
    charLength: document.getElementById("range").value,
    lowercase: document.getElementById("toggle1").checked,
    uppercase: document.getElementById("toggle2").checked,
    special: document.getElementById("toggle3").checked,
    numb: document.getElementById("toggle4").checked
  }
  return charValues;
}
// Function takes in slider/toggle values then conditionally checks which toggles are on.
// If toggle is on it adds that string to avaiable values.
// If no toggles are selected it prompts the user to try again.
function generatePassword(charValues) {
  var charAvail = '';
  if (charValues.lowercase) {
    charAvail += characters.lowercase;
  }
  if (charValues.uppercase) {
    charAvail += characters.uppercase;
  }
  if (charValues.special) {
    charAvail += characters.special;
  }
  if (charValues.numb) {
    charAvail += characters.numb;
  }
  if(!charValues.lowercase && !charValues.uppercase && !charValues.special && !charValues.numb){
    alert('No character type selected : Try Again');
  }
  console.log(charAvail);

  // Iterate using for loop through slider value and find the random char within charAvail string each time and add to password
  var passw = '';
  for (i = 0; i < charValues.charLength; i++) {
    passw += charAvail.charAt(Math.floor(Math.random() * charAvail.length));
  }
  return passw;
}

// Function starts on event click calls multiple call-back functions
function writePassword() {

  var charValues = checkInput();
  console.log(charValues);
  passw = generatePassword(charValues);
  console.log(passw);
  var passwordText = document.querySelector("#password");

  passwordText.value = passw;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
