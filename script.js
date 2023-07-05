//              node script                  - запуск через термінал ≡

//! ============================================================================
//? ----- Disemvowel Trolls (Негласні тролі) -----
//! ============================================================================
//? ТЕОРІЯ
//?        replace(a, b)       /[AEIOUaeioubd]/g       split(delimiter)       filter()        join
//*    Щоб перебрати елементи в рядку - використовується цикл for
//*          Елементи масиву vowels повинні бути рядками (обгорнути літери у лапки)
//               const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
//!               { str[i] = "" } - невірний запис
//*          У JS рядки (strings) є не змінними (immutable) об'єктами, - не можна змінити окремий символ рядка, присвоївши йому нове значення.
//*             Тому, намагання присвоїти порожній рядок "" до str[i] буде викликати помилку.
//*             Замість цього є - метод replace(a, b)
//?              'assert.strictEqual' є методом з бібліотеки 'chai'  - використовується для перевірки рівності двох значень
//               assert.strictEqual(actual, expected);
//*          Цей метод порівнює actual(фактичне значення), яке повертається з тестованої ф-ції або виразу, з expected (очікуване значення).
//*          Якщо фактичне значення точно дорівнює очікуваному значенню, тобто вони є строго рівними (як за типом, так і за значенням),
//*              тоді тест вважається успішним і не видає помилок. Наприклад:
//               assert.strictEqual(disemvowel("This website is for losers LOL!"),  "Ths wbst s fr lsrs LL!"  );
//*           Бібліотека 'chai' - популярна б-ка для тестування коду в JS, надає різні методи тверджень(assertions),
//*              які допомагають створювати автоматичні тести для перевірки правильності роботи коду.
//*           Має зручний синтаксис, широкі можливості тверджень і впроваджується легко. Вона також поєднується з іншими утилітами тестування, такими як фреймворк 'Mocha',
//*              що дозволяє створювати потужні тестові набори і виконувати їх у зручний спосіб.
//            Бібліотека в програмуванні - це збірка попередньо написаних і вкомпільованих функцій, класів, методів та інших компонентів,
//               які можуть використовуватися розробниками для розв'язання певних задач.
//! ================================================================================================

//* Тролі атакують ваш розділ коментарів!
//* Поширеним способом вирішення цієї ситуації є видалення всіх голосних із коментарів тролів, нейтралізуючи загрозу.
//* Ваше завдання — написати функцію, яка приймає рядок і повертає новий рядок із видаленням усіх голосних.
//* Наприклад, рядок "Цей веб-сайт для невдах LOL!" стане "Ths wbst s fr lsrs LL!".
//*      Примітка: для цієї ката 'y' не вважається голосною.
// A, E, I, O, U, a, e, i, o, u

//!            ----- ВАРІАНТ 1      цикл for і метод replace() -----

// function disemvowel(str) {
//   const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
//   for (let i = 0; i < str.length; i = i + 1) {
//     //!  Однак, при кожній заміні довжина рядка str змінюється, що призводить до неправильної обробки
//     if (vowels.includes(str[i])) {
//           / або 'i += 1' або за допомогою запису інкременту '++i'
//       str = str.replace(str[i], "");
//     }
//   }
//   return str;
// }

//?            ----- ВАРІАНТ 1      цикл for і метод includes() -----
// function disemvowel(str) {
//   const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
//   let result = "";
//   for (let i = 0; i < str.length; i += 1) {
//     if (!vowels.includes(str[i])) {
//       result += str[i];
//     }
//   }
//   return result;
// }
//?   -------------------------  indexOf  =>
// const disemvowel = (str) => {
//   const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   let newStr = "";
//   for (let i = 0; i <= str.length; i++) {
//     let char = str.charAt(i);
//     if (vowels.indexOf(char) == -1) {
//       newStr += char;
//     }
//   }
//   return newStr;
// };

