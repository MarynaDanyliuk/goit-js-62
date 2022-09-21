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

const option = 1526;
let message = "";

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

console.log(message);

// Цыклы. Цыкл for

for (let i = 0; i < 5; i += 1) {
  console.log(i);
}

console.log("jsdjs");

console.log("jsdjs");

console.log("jsdjs");
