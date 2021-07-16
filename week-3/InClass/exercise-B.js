var peopleFromClass  = ['Sam', 'Amina','Fatima','Carla'];
var peopleFromClass2 = peopleFromClass.concat('Hayat','Carlos','Benjamin');
var alphaorder = peopleFromClass2.sort();
console.log( alphaorder);

function incluname(name){
if( peopleFromClass2.includes(name)){
return name + " is at the class with array " + peopleFromClass2 ;
}
else {
    return name + " is not at the class with people in the array " + peopleFromClass2;
}
}
console.log(incluname('said'));