let arr_1;
let arr_2;
let arr_3;
let arr_4;
let arr_5;
let arr_6;
let arr_7;
let arr_8;
let arr_9;
let arr_10;
let arr_11;
let arr_12;
let arr_13;
let arr_14;
let arr_15;
let arr_16;
let arr_17;
let arr_18;
let arr_19;
let arr_20;
let arr_21;
let arr_22;
let arr_23;
let arr_24;
let arr_25;
let arr_26;
let arr_27;
let arr_28;
let arr_29;
let arr_30;
let arr_31;
let new_arr;
// 1. Add 10 to the end of the array
// arr_1 = [1, 2, 3];
// c1: push()
// arr_1.push(10);
// c2: use splice
// arr_1.splice(4, 0, 10);
// c3: use length
// arr_1[arr_1.length] = 10;
// c4: use concat
// let new_arr = arr_1.concat(10, 1, 2);
// console.log(new_arr);

// 2. Add 0 to the start of the array
//c1: unshift

// arr_2 = [1, 2, 3, 4, 5];
// arr_2.unshift("a", "b", "c");
// c2: use splice
// arr_2.splice(-6, 0, "xin chao", "hello");
// arr_2.splice(0, 0, "xin chao", "hello");
// c3: use index
// new_arr = [0, "xin chao", "hello"].concat(arr_2);
// c4: slice(), unshift(0);
// console.log(new_arr);
// 3. Remove the last element
// arr_3 = [1, 2, 3, 4, 5];
// arr_3.pop();
// arr_3.length = arr_3.length - 1;
// new_arr = arr_3.slice(0, -1);
// console.log(new_arr);
// 4. Remove the first element
// arr_4 = [1, 2, 3, 4, 5, 6, 7];
// arr_4.shift();
// arr_4.splice(0, 1);
// new_arr = arr_4.slice(1);
// console.log(new_arr);
// 5. Insert 99 between number 2 and number 3
// arr_5 = [1, 2, 3, 45, 66, 77, 22, 100];

// find index of 2
// let idx = arr_5.indexOf(2);
// let idx = arr_5.findIndex((item) => item === 2);
// if (idx !== -1) {
//   arr_5.splice(idx + 1, 0, 99); // mutates
// }

// if (idx !== -1) {
//   for (let j = arr_5.length; j > idx + 1; j--) {
//     arr_5[j] = arr_5[j - 1];
//   }

//   arr_5[idx + 1] = 99;
// }

// console.log(arr_5);
// 6. Remove element at index 1
// arr_6 = [1, 2, 23, 4, 6, "abc", "a"];
// new_arr = arr_6.slice(0, 1).concat(arr_6.slice(2));
// splice
// arr_6.splice(1, 1);
// loop
// for (let i = 1; i < arr_6.length - 1; i++) {
//   arr_6[i] = undefined;
//   arr_6[i] = arr_6[i + 1];
// }

// arr_6.length--;

// console.log(arr_6);

// 7. Remove all 0s from the array
// arr_7 = [2, 0, 0, 2, 3, 0, "0", -0];
// arr_7 = [2, 0, 1, 0, "a", 0, "0", -0, "10", 11, 0, 0, 0, 0, 999];

// c1
// for (let i = 0; i < arr_7.length; i++) {
//   if (arr_7[i] === 0) {
//     arr_7.splice(i, 1);
//     i--;
//   }
// }

//c2
// let j = 0;
// for (let i = 0; i < arr_7.length; i++) {
//   if (arr_7[i] !== 0) {
//     arr_7[j] = arr_7[i];
//     j++;
//   }
// }
// arr_7.length = j;

// c3 filter
// new_arr = arr_7.filter((n) => n !== 0);
// console.log(arr_7);

