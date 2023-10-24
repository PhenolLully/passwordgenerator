// Assignment Code
var generateBtn = document.querySelector("#generate");


function getRandomNumber(max) {
  var randomNumber=Math.random() * (max+1);
  return Math.floor(randomNumber);
}

console.log(getRandomNumber(10));
console.log(getRandomNumber(5));
console.log(getRandomNumber(3));


function getRandomElementFromArray(array) {
  var randomPosition=getRandomNumber(array.length-1);
  return array[randomPosition];
}
var letters=['a', 'b', 'c','d'];
console.log(getRandomElementFromArray(letters));
console.log(getRandomElementFromArray([1,2,7,9,10]));
console.log(getRandomElementFromArray(['?,', '/', '$']));

function generatePassword() {
  var password=""; 
  var charSet= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
               'abcdefghijklmnopqrstuvwxyz0123456789#$';
               
  for (var i=0; i<=8; i++) {
    var randomIndex= Math.floor(Math.random()
    * charSet.length + 1);
    password += charSet.charAt(randomIndex)
  }
  return password;
    
}
console.log(generatePassword());



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
