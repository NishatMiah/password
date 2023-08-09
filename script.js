// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
 var passwordLength = prompt("How long do you want your password to be?")
 console.log(passwordLength)
  if(isNaN(passwordLength) === true)
    {
      alert("Please enter a number.")
      return
    }
  if(passwordLength < 8 || passwordLength > 128) 
    {alert("Please enter a number that is between 8-128")
    return
    }
  
  var lowercase = [...Array(26)].map((e,i)=>(i+10).toString(36))
  var uppercase = ['A', 'B', 'C']
  var numbers = [1,2,3,4,5,6,7,8,9,0]
  var special = ['!', '@', '#']
  var finalArr = []
  console.log(lowercase)
    var lowercaseChoice = confirm('Do you want lowercase')
    if (lowercaseChoice === true){
      finalArr = finalArr.concat(lowercase)
    }
    console.log(finalArr)
var password = 'adkfvhsakvgashg'
    return password

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
