
const birthyears =[ 1964, 2008, 1999, 2005, 1978, 1985, 1919, "said" ];
function filtredyear(year){
    return year <= 2004;
}
result = "These are the birth years of people who can drive: " +  birthyears.filter(filtredyear);
result1 =  birthyears.filter(filtredyear);

    console.log(result,result1);


   
   
   