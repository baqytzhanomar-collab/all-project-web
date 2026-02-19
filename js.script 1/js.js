/*let name = "Bahytzhan"
let surename ="Omar"
console. log (name,surename)
let x = 200;
let y = 200;
console.log(x,y)
console.log(x+y)
let a= 500;
let b = 500;
console.log(a,b)
console.log(a+b)
let d= 150;
let c = 150;
console.log(c,d)
console.log(c+d)

let age = 22
console.log=(22)
console.log=("Прощел год")

let num1 = Number(prompt());
let num2 = Number(prompt());
console.log(num1+num2);

let num10 = Number(prompt());
console.log(num10+5*/
/*let n = Number(prompt("Сан енгіз"));
console.log(n % 10);

let a= Number(prompt());
let b= Number(prompt())
let c= Number(prompt())
console.log((b**2-4*a*c)**1/2);

let result = 8 > 11;
console.log(result); 
 

 let number = Number(prompt("10"));

if (number > 100) {
  console.log("положительное");
}
*/
/*let num = Number(prompt("Сан енгізіңіз:"));

if (number1(num) >= 100 && number2(num) <= 999) {
  console.log(true);
}
*/
/*let a = Number(prompt())
if (a<1000){
    console.log("Спасибо за покупку")
}
if (a>=1000){
    console.log(a-a*10/100, "Спасибо за покупку")
}*/
/*let a = Number(prompt())
if (a>0){
    console.log("ПОЛОЖИТЕЛЬНОЕ")
}
else(a<0){
    console.log("Отрицательное")
};
if(a==0){
    console.log("Не положительное")
};
if(a==0){
    console.log("Не положительное и не Отрицательное")
}*/
/*let a = Number(prompt());

if (a >= 84) {
    console.log("Отлично");
} else if (a >= 64) {
    console.log("Хорошо");
} else {
    console.log("Учись");
}
*/
/*const hour = Number(prompt());

if (hour >= 0 && hour <= 11) {
  console.log("доброе утро");
} else if (hour >= 12 && hour <= 17) {
  console.log("добрый день");
} else if (hour >= 18 && hour <= 23) {
  console.log("добрый вечер");
}*/
/*let grade = 45
let admission= (grade>=50) ? ( "Допущен"): " не Допущен";
console.log("Допуск на экзамен: " + admission);
*/
/*let age = Number(prompt());
let access = (age >= 18) ? "Доступ разрешен" : "Доступ запрещен";
console.log(access); */
/*let weight = Number(prompt()); 
let price = (weight <= 5) ? 200 : 350;
console.log("Стоимость товара: " + price + " рублей");*/
/*let x = Number(prompt("Вес"));
let stat = prompt("Статус доставки")
if(x<=5){
    if(stat === 'express'){
        console.log("1000 рублей");
    }
    else if(stat === 'basic'){
        console.log("500 рублей");
    }
    else{
        console.log("Некорректный статус доставки")
    }
}
if(x>5){
    if(stat === 'express'){
        console.log("1500 рублей");
    }
    else if(stat === 'basic'){
        console.log("800 рублей");
    }
    else{
        console.log("Некорректный статус доставки")
    }
}*/
/*const n = Number(prompt());
let i=1
while(i<=n){
    console.log(i);
    i++;
}*/
/*let n = Number(prompt());
let a = 1;
while (a <= 10){
  console.log(n * a);
  a = a + 1;
}*/
/*let N = Number(prompt());
let result = 1;
let a = 0;
while (a < N){
  result = result * 2;
  a = a + 1;
}
console.log(result);*/
/*  let start = Number(prompt("Enter start number:"));
let end = Number(prompt("Enter end number:"));
let sum = 0;
for (let i = start; i <= end; i++){
    sum += i;
}
console.log(sum);*/
//Homework Task1
// let a=Number(prompt());
// let b=Number(prompt());
// let count=0;
// for(let i=b; i>=a; i--){
//     console.log(i)
// }

//Homework Task2
// let a=Number(prompt());
// count=0;
// for (let i = 1; i <= a; i += 2) {
//     count += i;
// }
// console.log(count);

//Homework Task3
// let a=Number(prompt());
// let b = 0;
// let c = 0;
// for (let i = 1; i <= a; i++) {
//     if (i % 2 === 0) {
//         b++;
//     } else {
//         c++;
//     }
// }
// console.log("Четных чисел:", b);
// console.log("Нечетных чисел:", c);

//Homework Task4
// let a = Number(prompt());
// let i=0;
// while(a<=1000){
//     a*=2;
//     i++;
// }
// console.log("Итоговое число:",a);
// console.log("Количество итераций:",i)

//Homework Task5
// let month = Number(prompt());
// let temp = Number(prompt());

