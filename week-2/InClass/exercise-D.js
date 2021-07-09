

  function happienessChecker(word) {
    if (word === 'happy' ) {
      return "Good job, you're doing great!";
    } else if (word === 'sad') {
      return "Every cloud has a silver lining";
    } else if (typeof word === 'number') {
      return "Beep beep boop";
    } else {
      return "I'm sorry, I'm still learning about feelings!";
    }
  }
  console.log(happienessChecker("sad"));