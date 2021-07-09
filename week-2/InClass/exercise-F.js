function usernameChecker(username) {
    if ( username ==='admin' || username=== 'manager'){
 return "Username valid" ;
}
else if ( username[0] === username[0].toUpperCase() &&  username.length > 5 
          && username.length < 10 ) {

 return "Username valid" ;
}


else { 
  return "Username invalid"; 

}
}
console.log(usernameChecker('Saidouh')); 