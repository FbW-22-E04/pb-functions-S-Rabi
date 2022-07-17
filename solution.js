// 1:
function sumTo(s) {
  let sum = 0;
  for (let i = 1; i <= s; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumTo(5));

console.log(sumTo(4));

console.log(sumTo(13));

console.log(sumTo(600));

console.log("-----------------------------------");
// 2:
let r = 0;
let s = 0;
let z = 0;
function multiplyNum(a, b, c) {
  for (let i = 0; i <= 3; i++) {
    r = Math.pow(a, 3);
    s = Math.pow(b, 3);
    z = Math.pow(c, 3);
  }
  total = r + s + z;
  console.log(total);
}
multiplyNum(1, 5, 9);
//
console.log("-----------------------------------");
// 3:
function isStrStartOfWord(str, word) {
  if (word.search(str) == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isStrStartOfWord("bu", "button"));
console.log(isStrStartOfWord("tri", "triplet"));
console.log(isStrStartOfWord("beau", "pastry"));

// 4:

function lessOrEqual(number) {
  return number <= 0;
}
console.log(lessOrEqual(-10));
console.log(lessOrEqual(3));
console.log(lessOrEqual(0));
console.log(lessOrEqual(-4));
console.log(lessOrEqual(10));

//--------------------------------------------------

// 5:
function countOccurrences(str, letter) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      counter++;
    }
  }
  return counter;
}

console.log(countOccurrences("this is a string", "i"));
//--------------------------------------------------

// 6: we can do it in different way. 1 in comment and 2 in...

// function multiplyNum2(a) {
//   let i = a;
//   console.log(a ** i);
// }
// multiplyNum2(5);

function calcBaseToExponent(base, exponent) {
  return base ** exponent;
}

console.log(calcBaseToExponent(5, 5));
console.log(calcBaseToExponent(10, 10));
console.log(calcBaseToExponent(3, 3));
//--------------------------------------------------

// 7:

function calcAgeInDogYears(HumanYears) {
  const dog_years = HumanYears * 7;
  return dog_years;
}
console.log(calcAgeInDogYears(5));
//--------------------------------------------------

// 8:
function calcLifetimeSupply(currentAge, amountPerDay) {
  const MAX_AGE = 100;
  const AVERAGE_YEAR = 365.25;
  const SUPPLY_CALC = Math.ceil(
    (MAX_AGE - currentAge) * AVERAGE_YEAR * amountPerDay
  );
  return `${SUPPLY_CALC} pieces`;
}
console.log(calcLifetimeSupply(25, 2));
console.log(calcLifetimeSupply(40, 3));
//--------------------------------------------------

// 9:
function isWaldoHere(str) {
  const stringWaldo = str.toLowerCase();
  return stringWaldo.includes("waldo");
}

console.log(isWaldoHere("is there wal here ?"));
console.log(isWaldoHere("I found you Waldo!"));
console.log(isWaldoHere("Wait, don't you mean Wally"));
console.log(isWaldoHere("waldo is here"));
//--------------------------------------------------

// 10:
function isEqualSlices(totalSlices, numOfRecipients, slicesPP) {
  const NEEDED_SLICES = numOfRecipients * slicesPP;
  return totalSlices >= NEEDED_SLICES;
}
console.log(isEqualSlices(8, 3, 2));
console.log(isEqualSlices(8, 3, 3));
console.log(isEqualSlices(24, 12, 2));
//--------------------------------------------------

// 11:
function isEqualNumberOfXandOs(str) {
  const LOWER_CASE_STR = str.toLowerCase();
  let countX = 0;
  let countO = 0;
  for (let i = 0; i < str.length; i++) {
    if (LOWER_CASE_STR[i] === "x") {
      countX++;
    } else if (LOWER_CASE_STR[i] === "o") {
      countO++;
    }
  }
  if (countX === 0 && countO === 0) {
    return `${true}: there is no instance of either "x" or "o"`;
  } else if (countX === countO) {
    return `${true}: we have the same number of "x" and "o"s`;
  } else if (countX !== countO) {
    return `${false}: panic stations, we do not have the same number of "x" and "o"s`;
  }
}
console.log(isEqualNumberOfXandOs("ooxx"));
console.log(isEqualNumberOfXandOs("xooxx"));
console.log(isEqualNumberOfXandOs("ooxXm"));
console.log(isEqualNumberOfXandOs("zpzpzpp"));
console.log(isEqualNumberOfXandOs("zzoo"));
//--------------------------------------------------

// 12:
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(10));