// if (month === 12 || month === 1 || month === 2) {
//     console.log("Зима");
//     if (temp <= -25) {
//         console.log("Холодная зима");
//     }
// } else if (month === 3 || month === 4 || month === 5) {
//     console.log("Весна");
//     if (temp < 15) {
//         console.log("Прохладная Весна");
//     }
// } else if (month === 6 || month === 7 || month === 8) {
//      console.log("Лето");
//     if (temp >= 30) {
//         console.log("Жаркое Лето");
//     }
// } else if (month === 9 || month === 10 || month === 11) {
//     console.log("Осень");
//     if (temp < 0) {
//         console.log("Прохладная осень");
//     }
// } else {
//     console.log("Некорректный номер месяца");
// }
/* function calculateSum() {
    let sum = 0;
    for (let i = 1; i <= 5; i++) {
        sum += i;
    }
    console.log(sum);ppp
 }*/
/*
function calculateSum(){
    let a = (prompt());
    let b = a ** 2 ;
    console.log(b);
}
calculateSum();*/
/*
function calculateSum() {
    let a = Number(prompt("Enter first number:"));
    let b = Number(prompt("Enter second number:"));

    if (a > b) {
        console.log(a + " больше чем " + b);
    } else if (a < b) {
        console.log(b + " больше чем " + a);
    } else {
        console.log(a + " равен " + b);
    }
}

calculateSum();
*/
/*function calculateSum(){
    let a = Number(prompt("Enter first number:"));
    let b = Number(prompt("Enter second number:"));
    let c = Number(prompt("Enter third number:"));
    let d = Number(prompt("Enter fourth number:"));

    if (a >= b && a >= c && a >= d) {
    console.log(a);
} else if (b >= a && b >= c && b >= d) {
    console.log(b);
} else if (c >= a && c >= b && c >= d) {
    console.log(c);
} else {
    console.log(d);
}

}

calculateSum();*/
/*function calculateSum(){
    let a = Number(prompt("Enter first number:"));
    let b = Number(prompt("Enter second number:"));
    let c = (prompt());
    function sum(a,b) {
        return a+b;
    }
    function minus(a,b) {
        return a-b;
    }
    function mult(a,b) {
        return a * b;
    }
    function division(a,b) {
        return a / b;
    }
    if ( c === "+"){
        console.log(sum(a,b));
    }
    else if ( c === "-"){
        console.log(minus(a,b));
    }
    else if ( c === "*"){
        console.log(mult(a,b));
    }
    else if ( c === "/"){
        console.log(division(a,b));
    }
    else{
        console.log("INVALID operation")
    }
}
calculateSum();*/
/*function checkTriangleExistence(a,b,c){
    if ((a+b)>c || (a+c)>b || (c+b)>a){
        return "Треугольник с такими сторонами существует";
    } else {
        return "Треугольник с такими сторонами не существует";
    }
}
let a = Number(prompt("Введите длину первой стороны:"));
let b = Number(prompt("Введите длину второй стороны:"));
let c = Number(prompt("Введите длину третьей стороны:"));

console.log(checkTriangleExistence(a, b, c)); */
/*let a = prompt("Марка Машины")
let b = prompt("дизайн машины")
let car={
a,
b
}
console.log(car.a, car.b)*/
/*let subj = prompt("Subject:");
let mark = prompt("Mark:");

let student = {
    subject: subj,
    mark: mark,
};

console.log("Специальность студента: " + student.subject);
console.log("Средний балл студента: " + student.mark);*/
/*let city = prompt("Место назначения:");
let date = prompt("Дата начала путешествия:");
let day = prompt("Длительность путешествия (в днях):");

let trip = {
    city: city,
    date: date,
    day: day,
};

console.log(trip.city);
console.log(trip.date);
console.log(trip.day);
console.log(trip.date + " вы отправляетесь в " + trip.city + " на " + trip.day + " дней");*/
/*const person = {
    name: "Александр",
    age: 97,
    sayHello() {
        console.log("Hello");
    }
};*/
/*let a = +prompt();
let b = +prompt();
const x = { a,
    b,
    divide(){
        return a%b
    }

}
 console.log(x.divide)*/
/*console.log("Да?\nАлё!\nда да?\nНу как там с \"деньгами\"?\nА?\nКак с \"деньгами\"-то там?\nЧё с \"деньгами\"?\nЧё");*/
/*const name = prompt();
const age = prompt();
const result = `Имя: ${name}, Возраст: ${age} лет`
console.log(result);*/


