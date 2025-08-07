// //todo Запитай у користувача його вік і виведи:
// //* - "Дитина", якщо менше 12
// //* - "Підліток", якщо від 12 до 18
// //* - "Дорослий", якщо від 18 до 60
// //* - "Пенсіонер", якщо більше 60

// const age = Number(prompt("Введи свій вік"));
// if (age < 12) {
//   console.log("Дитина");
// } else if (age >= 12 && age < 18) {
//   console.log("Підліток");
// } else if (age >= 18 && age < 60) {
//   console.log("Дорослий");
// } else if (age >= 60) {
//   console.log("Пенсіонер");
// }

//todo Задано секретне число (наприклад, 7)
//* Користувач вводить число — вивести:
//* - "Занадто мало"
//* - "Занадто багато"
//* - "Вгадав!"

// const defaultNum = 7;
// let num = Number(prompt("Вгадай число від 0 до 10"));

// while (num !== defaultNum) {
//   if (num < defaultNum) {
//     alert("Замало");
//   } else if (num > defaultNum) {
//     alert("Забагато");
//   }
//   num = Number(prompt("Спробуй ще"));
// }

// alert("Вгадав!");

//todo Користувач вводить номер дня тижня (1–7)
//* Вивести назву дня (Пн, Вт, Ср...)
//* Реалізуй через switch

// let key = Number(prompt("Введіть номер дня"));

// while (key < 1 || key > 7 || isNaN(key)) {
//   alert("Нема такого дня");
//   key = Number(prompt("Введіть існуючий номер дня"));

//   switch (key) {
//     case 1:
//       alert("Понеділок");
//       break;
//     case 2:
//       alert("Вівторок");
//       break;
//     case 3:
//       alert("Середа");
//       break;
//     case 4:
//       alert("Четверг");
//       break;
//     case 5:
//       alert("П'ятниця");
//       break;
//     case 6:
//       alert("Суббота");
//       break;
//     case 7:
//       alert("Неділя");
//       break;
//     default:
//       alert("нема такого дня");
//   }
// }

//todo Якщо користувач ввів логін і пароль — дозволити вхід
//* Але логін має бути "admin", а пароль "1234"
//* Якщо щось не так — вивести помилку

// const login = "admin";
// const password = "1234";

// let inputL = prompt("Введіть логін:");
// let inputP = prompt("Введіть пароль:");

// while (inputL !== login || inputP !== password) {
//   alert("Неправильний логін або пароль. Спробуй ще.");
//   inputL = prompt("Введіть логін:");
//   inputP = prompt("Введіть пароль:");
// }

// alert("Все добре! Ви увійшли.");

//todo У змінних isLoggedIn та hasSubscription — true або false
//* Вивести "Має доступ", якщо користувач авторизований і має підписку
//* Інакше — "Немає доступу"

// const isLoggedIn = true;
// const hasSubscription = true;

// if (isLoggedIn && hasSubscription) {
//   alert("Має доступ");
// } else {
//   alert("Немає доступу");
// }

//todo Є змінні: isCardAvailable, isEnoughMoney
//* Якщо хоча б одна з них false — покупка неможлива
//* Інакше — "Покупка здійснена"

// let isCardAvailable = prompt("Карта активна? (так/ні)") === "так";
// let isEnoughMoney = prompt("Маєте кошти? (так/ні)") === "так";

// while (!isCardAvailable || !isEnoughMoney) {
//   alert("Поповніть рахунок або активуйте карту");

//   isCardAvailable = prompt("Карта активна? (так/ні)") === "так";
//   isEnoughMoney = prompt("Маєте кошти? (так/ні)") === "так";
// }

// alert("Покупка здійснена");

//todo Користувач вводить email
//* Перевір чи є символ '@' у введеному рядку
//* Якщо є — "Email правильний", інакше — "Неправильний email"

// let email = prompt("Введіть емейл");
// if (email.includes("@")) {
//   alert("Email правильний");
// } else {
//   alert("Email неправильний");
// }

//todo Задача 8: Привітання по імені

//* Користувач вводить ім’я
//* Вивести його з великої літери (напр. "анна" → "Анна")

// const userName = prompt("Введіть ім'я");
// if (userName !== "") {
//   console.log(userName[0].toUpperCase() + userName.slice(1));
// }

//todo Задача 9: Цензура

//* Є фраза: "Це повна фігня!"
//* Замінити слово "фігня" на "***"
//* Вивести цензуровану фразу

// const frase = "Це повна фігня!";

// console.log(frase.replaceAll("фігня", "***"));

//todo Задача 10: Сума чисел
// Обчисли суму чисел від 1 до 100 за допомогою циклу for
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

//todo Задача 11: Парні числа
// Виведи всі парні числа від 2 до 20 включно

// for (let i = 2; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//todo Задача 12: Вгадай пароль
// За допомогою циклу while запитуй у користувача пароль,
// доки він не введе правильний ("qwerty")
// const password = "qwerty";
// let a = prompt("Введіть пароль.");
// while (password !== a) {
//   alert("Введіть правильний пароль");
//   a = prompt("Введіть пароль.");
// }

//todo Задача 13: Вивід символів
// Є рядок: "JavaScript"
// Виведи кожну літеру окремо в новому рядку
// const message = "Java Script";
// for (let i = 0; i <= message.length - 1; i++) {
//   console.log(message[i]);
// }

// ✅ Задача 14: Підрахунок голосних
// Умова:
// Користувач вводить речення. Порахуйте, скільки голосних букв (а, е, є, и, і, ї, о, у, ю, я) у введеному тексті.

// const word = prompt("Введіть речення");
// const lower = word.toLowerCase();
// const vowels = "аеєиіїоуюя";
// let count = 0;
// for (let i = 0; i < lower.length; i++) {
//   if (vowels.includes(lower[i])) {
//     count++;
//   }
// }
// alert(`У вас ${count} голосних в реченні`);

// ✅ Задача 15: Паляindrome Checker
// Умова:
// Користувач вводить слово. Перевір, чи є це слово паліндромом (читається однаково вперед і назад).

// const userWord = prompt("Введіть слово").toLowerCase();
// const userWordBack = userWord.split("").reverse().join("");
// if (userWord === userWordBack) {
//   alert("Це паліндром");
// } else {
//   alert("Це не паліндром");
// }

// ✅ Задача 16: Пошук найдовшого слова
// Умова:
// Користувач вводить речення. Знайди та виведи найдовше слово у цьому реченні.

const input = prompt("Введіть речення");
const inputArr = input.split(" ");
let longestWord = inputArr[0];
for (let i = 0; i < inputArr.length; i++) {
  if (inputArr[i].length > longestWord.length) {
    longestWord = inputArr[i];
  }
}
console.log(longestWord);
