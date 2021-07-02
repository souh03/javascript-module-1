function birthyear(age){
return 2021-age;
}

function showYearBorn(name,age){
    const message = name + " was born in the year " + birthyear(age);
    return message;

}
const agebornmsg = showYearBorn("said",31);
console.log(agebornmsg);