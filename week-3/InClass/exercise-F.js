function getage( year){
      age = 2021- year;
if( age >= 17 ){
    return "Born in " + year + " can drive";
} else {
    return "Born in " + year + " can drive in 17 years";
}
}
console.log(getage(2004));


const birthyears =[ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];
function candrive(year){
    age = 2021- year;
    return age >= 17 ;
    
}
result = "These people can drive: " + birthyears.map(candrive );

console.log(result);




