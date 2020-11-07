//this file contains strong slurs and profanity. this is only so it knows what to block.




















































const badWords = ["@", "nigger", "Nigger", "NIGGER", "fuck", "Fuck", "FUCK"];
const input = document.getElementById("un");

input.addEventListener("keyup", function(){
	let newUserName = input.value;
  for(const badWord of badWords) 
  	newUserName = newUserName.split(badWord).join("");
  input.value = newUserName;
});