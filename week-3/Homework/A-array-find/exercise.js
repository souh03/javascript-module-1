/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];
function findname(name){
 return name.startsWith ("A") && name.length > 7;

}
var longNameThatStartsWithA = names.find(findname);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
