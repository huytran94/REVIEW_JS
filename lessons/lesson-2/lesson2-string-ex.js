let resultEl = document.querySelectorAll(".ex-result")[0];
resultEl.textContent = "";

// 3a
let answer1 = "My name is";
resultEl.textContent += answer1;

// 3b
let answer2 = "Simon";
resultEl.textContent = answer2;

// 3c
resultEl.textContent = answer1;
resultEl.textContent += answer2;

// 3d
let totalCost = 5 + 3;
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

let finalCost = formatter.format(totalCost);
let finalText = `
3d) Total cost: ${finalCost}
Thank you, come again!
`;
resultEl.textContent += finalText;
// alert(finalText);

// 3k
let itemsCount = 4;
let totalItemPrice = 20.95 * 2 + 7.99 * 2;
let formattedTotalItemPrice = formatter.format(totalItemPrice);

resultEl.textContent += `Items (${itemsCount}): ${formattedTotalItemPrice}`;

// 3l
let totalShipPrice = 4.99 * 2;
let formattedTotalShipPrice = formatter.format(totalShipPrice);
let secondLine = `Shipping & Handling: ${formattedTotalShipPrice}`;
resultEl.textContent += secondLine;

// 3m
resultEl.textContent += `Total before tax: ${formatter.format(totalItemPrice + totalShipPrice)}`;

// 3n
// let tax = Math.round((totalItemPrice + totalShipPrice) * 0.1);
let tax = (totalItemPrice + totalShipPrice) * 0.1;
resultEl.textContent += `Estimated tax (10%) : ${formatter.format(tax)}`;
