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

// function getShippingCost(country) {
//   let message;
//   // Change code below this line

//   switch (
//     country // Change this line
//   ) {
//     case "Australia":
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case "Germany":
//       message = "Sorry, there is no delivery to your country";
//       break;
//     case "China":
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case "Chile":
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case "Jamaica":
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case "Sweden":
//       message = "Sorry, there is no delivery to your country";
//       break;
//     default:
//       message = "Sorry, there is no delivery to your country";
//   }
//   // Change code above this line
//   return message;
// }

// const x = getShippingCost("Australia");

// console.log(x);
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

// __________________________________________

// data = {
//   text: "Mary",
//   category: 4,
//   priority: 1,
// };

// const {text: "Mary", category: 4, priority: 1,} = data

function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
  const newObject = {
    category: category,
    priority: priority,
    completed: completed,
    ...data,
  };

  return newObject;
  // Change code above this line
}

console.log(
  makeTask({
    category: "Homemade",
    priority: "Low",
    text: "Take out the trash",
  })
);

// ________________________________

function findMatches(array, ...args) {
  const matches = []; // Don't change this line
  for (let arg of args) {
    if (array.includes(arg)) {
      matches.push(arg);
    }
  }
  // Change code above this line
  return matches;
}

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));

// ____________________________________________
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.getPotions());

// _____________________________________
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     const IndexOf = this.potions.indexOf(potionName);
//     return this.potions.splice(IndexOf, 1);

//   },
// };

// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],

  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    for (let potion of this.potions) {
      // console.log(potion);
      // console.log(potion.name);

      for (let key in potion) {
        if (newPotion[key] === potion[key]) {
          return `Error! Potion ${newPotion.name} is already in your inventory!`;
        }
        // return this.potions.push(newPotion);
      }
    }
    return this.potions.push(newPotion);
  },

  removePotion(potionName) {
    for (let potion of this.potions) {
      if (potionName === potion.name) {
        const potionIndex = this.potions.indexOf(potion);
        this.potions.splice(potionIndex, 1);
        return this.potions;
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },

  updatePotionName(oldName, newName) {
    console.log(this.potions);
    for (let potion of this.potions) {
      console.log(potion);
      if (potion.name === oldName) {
        potion.name = newName;
        return this.potions;
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
};

console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
console.log(atTheOldToad.addPotion({ name: "Speed potion", price: 460 }));
console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
console.log(atTheOldToad.removePotion("Dragon breath"));
console.log(atTheOldToad.removePotion("Speed potion"));
console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
console.log(
  atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
);

function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}

makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});
// Change code below this line

makePizza("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}`);
});

const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    if (this.pizzas.includes(pizzaName)) {
      return onSuccess(pizzaName);
    }
    const error = `There is no pizza with a name ${pizzaName} in the assortment.`;
    return onError(error);
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order("Smoked", makePizza, onOrderError);
pizzaPalace.order("Four meats", makePizza, onOrderError);
pizzaPalace.order("Big Mike", makePizza, onOrderError);
pizzaPalace.order("Vienna", makePizza, onOrderError);
console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

const calculateTotalPrice1 = (orderedItems) => {
  let totalPrice = 0;
  orderedItems.forEach((item) => {
    totalPrice += item;
  });
  return totalPrice;
};

// // console.log(calculateTotalPrice1([412, 371, 94, 63, 176]));

// // const filterArray = (numbers, value) => {
// //   const filteredNumbers = [];

// //   numbers.forEach((number) => {
// //     if (number > value) {
// //       filteredNumbers.push(number);
// //     }
// //   });

// //   return filteredNumbers;
// // };

// // const getCommonElements = (firstArray, secondArray) => {
// //   const commonElements = [];

// //   firstArray.forEach((element) => {
// //     if (secondArray.includes(element)) {
// //       commonElements.push(element);
// //     }
// //   });

// //   return commonElements;
// // };

// function changeEven(numbers, value) {
//   // Change code below this line
//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
//   //     numbers[i] = numbers[i] + value;
//   //   }
//   // }
//   const newArray = [];

//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       number += value;
//       newArray.push(number);
//       return number;
//     }
//     if (number % 2 !== 0) {
//       newArray.push(number);
//     }
//   });
//   // Change code above this line
//   return newArray;
// }

// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));
// console.log(
//   changeEven(
//     [9, 24, 9, 22, 8, 22, 23, 16, 12, 14, 23, 15, 19, 18, 11, 20, 18],
//     17
//   )
// );

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((planet) => {
//   return planet.length;
// });

// console.log(planetsLengths);

// const getUserNames = (users) => {
//   return users.map((user) => {
//     return user.name;
//   });
// };

// const getUserEmails = (users) => {
//   return users.map((user) => {
//     return user.email;
//   });
// };

// // const books = [
// //   {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     genres: ["adventure", "history"],
// //   },
// //   {
// //     title: "Beside Still Waters",
// //     author: "Robert Sheckley",
// //     genres: ["fiction", "mysticism"],
// //   },
// //   {
// //     title: "Redder Than Blood",
// //     author: "Tanith Lee",
// //     genres: ["horror", "mysticism", "adventure"],
// //   },
// // ];
// // // Change code below this line
// // const allGenres = books.flatMap((book) => book.genres);
// // const uniqueGenres = allGenres.filter(
// //   (genre, index, allGenres) => allGenres.indexOf(genre) === index
// // );

// // const books = [
// //   {
// //     title: "The Last Kingdom",
// //     author: "Bernard Cornwell",
// //     rating: 8.38,
// //   },
// //   {
// //     title: "Beside Still Waters",
// //     author: "Robert Sheckley",
// //     rating: 8.51,
// //   },
// //   {
// //     title: "The Dream of a Ridiculous Man",
// //     author: "Fyodor Dostoevsky",
// //     rating: 7.75,
// //   },
// //   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// //   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// // ];

// // const MIN_RATING = 8;
// // const AUTHOR = "Bernard Cornwell";
// // // Change code below this line

// // const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);

// // const booksByAuthor = books.filter((book) => book.author === AUTHOR);

// // console.log(topRatedBooks);
// // console.log(booksByAuthor);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];

// const getFriends = (users) => {
//   const allFriends = users.flatMap((user) => user.friends);
//   const uniqueFriends = allFriends.filter(
//     (friend, index, allFriends) => allFriends.indexOf(friend) === index
//   );
//   return uniqueFriends;
// };

// console.log(getFriends);

// const getActiveUsers = (users) => {
//   return users.filter((user) => user.isActive === true);
// };

// const getInactiveUsers = (users) => {
//   return users.filter((user) => user.isActive === false);
// };

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);

// const getUserWithEmail = (users, email) => {
//   return users.find((user) => user.email === email);
// };

// const isEveryUserActive = (users) => {
//   return users.every((user) => user.isActive === true);
// };

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + player.playtime / player.gamesPlayed;
// }, 0);

// const calculateTotalBalance = (users) => {
//   return users.reduce((total, user) => {
//     return total + user.balance;
//   }, 0);
// };

// const getTotalFriendCount = (users) => {
//   return users.reduce((totalFriends, user) => {
//     return totalFriends + user.friends.length;
//   }, 0);
// };

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];

const sortByDescendingFriendCount = (users) => {
  return [...users].sort(
    (firstUser, secondUser) =>
      firstUser.friends.length - secondUser.friends.length
  );
};
console.log(sortByDescendingFriendCount(users));

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = [...books]
  .filter((book) => book.rating > MIN_BOOK_RATING)
  .sort((firstBook, secondBook) =>
    firstBook.author.localeCompare(secondBook.author)
  )
  .map((book) => book.author);

console.log(names);

const getNamesSortedByFriendCount = (users) => {
  return [...users]
    .sort(
      (firstUser, secondUser) =>
        firstUser.friends.length - secondUser.friends.length
    )
    .map((user) => user.name);
};
console.log(getNamesSortedByFriendCount(users));

const getSortedFriends = (users) => {
  const allFriends = [...users].flatMap((user) => user.friends);

  const uniqueFriends = allFriends.filter(
    (friend, index, allFriends) => allFriends.indexOf(friend) === index
  );

  uniqueFriends.sort((firstFriend, secondFriend) =>
    firstFriend.localeCompare(secondFriend)
  );

  return uniqueFriends;
};

console.log(getSortedFriends(users));

const getTotalBalanceByGender = (users, gender) => {
  const usersGender = users.filter(
    (user, index, users) => user.gender === gender
  );
  return usersGender.reduce((total, user) => {
    return total + user.balance;
  }, 0);
};
console.log(getTotalBalanceByGender(users, "male"));

// _________ 5 module_____________

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],
  // Change code below this line
  getOrdersLog() {
    return this.orders
      .map((order) => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
  },
  getEmails() {
    const emails = this.orders.map((order) => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter((order) => order.email === email);
  },
  // Change code above this line
};

const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};
// Change code below this line
const child = Object.create(parent);
// const child = { name: "Jason", age: 27, __proto__: parent };

// Change code above this line
child.name = "Jason";
child.age = 27;

const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};
// Change code below this line

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// Change code above this line

// class Car {
//   // Change code below this line
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }

// console.log(new Car("Audi", "Q3", 36000));
// console.log(new Car("BMW", "X1", 38900));

//  деструктуризаціяю Патерн Об єкт параметрів

// class Car {
//   // Change code below this line
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }

// console.log(new Car({ brand: "BMW", model: "X5", price: 58900 }));

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
//   getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     return (this.price = newPrice);
//   }
//   // Change code above this line
// }

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }
  addItem(newItem) {
    return this.items.push(newItem);
  }
  removeItem(itemToRemove) {
    const indexOf = this.items.indexOf(itemToRemove);

    return this.items.splice(indexOf, 1);
  }
}

// Change code above this line
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }
  getValue() {
    return this.value;
  }

  padEnd(str) {
    return (this.value = this.value + str);
  }

  padStart(str) {
    return (this.value = str + this.value);
  }
  padBoth(str) {
    this.padEnd(str);
    this.padStart(str);
    // return (this.value = str + this.value + str);
  }
}

console.dir(StringBuilder);
// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."

builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

// class Car {
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }
// console.log(new Car({ brand: "bmw", model: "X5", price: 58900 }));

class Car {
  // Change code below this line
  static MAX_PRICE = 50000;

  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
    if (this.#price >= Car.MAX_PRICE) {
      return (this.#price = 49000);
    }
    return (this.#price = newPrice);
  }
}
console.log(Car.MAX_PRICE);

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price) {
//     if (price > this.#MAX_PRICE) {
//       return "Error! Price exceeds the maximum";
//     }

//     return "Success! Price is within acceptable limits";
//   }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line

// class Admin extends User {
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
// }

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//   }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Change code below this line

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    if (this.blacklistedEmails.includes(email)) {
      return true;
    }
    return false;
  }

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
    this.blacklistedEmails = [];
  }

  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true
