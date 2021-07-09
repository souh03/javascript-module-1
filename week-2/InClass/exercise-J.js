const names =["said", "sam", "Amy"];
function secondMatchesAmy(array) {
 
  if ( array === names[2] ) {
    return "Second index matched!";
  }
  return "Second index not matched";
}
console.log(secondMatchesAmy(names[2]));