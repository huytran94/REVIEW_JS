// 1.Use array literal to create an array of:['apple', 'banana', 'cherry']
let arr_1 = ["apple", "banana", "cherry"];
console.log(arr_1);

// 2.Use new Array() to create an empty array with 5 empty slots.
let arr_2 = new Array(5);
console.log(arr_2);

// 3. Use Array.of() to create an array with a single number 5, not 5 empty slots.
let arr_3 = Array.of("abcd");
console.log(arr_3);
// 4. Use Array.from() to convert this string into an array of characters:
let arr_4 = Array.from("learn");
console.log(arr_4);
// 5. Use Array.from() to create an array of numbers from 1 to 10.
let arr_5 = Array.from({ length: 10 }, (_, i) => i + 1);
console.log(arr_5);

// 6. Use .fill() to create an array of 7 elements, each containing null.
let arr_6 = new Array(7).fill(null);
console.log(arr_6);

// 7. Use a for loop to create an array containing the first 10 even numbers.
// let arr_7 = [];
// let j = 0;
// for (let i = 1; i <= 10; i++) {
//   console.log(`i = ${i}, j = ${j}`);
//   if (j % 2 == 0) {
//     arr_7.push(j);
//   } else {
//     i--;
//   }

//   j++;
// }

// console.log(arr_7);

let arr_7_2 = [];
for (let i = 0; i < 10; i++) {
  arr_7_2.push(i * 2);
}

console.log(arr_7_2);
// 8. Use Array.from() with a mapping function to generate an array of: [1, 4, 9, 16, 25, 36]
let arr_8 = Array.from({ length: 6 }, (_, i) => (i + 1) ** 2);
console.log(arr_8);
// 9. Create a 5x5 matrix filled with 0 using .fill() and .map() or nested loops.
// let singleRow = new Array(5).fill(0);
// let arr_9 = Array.from({ length: 5 }, () => singleRow);
// console.log(arr_9)

// let arr_9_2 = new Array(5).fill();
// let result = arr_9_2.map(() => {
//   return new Array(5).fill(0);
// })

// console.log(result);

// 10. Create an array of length n = 10 where each element at index i equals F(i), where F(i) is the i-th Fibonacci number.
const fib = [0, 1];
for (let i = 2; i < 10; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}

// 11. Without using .fill(), create an array of 100 elements, each containing the value false.
let arr_11 = [];
for (let i = 0; i < 100; i++) {
  arr_11[i] = false;
}

console.log(arr_11);

// delete by using delete keyword
const arr = [10, 20, 30];
//delete arr[1]; // Deletes the value at index 1

// add elements
// add elements to start
arr.unshift("head 1");
arr.unshift("head 2");
arr.unshift("head 3");
arr.unshift(null);
arr.unshift(undefined);
arr.unshift(undefined, null);
arr.unshift(["a", "b", "c"]);
arr.unshift(arr_11);
arr.unshift("aaa", "bbb", "ccc");
// add elements to endarr.push("Xin chao");
arr.push();
arr.push("null");
arr.push(null);
arr.push(undefined);
arr.push([1, 2, 3, 4, 5]);
arr.push(...[1, 2, 3, 4, 5]);

// add elements any position
// splice
// splice with start normal
// insert at index 1
arr.splice(1, 0, "Insert item 1");

// insert at index 3
arr.splice(3, 0, "Insert item 2 at idx 3");

// insert at index 2
arr.splice(2, 0, [100, 200, 300]);
console.log(arr);

const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum", "guitar");
console.log(myFish);
console.log(removed);

// insert element at the start
myFish.splice(0, 0, "drum", "guitar");
console.log(myFish);

// insert element at the end: start = array.length
let myFish_2 = [...myFish];
myFish_2.splice(8, 0, "xIN CHAO", "Cyka blyat");
console.log(myFish_2);

// splice with start negative
// count from the end of array
// formula:
/**
 * if -array.length <= start < 0 => start = start + array.length
 * if start < -array.length => start = 0
 * if start >= array.length => no element deleted, but behave as adding function
 */

// if -array.length <= start < 0 => start = start + array.length
// -1 => start = -1 + 8 = 7
let myFish_3 = [...myFish];
myFish_3.splice(-1, 0, "toi la huy");
console.log(myFish_3);

// -2 => start = -2+8= 6
let myFish_4 = [...myFish];
myFish_4.splice(-2, 0, "toi la huy 2");
console.log(myFish_4);

// if start < -array.length => start = 0
let myFish_5 = [...myFish];
myFish_5.splice(-9, 0, "toi la huy 3");
console.log(myFish_5);

// if start >= array.length => no element deleted, but behave as adding function
let myFish_6 = [...myFish];
myFish_6.splice(9, 0, "xxxxxxx");
console.log(myFish_6);

let myFish_7 = [...myFish_6];
myFish_7.splice(10, 0, "xxxxxxx1");
console.log(myFish_7);

// Remove / delete from the end
myFish_7.pop();

// remove from the start
console.log(myFish_7.shift());
