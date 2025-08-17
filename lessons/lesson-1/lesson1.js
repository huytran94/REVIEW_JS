let printMess = (a, b, c, d) => {
  console.log(`${a}${d}${b} = ${c}`);
};

let a = 1;
let b = 2;
// let c = a + b;
//console.log(c);

// luy thua
a = 10;
b = 4;
// let d = a ** b;
// console.log(`${a}^${b} = ${d}`);

// phep chia
a = 8;
b = 3;
let e = a / b;
printMess(a, b, e, "/");
// lam tron xuong
printMess(a, b, Math.floor(e), "/");
// lam tron len
printMess(a, b, Math.ceil(e), "/");
// lam tron
printMess(a, b, Math.round(e), "/");

// lam tron toi bao nhieu con so thap phan
printMess(a, b, parseFloat(e.toFixed(5)), "/");

// lam tron voi toPrecision
printMess(a, b, e.toPrecision(5), "/");

// tien to
let number = 6;
let output = ++number * 2 + number-- * 2;

console.log(`Output = ${output}`);

// create new string using constructor
let s = new String("abcd");
console.log(s);

// get string length
s = "JavaScript    ";
let len = s.length;

console.log("String Length: " + len);

// get substring
const str = "Mozilla";

console.log(str.substring(1, 3));

// return emty substring when indexStart = indexEnd
console.log(str.substring(1, 1));

// return full string when indexStart = indexEnd = empty
console.log(str.substring());

const mnemonic =
  "Please, send, cats, monkeys, and, zebras, in, large, cages, make, sure, padlocked.";

// Extract characters after first 14
console.log(mnemonic.substring(14));

// Extract tail after first 20
console.log(mnemonic.substring(20));

// extract first 27 characters
console.log(mnemonic.substring(0, 27));

// Extract Last n Characters Using String.prototype.substring()

console.log(mnemonic.substring(mnemonic.length - 10));

console.log(mnemonic[mnemonic.length - 9]);

// startIndex > endIndex => swap again
// Swaps to mnemonic.substring(0, 6)
console.log(mnemonic.substring(6, 0)); // "Please"

// startIndex < 0 || endIndex < 0 => set the neg = 0

// find the first index of a substring
let s1 = "def abc abc";
let i = s1.indexOf("abc");
console.log(i);

// replace string return new string
const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", "my"));
// Expected output: "I think my dog is cuter than your dog!"
console.log(paragraph);

// so sanh chuoi - nang cao
const collator = new Intl.Collator("en", {
  sensitivity: "base",
  numeric: true,
  ignorePunctuation: true,
});

console.log(collator);

console.log(collator.compare("apple", "Banana"));
console.log(collator.compare("Dpple", "Banana"));

const sentence = "JavaScript is awesome";
// extract first world
let firstWorld = sentence.slice(0, 10);
let result = firstWorld;
console.log(result);

console.log("this is lesson 1");

const styles = "padding: 10px;background-color: white;color: green;";
console.log("%chello world", styles);
console.log("%cALO", styles);
