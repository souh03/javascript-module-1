const names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];
function findname(personname) {
    if( names.find(names=> names === personname)){
    return "Found me!" ;
  }
  else{
      return "Haven't found me :( ";
  }
}


console.log(findname("Mozafar"));