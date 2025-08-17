// 8. count numbers of digits divisible by 3
// let n = 32495;
// let count = 0;
// let tempNumber = n;
// let resultStr = "";

// while (tempNumber > 0) {
//   //extract the last number
//   let digit = tempNumber % 10;

//   console.log(`digit = ${digit}`);
//   if (!(digit % 3)) {
//     count++;
//     resultStr += digit;
//   }
//   // remove the last number and update with the rest
//   tempNumber = Math.floor(tempNumber / 10);
// }

// console.log("Digits divisible by 3:", count);
// console.log(resultStr);

// 9. reverse a number
// let n = 12345;
// let rev = 0;
// while (n > 0) {
//   let digit = n % 10;
//   rev = rev * 10 + digit;
//   n = Math.floor(n / 10);
// }

// console.log(rev);

// 10. check palindrome
// let n = 1221;
// let tempN = n;
// let reversed = 0;

// while (tempN > 0) {
//   let digit = tempN % 10;
//   reversed = reversed * 10 + digit;
//   tempN = Math.floor(tempN / 10);
// }

// if (n === reversed) {
//   console.log(`n = ${n} is palindrome`);
// }

// 11. find all prime numbers upto 100
// let count = 0;
// for (let i = 2; i <= 100; i++) {
//   let isPrime = true;
//   for (let j = 2; j <= Math.sqrt(i); j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }

//   if (isPrime) {
//     console.log(`i = ${i}`);
//   }
// }

// 12. Find gcd
// let a = 2268,
//   b = 1260;

// if (a < b) {
//   // swap again
//   // a = 1; b= 2
//   a = a + b;
//   b = a - b;
//   a = a - b;
// }

// while (b != 0) {
//   let temp = b;
//   b = a % b;
//   a = temp;
// }

// console.log("GCD:", a);
// 13. find lcm
// let a = 40,
//   b = 72;
// let max = a;
// let lcm = 0;
// if (a < b) {
//   max = b;
// }

// while (true) {
//   if (max % a === 0 && max % b === 0) {
//     lcm = max;
//     console.log("LCM: ", lcm);
//     break;
//   }
//   max++;
// }

// 14. perfect square check
// let n = 49;
// let isSquare = false;
// if (n >= 0) {
//   for (let i = 0; i * i <= n; i++) {
//     if (i * i === n) {
//       isSquare = true;
//       break;
//     }
//   }
// }

// if (isSquare) {
//   console.log("n: " + n + " is perfect square");
// }

// 15. count number of factors
// let n = 20;
// let count = 0;
// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     count++;
//   }
// }
// console.log("Number of factors:", count);

// 16. Sum of Digits of a Very Large Number Without Converting to String
// let n = 987654321987654321n;
// let sum = 0n;
// while (n > 0n) {
//   sum += n % 10n;
//   n = n / 10n;
// }

// console.log(String(sum));

// 17. Check if a Number is a Prime Without Using Math.sqrt()
// let n = 97;
// let isPrime = true;
// if (n < 2) {
//   isPrime = false;
// }

// for (let i = 2; i * i <= n; i++) {
//   if (n % i === 0) {
//     isPrime = false;
//     break;
//   }
// }
// console.log(isPrime);
