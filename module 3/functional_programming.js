// function Run {
//     console.log("this is running.")
//     console.log("this is running.")
//     console.log("this is running.")
//     Run();
// } ##### Avoid this infinit loop using below recursion. ####

let counter = 3;
function Run() {
  console.log(counter);
  counter--;
  if (counter === 0) return;
  Run();
}
Run();
