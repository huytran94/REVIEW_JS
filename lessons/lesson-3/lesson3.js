// 1
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// 2 - print pyramid
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";

//   //space
//   for (let s = 1; s <= n - i; s++) {
//     row += " ";
//   }

//   for (let j = 1; j <= 2 * i - 1; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// 3 - print inverted pyramid
// let n = 5;
// for (let i = n; i >= 1; i--) {
//   let row = "";

//   // space
//   for (let s = 1; s <= n - i; s++) {
//     row += " ";
//   }

//   // stars
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// 4 - print diamond
// let n = 5;
// //print upper half first
// for (let i = 1; i <= n; i++) {
//   let row = "";

//   //space
//   for (let s = 1; s <= n - i; s++) {
//     row += " ";
//   }

//   for (let j = 1; j <= 2 * i - 1; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// // bottom half
// for (let i = n - 1; i >= 1; i--) {
//   let row = "";

//   // space
//   for (let s = 1; s <= n - i; s++) {
//     row += " ";
//   }

//   // stars
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// 5 right-aligned triangle
// let n = 4;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   // space
//   for (let s = 1; s <= n - i; s++) {
//     row += " ";
//   }
//   // stars
//   for (let j = 1; j <= i; j++) {
//     row += "*";
//   }
//   console.log(row);
// }

// 6 pyramid of numbers
// let n = 4;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   // spaces
//   for (let s = 1; s <= n - i; s++) {
//     row += " ";
//   }

//   // ascending number each line
//   for (let j = 1; j <= i; j++) {
//     row += j;
//   }

//   // descending number
//   for (let k = i - 1; k >= 1; k--) {
//     row += k;
//   }
//   console.log(row);
// }

// 7 Hollow Pyramid

let n = 5;
for (let i = 1; i <= n; i++) {
  let row = "";
  // spaces
  for (let s = 1; s <= n - i; s++) {
    row += " ";
  }

  //stars
  for (let j = 1; j <= 2 * i - 1; j++) {
    if (j == 1 || j == 2 * i - 1 || i === n) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}