/*let money = Number(prompt("Доход:"));
let nomoney = Number(prompt("Расход:"));

const profit = {
    money,
    nomoney,
    divide() {
        return this.money - this.nomoney;
    }
};

const result = `Ваша прибыль составляет ${profit.divide()} рублей`;
console.log(result);*/
/*function calculateTotal() {
    let product = prompt("Название товара:");
    let price = Number(prompt("Цена за штуку:"));
    let quantity = Number(prompt("Количество:"));

    console.log(
        "Вы выбрали " + product +
        " по цене " + price + " рублей за штуку.\n" +
        "Количество: " + quantity + " шт\n" +
        "Итого: " + (price * quantity) + " рублей"
    );
}

calculateTotal(); */
/*let text = prompt("Введите строку");
if(text.includes("д") || text.includes("н")) {
    console.log(text.toUpperCase())
         console.log(text.toLowerCase()) 
    }
*/
/*let text = prompt("Введите строку:");
for (let i = 0; i < text.length; i++) {
    console.log(text[i].toLowerCase());
}*/
// let a=prompt();
// for(let i=0; i<a.length;i++){
//     console.log(a[i].toLowerCase());}
/*let text = prompt("Введите строку:");

if (text.length < 2) {
    console.log("Строка слишком короткая");
} else {
    console.log(text[text.length - 2] + text[text.length - 1]);
}*/
/*const value = prompt();
if (isNaN(value) || value === "") {
  console.log("Вы ввели не число");
} else {
  console.log("Вы ввели число");
}*/


/*
const input = prompt();
const age = Number(input);
if (input === "" || isNaN(age)) {
  console.log("Ошибка: Введите ваш возраст");
} 
else if (age < 18 || age > 65) {
  console.log("Доступ запрещен");
} 
else {
  console.log("Доступ разрешен");
}*/
/*let users = [];

let name1 = prompt("Введите первое имя:");
let name2 = prompt("Введите второе имя:");

users.push(name1);
users.push(name2);

console.log(users);*/
/*let users = [];
let name1 = prompt();
let name2 = prompt();
let name3 = prompt();
users.push(name1, name2, name3);
console.log(users[0] , users[2]);*/


/*for (let i=0; i<numElements; i++) {
    const c = prompt();
    userArray.unshift(c);
}

for (const word of userArray) {
    const b = word.lenght;
    lengths.unshift(b);
}
 console.log(length);*/
/* let days = [
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
  'Воскресенье'
];

let users = [
  { id: 1, name: 'Иван', age: 30 },
  { id: 2, name: 'Мария', age: 25 },
  { id: 3, name: 'Алексей', age: 35 },
  { id: 4, name: 'Елена', age: 28 }
];

let months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь'
];

let result = [
  ...days,
  ...users,
  ...months
];

console.log(result);*/

/*const word=prom   pt();
console.log(word.split(","))*/
 
/*let prices = [1000, 2500, 3000, 1500];


function calculate(arr) {
    let sum = 0;

  
    for (let price of arr) {

      
        if (isNaN(price)) {
            console.log("Сан емес мән бар");
            return;
        }

        sum += price; 
    }

  
    let average = sum / arr.length;

    const result = {
        total: sum,
        avg: Math.round(average),
        count: arr.length
    };

    return result;
}

const data = calculate(prices);


if (data.avg >= 2000) {
    console.log(
        `Барлығы: ${data.total} тг, Орташа: ${data.avg}`.toUpperCase()
    );
} else {
    console.log(
        `Барлығы: ${data.total} тг, Орташа: ${data.avg}`.toLowerCase()
    );
}*/
/*1
let numbers = []; 
for (let i = 0; i < 3; i++) {
  let num = +prompt("Сан енгізіңіз:");
  numbers.push(num);
}
console.log(numbers);
 2
 let text = prompt("Жол енгізіңіз:");
console.log(text.toUpperCase());
3
let arr = [];
for (let i = 0; i < 5; i++) {
  let value = prompt("Элемент енгізіңіз:");
  arr.push(value);
}
console.log(arr[arr.length - 1]);
4

let arr = [];
let even = [];

for (let i = 0; i < 4; i++) {
  arr.push(Number(prompt()));
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    even.push(arr[i]);
  }
}
5
console.log(even);
 
 let a=[];
 let b=prompt();
 let c=prompt();
 let d=prompt();
 a.push(b,c,d);
 console.log(a.reverse());
6
let a=prompt();
 console.log(a[0].toLowerCase());

 let a=[];
 let a1=Number(prompt());
 let a2=Number(prompt());
 let a3=Number(prompt());
 a.push(a1,a2,a3);
console.log(a1+a2+a3)
7
 let a=Number(prompt()); if (a>0){
     console.log("positive");
 }
 else if (a<0){
     console.log("negative");
 }
 else{
     console.log("zero")
 }
8
 let a=Number(prompt());
 if (a%5===0){
    console.log("yes"); }
 else{
     console.log("no")
 } */
