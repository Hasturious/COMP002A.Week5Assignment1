// 1. Say you have a function, primitiveMultiply, that in 20% of cases multiplies two
// numbers and in the other 80% of cases raises an exception of type
// MultiplicatorUnitFailure. Write a function that wraps this clunky function and just
// keeps trying until a call succeeds, after which it returns the result. Make sure you
// handle only the exceptions you are trying to handle.
// Example Output:
// console.log(reliableMultiply(8, 8)); // outputs 64



class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  while(true) {
    //while(true) is a simple infinite loop. No line of code will ever make this false so the code below will repeat
    try {
      return primitiveMultiply(a, b);
      //Here we try the established function below
    }
    catch(err){
      if (!(err instanceof MultiplicatorUnitFailure))  {
        //Assuming we get the 80% "klunk" chance then we  
        //If the error is NOT an instanceof... Slide 28 of Lecture 12 demonstrated the instanceof line
        throw err;
        //
      }
    // console.log("klunk"); This is some debugging code that tells me how many times the program needed to repeat 
    }
  }
}
console.log(reliableMultiply(5, 4))


//After trying the script like 20 times ive concluded it is air tight and function as desired
//Zero klunks