
var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";



function  mentorName(greeting){
    var Uppercaste = greeting.mentorNamecase();
    return Uppercaste;
}
function greetingMentor( name, greetingstart){
    var greeting = greetingstart + " " + name;
    var uppergreting = mentorName(greeting);
    return uppergreting;
}

var  greetingstart = "Hello"; 

console.log(greetingMentor(mentor1,greetingstart));
console.log(greetingMentor(mentor2,greetingstart));
console.log(greetingMentor(mentor3,greetingstart));
console.log(greetingMentor(mentor4,greetingstart));
console.log(greetingMentor(mentor5,greetingstart));