/*9
     let a = Number(prompt("Введите число:"));

if (a % 5 === 0) {
  console.log("yes");
} else {
  console.log("no");
}
*/
/*10
let n = Number(prompt("Введите число:"));

for (let i = 1; i <= 10; i++) {
  console.log(n + " x " + i + " = " + n * i);
}*/
/*11
let numbers = prompt("Введите числа через пробел").split(" ").map(Number);
let count = 0;

for (let num of numbers) {
  if (num > 0) count++;
}

console.log(count); */
/*12
let password = prompt("Введите пароль");

if (password.length >= 6) {
  console.log("strong");
} else {
  console.log("weak");
}
*/
/* (194)
let num = +prompt("1-ден 7-ге дейін сан енгізіңіз:");
let days = [
  "Дүйсенбі",
  "Сейсенбі",
  "Сәрсенбі",
  "Бейсенбі",
  "Жұма",
  "Сенбі",
  "Жексенбі"
];
if (num >= 1 && num <= 7) {
  console.log(days[num - 1]);
} else {
  console.log("Қате! 1-ден 7-ге дейін сан енгізіңіз.");
}*/


/* (195)
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
let text = prompt("Жол енгізіңіз:");
console.log(countVowels(text));*/
/*const dates = ["25.10.1917", "22.06.1941", "09.05.1945", "26.12.1991"];
const years = dates.map(function (date) {
  const parts = date.split(".");
  return parts[2];
});
console.log(years.join(", "));
*/
/*const capitals = {
    "Токио",
    "Афины",
    "Нью-Дели",
    "Сеул",
    "Джакарта",
    "Багдад",
    "Астана",
    "Москва",
    "Анкара"
};

const result = capitals.filter(capital => capital.startWith("А"));

console.log(result);  */  
/*
const capitals = [
  "Токио", 
  "Афины", 
  "Нью-Дели",
  "Сеул",
  "Джакарта", 
  "Багдад", 
  "Астана", 
  "Москва", 
  "Анкара"
];

const result = capitals.filter(city => city.startsWith("А"));
console.log(result);
*/



/*
let capitals = prompt().split(" ");
let result = capitals.filter(c =>
  capitals.includes("Андорра-Ла-Велла")
    ? c.endsWith("а")
    : c.endsWith("н")
);
console.log(result);

*/

/*
let input = prompt();
let arr = input.split(" ");

let result = arr.map(word => word.toUpperCase());

console.log(result);
*/


/*let input = prompt();
let names = input.split(", ");

let result = names.map(name => "Пока, " + name);

console.log(result);*/
/*const words = ["яблоко", "Банан", "Груша"];

const result = words.map((word, index) => `${index + 1}. ${word}`);

console.log(result);
*/
/*const numbers = [1, 2, 3, 4, 5];
const result = numbers.map(num => (num % 2 === 0 ? "even" : "odd"));
console.log(result);*/
/*214. 

const prices = [100, 250, 399];
const pricesMAP = prices.map(p => +(p * 1.12);

console.log(pricesMAP);
*/
/*215
const words = ["мир", "программа", "код", "алгоритм"];
console.log(words.filter(w => !w.includes("a")));
*/
/*216 
const text = "user, login, , panel";
console.log(text.includes("admin"));
*/

/*const a = Number(prompt());
const b = Number(prompt());
console.log(a >b ? a :b);*/

/*let n = Number(prompt());
if  (n % 3 === 0) console.log("Fizzbuzz");
else if (n % 3 === 0) console.log("Fizz");
else if (n % 5 === 0) console.log ("Buzz");
else console.log(n);
*/
/*
let a=prompt("Login:");
let b=prompt("Password:");
if (a=="admin" && b=="1234"){
console.log("welcome,admin");
}
else if (a=="user" && b=="0000"){
     console.log("welcome,user");
 }
else{
     console.log("access denied");
} 

/* 
const input = prompt();
const count = input.split(" ").filter(Boolean).length;
console.log(count);
 */

/*  
 const numbers = [5, -3, 10, -1, 8];
const positiveNumbers = numbers.filter(num => num >= 0);
const sum = positiveNumbers.reduce((total, num) => total + num, 0);
console.log(sum);
 */
/*const input = prompt("Введите год");
const year = Number(input);

if (isNaN(year)) {
    console.log("Введите корректный год");
} else if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Високосный год");
} else {
    console.log("Не високосный год");
}
*/







/*let a = Number(prompt("Введите первую сторону"));
let b = Number(prompt("Введите вторую сторону"));
let c = Number(prompt("Введите третью сторону"));

if (a + b > c && a + c > b && b + c > a ) {
    console.log("Можно постройть треугольник");
} else {
    console.log("Нельзя постройть треугольник");
}
    /*

/*
let n = Number(prompt);
let sum = 0
while(n > 0){
    sum += n % 10
    n =(n-n % 10 ) / 10
    console.log(sum)
}/*
/*234
let arr = [2,1,2,4,4,1];
let uniqueArr = [...new Set(arr)];
uniqueArr.sort((a, b ) => a - b);
console.log(uniqueArr); */