//?            ----- ВАРІАНТ 2     методи split(delimiter)   filter()   includes()    test()   join() -----
// function disemvowel(str) {
//   const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
//   const characters = str.split("");
//   const filteredCharacters = characters.filter((a) => !vowels.includes(a));
//   const result = filteredCharacters.join("");
//   return result;
// }
//?   ------------------------- test()
// function disemvowel(str) {
//   return str
//     .split("")
//     .filter((a) => !/[AEIOUaeiou]/.test(a))
//     .join("");
// }
//?   -------------------------  toLowerCase()
// const vowels = "aeiou";
// function disemvowel(str) {
//   return str
//     .split("")
//     .filter((letter) => !vowels.includes(letter.toLowerCase()))
//     .join("");
// }
//?   -------------------------  toLowerCase()   indexOf   filter(function (el) {})
// function disemvowel(str) {
//   var vowels = ["a", "e", "i", "o", "u"];

//   return str
//     .split("")
//     .filter(function (el) {
//       return vowels.indexOf(el.toLowerCase()) == -1;
//     })
//     .join("");
// }

//?            ----- ВАРІАНТ 3   Використання регулярного виразу і методу replace(a, b) -----
// function disemvowel(str) {
//   const regex = /[AEIOUaeioubd]/g;
//   const result = str.replace(regex, "");
//   return result;
// }
//?   -------------------------
// function disemvowel(str) {
//   return str.replace(/[AEIOUaeiou]/g, "");
// }
//?   -------------------------
// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, "");
// }
//?   -------------------------
// disemvowel = (str) => str.replace(/[aeiou]/gi, "");
//?   -------------------------
// function disemvowel(str) {
//   return (str || "").replace(/[aeiou]/gi, "");
// }
//! console
// console.log(disemvowel("fbZosDeagI"));

