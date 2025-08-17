// return function
// function outer() {
//   console.log("Outer function");
//   return function inner() {
//     console.log("Inner function");
//   };
// }

// outer()();

// accept function as parameter
let isBuzz = false;
function foo(func) {
  console.log("foo");
  if (isBuzz) {
    func();
  }
}

const buzz = function () {
  console.log("Buzz");
};

foo(buzz);
