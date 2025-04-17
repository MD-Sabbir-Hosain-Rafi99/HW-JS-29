/**
 * 1. Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
 */
let moneyHave = 500;
if (500 > moneyHave) {
  console.log("You got free Mojo");
} else {
  console.log("Buy Mojo");
}

/**
 * 2.Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59
    Using if, else if, else
 */
let score = 101;
if (score >= 0 && score <= 100) {
  if (score >= 90 && score <= 100) {
    console.log("A");
  } else if (score >= 80 && score <= 89) {
    console.log("B");
  } else if (score >= 70 && score <= 79) {
    console.log("C");
  } else if (score >= 60 && score <= 69) {
    console.log("D");
  } else {
    console.log("F");
  }
} else {
  console.log("Input number should be 0-100!");
}

/**
 * Job requirements
 *
 */
let passed = "Bsc in Engineer";
let cgpa = 3.0;
let skilled = "Cyber Security";
let language = "English";

if (passed === "Bsc in Engineer") {
  if (cgpa >= 3.0) {
    if (skilled === "Cyber Security") {
      if (language === "English") {
        console.log("Congratulation Dear!!!!!!!!");
      } else {
        console.log("You are not fluant in English!");
      }
    } else {
      console.log("You are not skill in CS");
    }
  } else {
    console.log("Your CGPA less than 3.00");
  }
} else {
  console.log("We are looking for Bsc Engineer!");
}
