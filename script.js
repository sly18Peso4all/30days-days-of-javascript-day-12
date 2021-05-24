//Exercises: Level 1
/*
1) Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’

2) The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
distance = 12

3) Write a pattern which identify if a string is a valid JavaScript variable

is_valid_variable('first_name') # True
is_valid_variable('first-name') # False
is_valid_variable('1first_name') # False
is_valid_variable('firstname') # True
*/

// Solution 1
let pattern = /\d+/g;
const text =
  " He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
let result = text.match(pattern);
let val = 0;
result.forEach((el) => {
  val += Number(el);
});

console.log(val);

// Solution 2
const patternTwo = /-?\d+/g;
const txt =
  "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.";
const replaced = txt.match(patternTwo);
let num = [];
replaced.forEach((el) => {
  num.push(Number(el));
});

let lastTwo = num.slice(-2);
let distance = 0;
lastTwo.forEach((el) => {
  distance += el;
});
console.log(distance);

// Solution 3
function is_valid_variable(valu) {
  if (valu.match(/^\d/) || valu.match(/-/)) {
    console.log(false);
  } else {
    console.log(true);
  }
}
is_valid_variable("first_name");
is_valid_variable("first-name");
is_valid_variable("1first_name");
is_valid_variable("firstname");

//Exercises: Level 2
//Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

console.log("");
console.log("");
console.log("");
console.log("Solution Exercise =================== 2");

// Solution 1
const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

const findMostFreqWords = (txt, n) => {
  const freqTable = {};
  const arr = [];
  const words = txt
    .replace(/[^\w\d\s]/g, "")
    .toLowerCase()
    .split(" ");
  for (const word of words) {
    if (freqTable[word]) {
      console.log((freqTable[word] += 1));
    } else {
      freqTable[word] = 1;
    }
  }

  for (const key in freqTable) {
    arr.push({ word: key, count: freqTable[key] });
  }

  // copying the array and sorting

  const sortedArr = arr.slice().sort((a, b) => {
    if (a.count < b.count) return 1;
    if (a.count > b.count) return -1;
    return 0;
  });
  return sortedArr.slice(0, n);
};
console.log(findMostFreqWords(paragraph, 3));

//Exercises: Level 3
//Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.

console.log("");
console.log("");
console.log("");
console.log("Solution Exercise =================== 3");

// Solution 1
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function cleanText(text, num) {
  let mostWord = {};
  let count = [];
  let regex = /[@$^&*+!_/*.,%;?3]/g;
  let words = text.replace(regex, "").toLowerCase().split(" ");
  for (const word of words) {
    if (mostWord[word]) {
      mostWord[word] += 1;
    } else {
      mostWord[word] = 1;
    }
  }

  for (const key in mostWord) {
    count.push({ word: key, count: mostWord[key] });
  }
  const sortedArr = count.slice().sort((a, b) => {
    if (a.count < b.count) return 1;
    if (a.count > b.count) return -1;
    return 0;
  });
  return sortedArr.slice(0, num);
}

console.log(cleanText(sentence, 5));