// 8: Insert [9, 8, 7] at position 2
// arr_8 = [0, 2, 4, 6, 8, 10, 12];
// splice
// arr_8.splice(2, 0, 9, 8, 7);
// new_arr = [...arr_8];
// new_arr = arr_8.slice(0, 2).concat([9, 8, 7]).concat(arr_8.slice(2));
// new_arr = arr_8.slice(0, 2).concat([9, 8, 7], arr_8.slice(2));
// let insert = [9, 8, 7];
// for (let i = insert.length - 1; i >= 0; i--) {
//   arr_8.splice(2, 0, insert[i]);
// }
// let insert = [9, 8, 7, 100, 101];
// if (insert.length || arr_8.length) {
//   let j = insert.length - 1;
//   let targetIdx = 2;
//   let k = targetIdx + insert.length;
//   // move item one index forward

//   for (let i = arr_8.length - 1 + insert.length; i >= targetIdx; i--) {
//     if (i >= k) {
//       arr_8[i] = arr_8[i - j - 1];
//     } else {
//       arr_8[i] = insert[j--];
//     }
//   }
//   console.log(arr_8);
// }

// 9: Remove last 2 elements using one method
// arr_9 = [1, 20, 100, 30, 40, "a", "xin chao", "hello", 4.5];
// new_arr = [];
// arr_9.splice(-2);
// new_arr = arr_9.slice(0, -2);
// arr_9.pop();
// arr_9.pop();
// use for loop with return new arr
// for (let i = 0; i < arr_9.length - 2; i++) {
//   new_arr[i] = arr_9[i];
// }

// use length
// count
// arr_9.length = arr_9.length - 2;
// console.log(arr_9);

// 10: Insert ‘X’ at index 1 and remove 2 elements
// arr_10 = [1, 20, 100, 30, 40, "a", "xin chao", "hello", 4.5];
// arr_10.splice(1, 2, "X");

// new_arr = arr_10.slice(0, 1).concat("X", arr_10.slice(3));

// use for loop
// let j = 2;
// for (let i = 1; i < arr_10.length - 1; i++) {
//   arr_10[i] = arr_10[i + 1];
// }

// arr_10[1] = "X";
// arr_10.length = arr_10.length - 1;
// arr_10[1] = "X";
// arr_10.splice(2, 1);
// console.log(arr_10);

// 11 Keep only even numbers
// arr_11 = [1, 99, 4, 3, 2, 8, 4, 5, 6, 6, 7, 9, 11, 13, 6, 6];

// new_arr = arr_11.filter((n) => !(n % 2));

// console.log(new_arr);

// for loop
// let j = 0;
// for (let i = 0; i < arr_11.length; i++) {
//   if (arr_11[i] % 2 === 0) {
//     arr_11[j] = arr_11[i];
//     j++;
//   }
// }

// for loop
// for (let i = 0; i < arr_11.length; i++) {
//   if (arr_11[i] % 2 !== 0) {
//     arr_11.splice(i, 1);
//     i--;
//   }
// }

// console.log(arr_11);
// 12: Add element at end, then remove from start, repeat 3 times
// 13: Empty the array arr = [1, 2, 3, 4]
// arr_13 = [1, 20, 100, 30, 40, "a", "xin chao", "hello", 4.5];
// while (arr_13.length > 0) {
//   arr_13.shift();
//   console.log(arr_13.length);
// }
// new_arr = arr_13.slice(0, 0);

// console.log(new_arr);

// 14: Replace all elements in [1, 2, 3] with 0
// arr_14 = [1, 20, 100, 30, 40, "a", "xin chao", "hello", 4.5];
// fill()
// new_arr = arr_14.map(() => 0);
// for (let i = 0; i < arr_14.length; i++) {
//   arr_14[i] = 0;
// }

// arr_14.forEach((_, idx) => {
//   arr_14[idx] = 0;
// });
// console.log(arr_14);

// new_arr = new Array(arr_14.length).fill(0);
// console.log(new_arr);

// 15: Replace even numbers with 'even'

