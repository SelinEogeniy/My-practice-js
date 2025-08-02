// ✅ 2. Конвертер валют
// Тема: Числа, арифметика, функції

// 🔹 Задача:
// Напиши функцію convertToUSD(amountUAH), яка приймає суму в гривнях і повертає суму в доларах. Курс фіксований — 1 USD = 40 UAH.

// function convertToUSD(amountUAH) {
// //   const fixCourse = 40;
//   return amountUAH / fixCourse;
// }
// console.log(convertToUSD(500));

// ✅ 3. Порахувати вік користувача
// Тема: Арифметичні операції

// 🔹 Задача:
// Створи змінну birthYear.Створи змінну currentYear.Обчисли і виведи в консоль вік користувача.

// function countAge(birthYear) {
//   const currentYear = 2025;
//   return currentYear - birthYear;
// }

// console.log(countAge(1992));

// ✅ 4. Перевірка на повноліття
// Тема: Оператори порівняння, if

// 🔹 Задача:
// Напиши функцію isAdult(age), яка повертає true, якщо користувач повнолітній (18+), інакше false.

// function isAdult(birthYear) {
//   const currentYear = 2025;
//   if (currentYear - birthYear < 18) {
//     return "Ти ще замалий";
//   } else {
//     return `Все добре`;
//   }
// }
// console.log(isAdult(2004));

// ✅ 5. Об'єднання рядків
// Тема: Конкатенація рядків

// 🔹 Задача:
// Оголоси дві змінні: firstName і lastName. Об’єднай їх у повне ім’я у форматі Привіт, <firstName> <lastName>!

// function sayHi(firstName, lastName) {
//   return `Привіт ${firstName} ${lastName}`;
// }

// console.log(sayHi("Selin", "Jax"));

// ✅ 6. Підрахунок символів у паролі
// Тема: Рядки, .length

// 🔹 Задача:
// Напиши функцію checkPasswordLength(password), яка приймає рядок і повертає повідомлення: "Your password is X characters long".
// function checkPasswordLength(password) {
//   return `Your passsword is ${password.length} characters long`;
// }

// console.log(checkPasswordLength("hellgate123"));

// ✅ 7. Розрахунок площі прямокутника
// Тема: Арифметика, функції

// 🔹 Задача:
// Напиши функцію getRectangleArea(width, height), яка повертає площу прямокутника (width × height).

// function getRectangleArea(width, height) {
//   return width * height;
// }

// console.log(getRectangleArea(2, 4));

// ✅ 8. Число в квадраті
// Тема: Операції з числами

// 🔹 Задача:
// Створи функцію square(n), яка повертає квадрат переданого числа.

// function square(n) {
//   return n ** 2;
// }

// console.log(square(9));

// ✅ 9. Калькулятор доставки
// Тема: Функції, шаблонні рядки

// 🔹 Задача:
// Напиши функцію getDeliveryMessage(country, fee), яка повертає рядок типу:
// "Delivery to <country> will cost <fee> credits".

// function getDeliveryMessage(country, fee) {
//   return `Delivery to ${country} will coast ${fee} credits`;
// }
// console.log(getDeliveryMessage("Kharkiv", 15));

// ✅ 10. Простий калькулятор
// Тема: Арифметика, оператори

// 🔹 Задача:
// Створи функцію calculate(a, b, operator), яка приймає два числа і оператор ("+", "-", "*", "/") і повертає результат операції.

// function calculate(a, b, operator) {
//   if (operator === "+") {
//     return a + b;
//   } else if (operator === "-") {
//     return a - b;
//   } else if (operator === "*") {
//     return a * b;
//   } else if (operator === "/") {
//     return a / b;
//   } else {
//     return `I dont know this operator`;
//   }
// }

// console.log(calculate(10, 5, "+")); // 15
// console.log(calculate(10, 5, "-")); // 5
// console.log(calculate(10, 5, "*")); // 50
// console.log(calculate(10, 5, "/")); // 2
// console.log(calculate(10, 5, "&"));

// ✅ 11. Автоматичний генератор цінника
// Тема: Шаблонні рядки, множення

// 🔹 Задача:
// Створи функцію createPriceTag(productName, unitPrice, quantity), яка повертає рядок:
// "<назва>: <ціна за одиницю> x <кількість> = <загальна сума> credits";

// function createPriceTag(productName, unitPrice, quantity) {
//   return `${productName}: ${unitPrice} x ${quantity} = ${
//     unitPrice * quantity
//   } credits`;
// }
// console.log(createPriceTag("Laptop", 1200, 3));

// ✅ 12. Поділ рядка навпіл
// Тема: Рядки, .slice(), .length

// 🔹 Задача:
// Напиши функцію splitStringInHalf(str), яка повертає дві половини рядка, розділені дефісом:
// "перша_половина-друга_половина"

// function splitStringInHalf(str) {
//   const halfStr = Math.floor(str.length / 2);0
//   const firstHalf = str.slice(0, halfStr);
//   const secondHalf = str.slice(halfStr);
//   return `${firstHalf} - ${secondHalf}`;
// }
// console.log(splitStringInHalf("abcdef")); // "abc-def"
// console.log(splitStringInHalf("abcdefg")); // "abc-defg"
// console.log(splitStringInHalf("JavaScript")); // "JavaS-cript"

// ✅ 13. Підрахунок кількості символів у повному імені
// Тема: Рядки, .length, шаблонні рядки

// 🔹 Задача:
// Створи функцію countFullNameLength(firstName, lastName), яка повертає повідомлення типу:
// "Full name '<First Last>' is X characters long"

// function countFullNameLength(firstname, lastName) {
//   const totalLength = firstname.length + lastName.length;
//   return `Full name ${firstname} ${lastName} is ${totalLength} characters long`;
// }
// console.log(countFullNameLength("Selin", "Eogeniy"));

// ✅ 14. Динамический баннер для товара
// Тема: Шаблонные строки, арифметика, .toUpperCase(), .length, строки

// 📋 Задача:
// Создай функцию createProductBanner(name, price, description), которая возвращает баннер в виде строки следующего вида:

// php-template
// Копировать
// Редактировать
// [PRODUCT: <NAME>] – <DESCRIPTION> (PRICE: <price>₴, SYMBOLS: <totalSymbols>)
// 📌 Что именно происходит:

// <NAME> — верхним регистром (name.toUpperCase())

// <DESCRIPTION> — просто строка описания

// <price> — как есть

// <totalSymbols> — общее количество символов в name + description.

function createProductBanner(name, price, description) {
  const totalLength = name.length + description.length;
  return `[PRODUCT: ${name.toUpperCase()}] - ${description} (PRICE: ${price}UAH, SYMBOLS: ${totalLength})`;
}

console.log(createProductBanner("laptop", 24000, "Ultrabook with 16GB RAM"));
// [PRODUCT: LAPTOP] – Ultrabook with 16GB RAM (PRICE: 24000₴, SYMBOLS: 29)
