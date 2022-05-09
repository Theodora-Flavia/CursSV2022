//exercitiul 1
//======================================================

function exercitiulUnu(a) {
  if (a % 2 !== 0) return a - 2;
  else return 2 * a;
}
console.log(exercitiulUnu(4));

//exercitiul 2
//======================================================

let Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 22, 12];
let primeArray = [];

const isPrime = (num) => {
  for (i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num !== 1 ? true : false;
};

for (let i = 0; i < Array.length; i++) {
  if (isPrime(Array[i])) {
    primeArray.push(Array[i]);
  }
}

console.log(primeArray);

//exercitiul 3
//========================================================

let Array1 = [
  1,
  "1",
  "trei",
  4,
  5,
  6,
  7,
  8,
  "9",
  10,
  "noua",
  12,
  14,
  81,
  191,
  "treizeci",
  33,
  34,
  456,
  76,
  565,
  434,
];
let stringsArray1 = [];
const stringsOnly = (arr) => {
  return arr.forEach((item) =>
    typeof item === "string" ? stringsArray1.push(item) : null
  );
};
stringsOnly(Array1);
console.log(stringsArray1);

//exercitiul 4
//=========================================================

function addDigits(num) {
  let splitNums = num.split("");
  let total = 0;
  for (let i = 0; i < splitNums.length; i++) {
    if (typeof splitNums[i] === "string" && Number(splitNums[i]) % 2 === 0)
      continue;
    else total += Number(splitNums[i]);
  }
  console.log(total);
}

addDigits("1234567890");

//exercitiul 4
//=========================================================

let pet = 'cat';

switch (pet) {
  case "cat":
  case "panther":
    console.log("Miau");
    break;
  case "dog":
    console.log("Woof");
    break;
  case "chicken":
    console.log("Pui pui pui");
    break;
  case "elephant":
    console.log("nyahhhhhhh");
    break;
  default:
    console.log("No sound");
    break;
}
