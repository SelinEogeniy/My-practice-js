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
let key = Number(prompt("Введіть номер дня"));

while (key < 1 || key > 7 || isNaN(key)) {
  alert("Нема такого дня");
  key = Number(prompt("Введіть існуючий номер дня"));

  switch (key) {
    case 1:
      alert("Понеділок");
      break;
    case 2:
      alert("Вівторок");
      break;
    case 3:
      alert("Середа");
      break;
    case 4:
      alert("Четверг");
      break;
    case 5:
      alert("П'ятниця");
      break;
    case 6:
      alert("Суббота");
      break;
    case 7:
      alert("Неділя");
      break;
    default:
      alert("нема такого дня");
  }
}
