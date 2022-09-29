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

// // _______________________________________-
// function calculateTotalPrice(order) {
//   let total = 0;

//   for (const number of order) {
//     total += number;
//   }

//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// _________________________________________-

function getEvenNumbers(start, end) {
  // const numbers = [3, 4, 5, 6, 7, 8, 9, 10, 11];
  const numbers = [];
  const array = [];

  let number;
  numbers[0] = start;

  for (i = start; i <= end - 1; i += 1) {
    number = numbers.push((start += 1));
  }

  console.log(numbers);

  for (let i = 0; i <= numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      array.push(numbers[i]);
    }
  }
  return array;
}

console.log(getEvenNumbers(3, 11));

// __________________________________

function includes(array, value) {
  let message;

  for (let number of array) {
    // number === value ? "true" : "false";
    if (number === value) {
      message = "true";
      return message;
    }
    message = "false";
  }
  return message;
}

console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes([("apple", "plum", "pear", "orange")], "plum"));
console.log(
  includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
);
console.log(
  includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
);

// for (let i = 0; i <= array.length; i += 1) {
//   const number = array[i];
//   if (number === value) {
//     // return number;
//   }
//   return false;
// }

// // _________________________________________
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = { country: "Jamaica", city: "Kingston" };

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(values);
// console.log(keys);

function countProps(object) {
  let propCount = 0;
  let props = [];

  for (const prop in object) {
    if (object.hasOwnProperty(prop)) {
      // console.log(prop);
      props.push(prop);
      // propCount += Number(prop);
      // keys.push(key);
      // values.push(apartment[key]);
    }
  }
  // console.log(props);
  propCount = props.length;

  return propCount;
}

console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

function countTotalSalary(salaries) {
  let totalSalary = 0;

  const values = Object.values(salaries);
  for (let value of values) {
    totalSalary += value;
  }
  return totalSalary;
}

console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// _______________________________________________

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  let price;
  for (let product of products) {
    if (productName === product.name) {
      price = product.price;
      break;
    }
    if (productName !== product.name) {
      price = null;
    }
  }
  return price;
}

console.log(getProductPrice("Radar"));
console.log(getProductPrice("Engine"));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

function getAllPropValues(propName) {
  // Change code below this line
  let props = [];
  for (let product of products) {
    if (propName === "name") {
      props.push(product.name);
    }
    if (propName === "price") {
      props.push(product.price);
    }
    if (propName === "quantity") {
      props.push(product.quantity);
    }
  }

  return props;
  // Change code above this line
}

console.log(getAllPropValues("name"));

function calculateTotalPrice(productName) {
  // Change code below this line
  let total;
  for (let product of products) {
    // console.log(product);
    // console.log(product.price);
    // console.log(product.quantity);
    // console.log(product.price * product.quantity);
    if (productName === product.name) {
      total = product.price * product.quantity;
    }
  }

  return total;
  // Change code above this line
}

console.log(calculateTotalPrice("Radar"));
