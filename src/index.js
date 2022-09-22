console.log("Hello, Mary!");
// ____________________________________;

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   const stopword1 = "spam";
//   const stopword2 = "sale";
//   message = message.toLowerCase();
//   result = message.includes(stopword1) || message.includes(stopword2);

//   // Change code above this line
//   return result;
// }

// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//   return result;
// }

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
let price;

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
    price = 20;
    break;

  case 2:
    price = 30;
    break;

  case 3:
    price = 50;
    break;

  default:
    console.log("Такого количества звезд нет");
}

console.log(price);

// 1. назначить переменные

const option = 1;
let message = "";

//  2. Записать свитч выбора опции

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

// 3. Сделать лог месседж

console.log(message);

// Цыклы. Цыкл for

for (let i = 10; i < 20; i += 1) {
  console.log(i);
}

console.log("jsdjs");

console.log("jsdjs");

console.log("jsdjs");

// Цикл for
// Общая сумма зарплаты работникам, которая генерится случайными числами от 500 до 5000
// Перемненная зп totalSalary, переменная по работникам employees. Принимаем количество работников произвольное - 4 например
// 1. назначаем переменнные
const employees = 4;
let totalSalary = 0;
// если нет работников тотал салари принимем равным нулю, поскольку эта пременная будет меняться, принимаем ее через let
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

const x = Math.round(Math.random() * 100 + 1); // 1-100
let userInput;

do {
  userInput = Number(promt("Enter a numb (1-100)"));

  if (x > userInput) {
    console.log("x >", userInput);
  } else if (x < userInput) {
    console.log("x <", userInput);
  }
} while (x !== userInput);

console.log("You won!");
