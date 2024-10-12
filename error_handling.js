// try {
//   console.log(a + b);
//   console.log("this line never reached.");
// } catch (err) {
//   console.log("There is an error. working on it!");
// }

// console.log("Program continues.🙂");
function addTwoNums(a, b) {
  try {
    if (typeof a != "number") {
      throw new ReferenceError("the first argument is not a number.");
    } else if (typeof b != "number") {
      throw new ReferenceError("the second argument is not a number.");
    } else {
      console.log(a + b);
    }
  } catch (err) {
    console.log(err);
  }
}
// addTwoNums(5, "5");
// console.log("It still works");
var str = "Hello";
str.match("jello");
