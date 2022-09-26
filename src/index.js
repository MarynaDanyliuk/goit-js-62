console.log("Hello, Mary!");
// ____________________________________;

function checkForSpam(message) {
  let result;
  // Change code below this line
  const stopword1 = "spam";
  const stopword2 = "sale";
  message = message.toLowerCase();
  result = message.includes(stopword1) || message.includes(stopword2);

  // Change code above this line
  return result;
}

function checkForName(fullName, name) {
  const result = fullName.includes(name); // Change this line
  return result;
}

function getShippingCost(country) {
  let message;
  // Change code below this line

  switch (
    country // Change this line
  ) {
    case "Australia":
      price = 170;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    case "Germany":
      message = "Sorry, there is no delivery to your country";
      break;
    case "China":
      price = 100;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    case "Chile":
      price = 250;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    case "Jamaica":
      price = 120;
      message = `Shipping to ${country} will cost ${price} credits`;
      break;
    case "Sweden":
      message = "Sorry, there is no delivery to your country";
      break;
    default:
      message = "Sorry, there is no delivery to your country";
  }
  // Change code above this line
  return message;
}

const x = getShippingCost("Australia");

console.log(x);
// ____________________________________;

const stars = 3;
let pricee;

// if (stars === 1) {
//   price = 20;
// } else if (stars === 2) {
//   price = 30;
// } else if (stars === 3) {
//   price = 50;
// } else if (stars === 4) {
//   price = 70;
// } else if (stars === 5) {
//   price = 120;
// } else {
//   console.log("Такого количества звезд нет");
// }

// ________________________

switch (stars) {
  case 1:
    pricee = 20;
    break;

  case 2:
    pricee = 30;
    break;

  case 3:
    pricee = 50;
    break;

  default:
    console.log("Такого количества звезд нет");
}

console.log(pricee);

// 1. назначить переменные

const option = 1;
let message = "";

// //  2. Записать свитч выбора опции

switch (option) {
  case 1:
    message = "Вы сможете забрать товар завтра с 12:00 в нашем офисе";
    break;

  case 2:
    message = "Курьер доставит заказ завтра с 9:00 до 18:00";
    break;

  case 3:
    message = "Посылка будет отправлена сегодня";
    break;

  default:
    message = "Вам перезвонит менеджер";
}

// // 3. Сделать лог месседж

console.log(message);

// // Цыклы. Цыкл for

for (let i = 10; i < 20; i += 1) {
  console.log(i);
}

console.log("jsdjs");

// Цикл for
// Общая сумма зарплаты работникам, которая генерится случайными числами от 500 до 5000
// Перемненная зп totalSalary, переменная по работникам employees. Принимаем количество работников произвольное - 4 например
// 1. назначаем переменнные
const employees = 4;
let totalSalary = 0;
// // если нет работников тотал салари принимем равным нулю, поскольку эта пременная будет меняться, принимаем ее через let
const minSalary = 500;
const maxSalary = 5000;

for (let i = 1; i < 5; i += 1) {
  const salary = Math.round(
    Math.random() * (maxSalary - minSalary) + minSalary
  );
  console.log(`ЗП работника номер ${i} - ${salary}`);

  totalSalary += salary;
}

console.log("totalSalary: ", totalSalary);

// скрипт подсчета суммы всех четных чисел в диапазоне от min до max
const min = 6;
const max = 13;
let total = 0;

for (let i = min; i <= max; i += 1) {
  console.log(i);
  if (i % 2 === 0) {
    console.log("четное: ", i);
  }
}
// _________

// const y = Math.round(Math.random() * 100 + 1); // 1-100
// let userInput;

// do {
//   userInput = Number(prompt("Enter a number (1-100)"));

//   if (y > userInput) {
//     console.log("y >", userInput);
//   } else if (x < userInput) {
//     console.log("y <", userInput);
//   }
// } while (y !== userInput);

// console.log("You won!");

// ___________________________________

// const result = 10 + 100 - 2 * 5;
// console.log(result);

// function multiply(a, b) {
//   a * b;
// }

// const array = ["a", "b", "c", "d", "e"];
// let array = ["a", "b", "c", "d", "e"];
const array = ["a", "b", "c", "d", "e"];
console.log(array);

// function getExtremeElements(array) {
//   array.splice(array[1], 3);
//   return array; // Change code above this line
// }

// console.log(getExtremeElements("a", "b", "c", "d", "e"));

// _____________________________________

const friends = ["Andriy", "Mary", "Misha", "Masha"];
console.table(friends);
const lastIndex = friends.length - 1;

for (i = 0; i <= lastIndex; i += 1) {
  friends[i] += "-1";
}
console.table(friends);

// _________________________________________

const title = "Andriy Mary Misha Masha";

function slugify(title) {
  let result;
  result = title.split(" ").join("-").toLowerCase();
  return result;
  // Change code above this line
}
console.log(title.split(" ").join("-").toLowerCase());
console.log(slugify("Andriy Mary Misha Masha"));

// _______________________________________________

function checkForSpam(message) {
  let result;

  const stopword1 = "spam";
  const stopword2 = "sale";
  message = message.toLowerCase();
  result = message.includes(stopword1) || message.includes(stopword2);

  return result;
}

function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line

  const allArray = firstArray.concat(secondArray);
  const allArray1 = allArray.slice(0, maxLength);

  if (allArray.length <= maxLength) {
    return allArray;
  }
  if (allArray.length > maxLength) {
    return allArray1;
  }
  return allArray;
  // Change code above this line
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));

// ________________________________________

// const dogs = [1, 2, 3, 4, 5, 6, 7];

// console.log(dogs.length);

// function calculateTotal(number) {
//   let total = 0;

//   for (let i = 0; i < dogs.length; i += 1) {
//     console.log(dogs[i]);
//     total += dogs[i];
//   }
// }

// console.log(calculateTotal(7));

const clients = ["Mango", "Ajax", "Poly"];

for (let i = 0; i < clients.length; i += 1) {
  console.log(clients[i]);
}

// __________________________

function findLongestWord(string) {
  // Change code below this line
  const words = string.split(" ");

  let biggestWord = words[0];

  for (let word of words) {
    if (word.length > biggestWord.length) {
      biggestWord = word;
    }
  }
  return biggestWord;
  // Change code above this line
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

function createArrayOfNumbers(min, max) {
  const numbers = [];

  let number;
  numbers[0] = min;

  for (i = min; i <= max - 1; i += 1) {
    number = numbers.push((min += 1));
  }

  return numbers;
}

console.log(createArrayOfNumbers(1, 3));

// _________________________________

function filterArray(numbers, value) {
  let filterNumbers = [];
  for (let number of numbers) {
    if (number > value) {
      filterNumbers.push(number);
    }
  }
  return filterNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));

// ________________________________________

function getCommonElements(array1, array2) {
  let array3 = [];
  for (let number of array1) {
    if (array2.includes(number)) {
      array3.push(number);
    }
  }

  return array3;
}

console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
