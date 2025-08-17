// cut string
const str = "The quick brown fox jumps over the lazy dog.";

// if only start, => start from the given index till the end
console.log(str.slice(31));
// Expected output: "the lazy dog."
// indexStart >= str.length => return empty string
console.log(str.length);
console.log(str.slice(44));
// Expected output: ""

// has indexEnd => return string start from indexStart => indexEnd-1;
console.log(str.charAt(19));
console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

// indexStart < 0, indexStart = max(indexStart + str.length, 0)
console.log(str.slice(-4));
// Expected output: "dog."

// indexStart < 0, indexStart = max(indexStart + str.length, 0)
console.log(str.slice(undefined, 3));

// indexStart < 0, indexStart = max(indexStart + str.length, 0) = 35,
// indexEnd = max(indexEnd + str.length, 0) = 39
console.log(str.slice(-9, -5));
// Expected output: "lazy"

// indexEnd <= indexStart => return empty string
console.log(str.slice(9, 5));