//! Sample Tests
// const { assert } = require("chai");

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(
//       disemvowel("This website is for losers LOL!"),
//       "Ths wbst s fr lsrs LL!"
//     );
//     assert.strictEqual(
//       disemvowel(
//         "No offense but,\nYour writing is among the worst I've ever read"
//       ),
//       "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
//     );
//     assert.strictEqual(
//       disemvowel("What are you, a communist?"),
//       "Wht r y,  cmmnst?"
//     );
//   });
// });
//! ============================================================================
//? ----- Take a Ten Minutes Walk (Пройдіться десять хвилин) -----
//! ============================================================================
//* Ви живете в місті Картезія, де всі дороги викладені в ідеальну сітку. Ви прийшли на 10 хв раніше, тому вирішили піти на коротку прогулянку.
//*  Місто надає громадянам програму для створення прогулянок на їхніх телефонах — щоразу, коли ви натискаєте кнопку, вона надсилає вам рядок із однієї літери,
//*  що представляють маршрути прогулянки(наприклад, ['n', 's', 'w', 'е']). Ви завжди проходите лише 1 квартал для кожної літери(напрямку),
//*  і ви знаєте, що вам знадобиться 1 хв, щоб подолати один квартал міста, тому створіть ф-цію,
//*  яка повертатиме значення true, якщо прогулянка, яку вам надає програма, займе у вас рівно 10 хв (ви не хочете раніше чи пізніше!)
//*  і, звичайно, поверне вас до вихідної точки. В іншому випадку поверніть false.
// Примітка: ви завжди отримуватимете дійсний масив, що містить випадковий асортимент літер напрямків(лише «n», «s», «e» або «w»).
// Це ніколи не дасть вам порожній масив (це не прогулянка, це стояння!).

//?            ----- ВАРІАНТ 1      switch   for   x++ -----
// function isValidWalk(walk) {
//   if (walk.length !== 10) {
//     return false;
//   }

//   let x = 0; // початкові координати
//   let y = 0;

//   for (let i = 0; i < walk.length; i++) {
//     switch (walk[i]) {
//       case "n":
//         y++;
//         break;
//       case "s":
//         y--;
//         break;
//       case "e":
//         x++;
//         break;
//       case "w":
//         x--;
//         break;
//       default:
//         return false; // невірний напрямок
//     }
//   }
//   return x === 0 && y === 0; // повертає true, якщо повернулися в початкову точку
// }

//?            ----- ВАРІАНТ 2 -----
// function isValidWalk(walk) {
//   var dx = 0;
//   var dy = 0;
//   var dt = walk.length;

//   for (var i = 0; i < walk.length; i++) {
//     switch (walk[i]) {
//       case "n":
//         dy--;
//         break;
//       case "s":
//         dy++;
//         break;
//       case "w":
//         dx--;
//         break;
//       case "e":
//         dx++;
//         break;
//     }
//   }

//   return dt === 10 && dx === 0 && dy === 0;
// }
//?            ----- ВАРІАНТ 3 -----
// function isValidWalk(walk) {
//   function count(val) {
//     return walk.filter(function (a) {
//       return a == val;
//     }).length;
//   }
//   return (
//     walk.length == 10 && count("n") == count("s") && count("w") == count("e")
//   );
// }
//?            ----- ВАРІАНТ 4 -----
// function isValidWalk(walk) {
//   const north = walk.filter((item) => {
//     return item === "n";
//   }).length;
//   const south = walk.filter((item) => {
//     return item === "s";
//   }).length;
//   const east = walk.filter((item) => {
//     return item === "e";
//   }).length;
//   const west = walk.filter((item) => {
//     return item === "w";
//   }).length;

//   return walk.length === 10 && north === south && east === west;
// }
//?            ----- ВАРІАНТ 5 -----
// function isValidWalk(walk) {
//   var res = { n: 0, w: 0, s: 0, e: 0 };
//   walk.forEach((c) => res[c]++);
//   return walk.length === 10 && res.n == res.s && res.e == res.w;
// }
//?            ----- ВАРІАНТ 6 -----
// function isValidWalk(walk) {
//   return (
//     walk.length == 10 &&
//     !walk.reduce(function (w, step) {
//       return w + { n: -1, s: 1, e: 99, w: -99 }[step];
//     }, 0)
//   );
// }
//?            ----- ВАРІАНТ 7 -----
// function isValidWalk(walk) {
//   function count(c) {
//     return walk.filter(function (v) {
//       return v == c;
//     }).length;
//   }
//   return (
//     walk.length == 10 && count("w") == count("e") && count("n") == count("s")
//   );
// }
//?            ----- ВАРІАНТ 8 -----
// function isValidWalk(walk) {
//   if (walk.length != 10) return false;
//   var c = {};
//   walk.forEach(function (d) {
//     c[d] ? (c[d] += 1) : (c[d] = 1);
//   });
//   return c["w"] == c["e"] && c["n"] == c["s"];
// }
//! console
// console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); // true
// console.log(
//   isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
// ); // false

// console.log(isValidWalk(["e", "w"])); // false
// console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"])); // false

//! ============================================================================
//? Playing with digits  (Гра з цифрами)
//! ============================================================================
//* Деякі числа мають смішні властивості. Наприклад:
//* 89 --> 8¹ + 9² = 89 * 1
//* 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
//* 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

//* Дано натуральне число n, записане як abcd... (a, b, c, d... є цифрами) і натуральне число p
//* ми хочемо знайти таке натуральне число k, якщо воно існує, щоб сума цифр числа n, узятих до послідовних степенів p, дорівнювала k * n.
//* Іншими словами:
//* Чи існує ціле число k, наприклад: (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
//* Якщо це так, ми повернемо k, якщо ні, повернемо -1.

//* Примітка: n і p завжди задаються як суто додатні цілі числа.
// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.

// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

//! ============================================================================
//? (7) Friend or Foe?  (Друг чи ворог?)
//! ============================================================================
//* Створіть програму, яка фільтрує список рядків і повертає список лише з іменем ваших друзів.
//* Якщо в імені рівно 4 літери, будьте впевнені, це має бути ваш друг! В іншому випадку ви можете бути впевнені, що він не...
//* Приклад: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
//* тобто
//* друг ["Райан", "Кіран", "Марк"] `should Be` ["Райан", "Марк"]
//* Примітка: збережіть оригінальний порядок імен у виводі.

//?            ----- ВАРІАНТ 1 -----   filter()  =>
// function friend(friends) {
//   return friends.filter((name) => name.length === 4);
// }
//?            ----- ВАРІАНТ 2 -----
// function friend(friends) {
//   let set = [];
//   for (let i = 0; i < friends.length; i += 1) {
//     if (friends[i].length === 4) {
//       set.push(friends[i]);
//     }
//   }
//   return set;
// }
//?            ----- ВАРІАНТ 3 -----
// const friend = (friends) => friends.filter((friend) => friend.length == 4);
//?            ----- ВАРІАНТ 4 -----
// function friend(friends) {
//     //*Create new array called "myFriends" for add your friends
//   var i,
//     len = friends.length,
//     myFriends = [];

//   for (i = 0; i < len; i++) {
//      //*Check for names with length equal to four and it is not a number
//     if (friends[i].length == 4 && isNaN(friends[i])) {
//       myFriends.push(friends[i]);
//     }
//   }

//   return myFriends;
// }
//?            ----- ВАРІАНТ 5 -----
// const friend = (f) => f.filter((n) => isNaN(n) && n.length == 4);
//?            ----- ВАРІАНТ 6 -----
// function friend(friends) {
//   var realFriends = [];
//   for (i = 0; i < friends.length; i++) {
//     if (friends[i].length == 4 && isNaN(friends[i])) {
//       realFriends.push(friends[i]);
//     }
//   }
//   return realFriends;
// }
//?            ----- ВАРІАНТ 7 -----
// const friend = (friends) =>
//   friends.filter((f) => f.length == 4 && /^[a-zA-Z]+$/.test(f));
//?            ----- ВАРІАНТ 8 -----
// function friend(friends) {
//   return friends.reduce((res, x) => {
//     if (x.length == 4) {
//       res.push(x);
//       return res;
//     } else return res;
//   }, []);
// }
//! console
// console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));

//! ============================================================================
//? (7) Regex validate PIN code (Регулярний вираз перевірки PIN-коду)
//! ============================================================================
//* Банкомати дозволяють використовувати 4- або 6-значні PIN-коди, а PIN-коди можуть містити лише 4 або 6 цифр.
//* Якщо функція передає дійсний рядок PIN-коду, повертає true, інакше повертає false.

//?            ----- ВАРІАНТ 1 -----
// function validatePIN(pin) {
//   // const pinRegex = /^\d+$/; // Регулярний вираз для перевірки цифр
//   return /^\d+$/.test(pin) && (pin.length === 4 || pin.length === 6);
// }
//?            ----- ВАРІАНТ 2 -----
// function validatePIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin);
// }
//?            ----- ВАРІАНТ 3 -----
// const validatePIN = (pin) => /^(\d{4}$|\d{6}$)/.test(pin);
//?            ----- ВАРІАНТ 4 -----
// function validatePIN(pin) {
//   //return true or false
//   var n = pin.length;
//   if (n != 4 && n != 6) return false;
//   for (var i in pin) if (pin[i] > "9" || pin[i] < "0") return false;
//   return true;
// }
//?            ----- ВАРІАНТ 5 -----
// function validatePIN(pin) {
//   var reg = new RegExp("^([0-9]{4}|[0-9]{6})$");
//   return reg.test(pin);
// }

//! console
// console.log(validate("1234")); // true
// console.log(validate("12345")); //  false
// console.log(validate("a234")); //  false

//! ============================================================================
//? Find the next perfect square! (Знайдіть наступний ідеальний квадрат) перевірка на ціле число
//! ============================================================================
//* Можливо, ви знаєте кілька досить великих ідеальних квадратів. Але як щодо НАСТУПНОГО?
//* Завершіть метод findNextSquare, який знаходить наступний інтегральний ідеальний квадрат після переданого як параметра.
//* цілий повний квадрат — це таке ціле число n, що sqrt(n) також є цілим числом.

//* Якщо параметр сам по собі не є ідеальним квадратом, потрібно повернути - 1. Ви можете вважати, що параметр невід’ємний.

//?            ----- ВАРІАНТ 1 -----
// function findNextSquare(sq) {
// Check if n is the square of an integer
//   if (Math.sqrt(sq) % 1 !== 0) {
//     return -1;
//   }
// Finding the next integer square
//   sq = Math.sqrt(sq) + 1;
//   return sq ** 2;
// }

//?            ----- ВАРІАНТ 2 -----
// function findNextSquare(sq) {
//   const sqrt = Math.sqrt(sq);
//   if (Math.sqrt(sq) % 1 === 0) {
//     return (Math.sqrt(sq) + 1) ** 2;
//   } else return -1;
// }
//?            ----- ВАРІАНТ 3 -----
// function findNextSquare(sq) {
//   return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
// }
//?            ----------
// function findNextSquare(sq) {
//   var root = Math.sqrt(sq);
//   return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
// }
//?            ----------
// function findNextSquare(sq) {
//   let r = Math.sqrt(sq);
//   return r % 1 ? -1 : ++r * r;
// }
//?            ----- ВАРІАНТ 4 -----
// function findNextSquare(sq) {
//   var number = Math.sqrt(sq);
//   if (Math.round(number) === number) {
//     return Math.pow(++number, 2);
//   }
//   return -1;
// }
//?            ----- ВАРІАНТ 5 -----
// function findNextSquare(sq) {
//   var x = Math.sqrt(sq);
//   var y = x + "";    //  Перетворює значення змінної x в рядок, використовуючи конкатенацію з пустим рядком. Це зроблено для того, щоб перевірити, чи є квадратний корінь цілим числом.
//   var z = Number(x);   // Перетворює значення змінної x з рядка на число
//   if (y.indexOf(".") === -1) {    // Перевіряє, чи в рядковому представленні числа x є крапка (десяткова частина)  y.indexOf(".") повертає індекс першого входження крапки у рядок y. Якщо крапка не знайдена (індекс -1), це означає, що x є цілим числом (квадратом цілого числа).
//     return (z + 1) * (z + 1);
//   }
//   return -1;
// }
//! console
// console.log(findNextSquare(121)); // 144
// console.log(findNextSquare(625)); // 676
// console.log(findNextSquare(114)); // -1 since 114 is not a perfect square

//! ============================================================================
//?  String ends with?  Рядок закінчується на?
//! ============================================================================
// Завершіть розв’язання так, щоб воно повертало true, якщо перший переданий аргумент(рядок) закінчувався другим аргументом(також рядком).
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
//! ============================================================================
// Sum of Digits / Digital Root  (Сума цифр / цифровий корінь)
// Цифровий корінь — це рекурсивна сума всіх цифр числа.

// Дано n, візьміть суму цифр числа n. Якщо це значення містить більше однієї цифри, продовжуйте скорочувати таким чином,
// доки не вийде однозначне число.Вхідними даними буде невід’ємне ціле число.
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -- > 4 + 9 + 3 + 1 + 9 + 3 = 29  -- > 2 + 9 = 11  -- > 1 + 1 = 2

//! ============================================================================
//? Task 8   Vowel Count Підрахунок голосних   /[aeiou]/
//! ============================================================================
//* Повертає кількість (кількість) голосних у заданому рядку.
//* Ми будемо розглядати a, e, i, o, u як голосні для цієї ката (але не y).
//* Рядок введення складатиметься лише з малих літер та/або пробілів.

//?            ----- ВАРІАНТ 1 -----
// function getCount(str) {
//   return str.split("").filter((a) => /[aeiou]/gi.test(a)).length;
// }
//?            ----- ВАРІАНТ 2 -----
// function getCount(str) {
//   return (str.match(/[aeiou]/gi) || []).length;
// }
//?            ----- ВАРІАНТ 3 -----
// function getCount(str) {
//   var vowelsCount = 0;
//   var vowels = ["a", "e", "i", "o", "u"];
//   for (var i = 0; i < str.length; i++) {
//     for (var j = 0; j < vowels.length; j++) {
//       if (str[i] === vowels[j]) {
//         vowelsCount++;
//       }
//     }
//   }

//   return vowelsCount;
// }
//?            ----- ВАРІАНТ 4 -----
// function getCount(str) {
//   return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
// }
//?            ----- ВАРІАНТ 5 -----
// function getCount(str) {
//   return str.replace(/[^aeiou]/gi, "").length;
// }
//?            ----- ВАРІАНТ 6 -----
// function getCount(str) {
//   var vowelsCount = 0;
//   str.split("").forEach(function (x) {
//     if ((x == "a") | (x == "e") | (x == "i") | (x == "o") | (x == "u")) {
//       vowelsCount += 1;
//     }
//   });
//   return vowelsCount;
// }
//?            ----- ВАРІАНТ 7 -----
// function getCount(str) {
//   var vowelsCount = 0;
//   for (index in str) {
//     switch (str[index]) {
//       case "a":
//       case "e":
//       case "i":
//       case "o":
//       case "u":
//         vowelsCount++;
//         break;
//     }
//   }
//   return vowelsCount;
// }
//?            ----- ВАРІАНТ 8 -----
// function getCount(str) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   return str.split("").filter((letter) => {
//     return vowels.includes(letter) ? true : false;
//   }).length;
// }
//! console
// console.log(getCount("asdfgfodsusi")); //
//! ============================================================================

//! ============================================================================
//?    Beginner Series #1 School Paperwork (Серія для початківців №1. Шкільна документація)
//! ============================================================================
//* Ваші однокласники попросили вас скопіювати для них деякі документи. Ви знаєте, що є «n» однокласників, а документи мають «m» сторінок.
//* Ваше завдання підрахувати, скільки чистих сторінок вам потрібно. Якщо n < 0 або m < 0, поверніть 0.
//* n= 5, m=5: 25
//* n=-5, m=5:  0

//?            ----- ВАРІАНТ 1 -----
// function add(n, m) {
//   if (n < 0 || m < 0) {
//     return 0;
//   } else return n * m;
// }

//?            ----- ВАРІАНТ 2 -----
// const calculateBlankPages = (n, m) => (n < 0 || m < 0 ? 0 : n * m);

//?            ----- ВАРІАНТ 3 -----
// function calculateBlankPages(n, m) {
//   return n < 0 || m < 0 ? 0 : n * m;
// }
//?            ----------------
// function paperwork(n, m) {
//   return n > 0 && m > 0 ? n * m : 0;
// }
//! console
// console.log(add(5, 5)); // 25
// console.log(add(5, -5)); // 0
//! ============================================================================
//?    Binary Addition (Бінарне додавання)
//! ============================================================================
//* Реалізуйте функцію, яка додає два числа та повертає їхню суму в двійковому вигляді. Перетворення можна виконати до або після додавання.
//* Повернуте двійкове число має бути рядком.
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 -- > "1110"(5 + 9 = 14 in decimal or 1110 in binary)

//?            ----- ВАРІАНТ 1 -----
// function addBinary(a, b) {
//   const sum = a + b;
//   return sum.toString(2);
// }

//?            ----- ВАРІАНТ 2 -----
// function addBinary(a, b) {
//   return (a + b).toString(2);
// }

//?            ----- ВАРІАНТ 3 -----
// const addBinary = (a, b) => (a + b).toString(2);

//?            ----- ВАРІАНТ 4 -----
// function addBinary(a, b) {
//   var c = a + b;
//   var res = "";
//   while (c >= 1) {
//     var res = (c % 2) + res;
//     c = Math.floor(c / 2);
//   }
//   return res;
// }

//?            ----- ВАРІАНТ 5 -----
// function decimalToBinary(decimal) {
//   return (decimal >>> 0).toString(2);
// }

//?            ----- ВАРІАНТ 6 -----
// function addBinary(a, b) {
//   return decimalToBinary(a + b);
// }
//?            ----- ВАРІАНТ 7 -----
// const addBinary = (a, b) => Math.trunc(a + b).toString(2);

//?            ----- ВАРІАНТ 8 -----
// function addBinary(a, b) {
//   if (a.isIntiger && b.isIntiger) {
//     //!if all argument is intiger digits
//     return (a + b).toSting(2); //!ok , return a string
//   } else {
//     return (parseInt(a, 10) + parseInt(b, 10)).toString(2); //!if some of argument send as a string - parse values to 10 digits int. values and return as a binary
//   }
// }

//?            ----- ВАРІАНТ 9 -----
// function addBinary(a, b) {
//   // validate input
//   if (typeof a !== "number" || typeof b !== "number")
//     throw new Error("addBinary: invalid non-numeric input parameters!");
//   return ((a + b) >>> 0).toString(2);
// }

//! console
// const result = addBinary(5, 9);
// console.log(result); // Виведе "1110"
//! ============================================================================
//?    (7) Highest and Lowest (Найвищий і Найнижчий)
//! ============================================================================
//* У цьому маленькому завданні вам надається рядок чисел, розділених пробілами, і ви повинні повернути найбільше та найменше число
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
//* Усі числа є дійсними Int32, перевіряти їх не потрібно.
//* У вхідному рядку завжди буде принаймні одне число.
//* Вихідний рядок має складатися з двох чисел, розділених одним пробілом, причому першим є найвище число

function highAndLow(arr) {
  // const arr.split(" ");
  const maxNumber = Number(arr.split(" "));
  const minNumber = Math.min(arr.split(" "));
  return maxNumber;
}
// [maxNumber, minNumber]; Math.max
console.log(highAndLow("1 2 3 4 5"));
//! ============================================================================
//* Task 12
//! ============================================================================
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
//! ============================================================================
//* Task 13
//! ============================================================================

//! ============================================================================
//* Task 14
//! ============================================================================
//              node script                  - запуск через термінал ≡
//! ============================================================================
//* Task 15
//! ============================================================================

//! ============================================================================
//* Task 16
//! ============================================================================

//! ============================================================================
//* Task 17
//! ============================================================================

//! ============================================================================
//* Task 18
//! ============================================================================

//! ============================================================================
//* Task 19
//! ============================================================================

//! ============================================================================
//* Task 20
//! ============================================================================

//! ============================================================================
//* Task 21
//! ============================================================================

//! ============================================================================
//* Task 22
//! ============================================================================

//! ============================================================================
//* Task 23
//! ============================================================================

//! ============================================================================
//* Task 24
//! ============================================================================

//! ============================================================================
//* Task 25
//! ============================================================================

//! ============================================================================
//* Task 26
//! ============================================================================

//! ============================================================================
//* Task 27
//! ============================================================================

//! ============================================================================
//* Task 28
//! ============================================================================

//! ============================================================================
//* Task 29
//! ============================================================================

//! ============================================================================
//* Task 30
//! ============================================================================

//! ============================================================================
//* Task 31
//! ============================================================================

//! ============================================================================
//* Task 32
//! ============================================================================

//! ============================================================================
//* Task 33
//! ============================================================================

//! ============================================================================
//* Task 34
//! ============================================================================

//! ============================================================================
//* Task 35
//! ============================================================================

//! ============================================================================
//* Task 36
//! ============================================================================
