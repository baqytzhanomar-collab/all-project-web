///1
/*function calculateTotal(name, price, count) {
    let total = price * count;
    return `Вы выбрали ${count} товаров "${name}" по цене ${price} рублей за штуку. Итого: ${total} рублей.`;
}*/

///2
/*function calculateTotal(name, price, count) {
    console.log(`Вы выбрали "${name}" по цене ${price} рублей за штуку.\nКоличество: ${count} шт.\nИтого: ${price * count} рублей.`);
}*/

///3
/*let s = prompt();

if (s.includes('д') || s.includes('н')) {
    console.log(s.toUpperCase());
} else {
    console.log(s.toLowerCase());
}*/

///4
/*let s = prompt();

if (s.startsWith('ж') || s.startsWith('Ж')) {
    console.log(s.length);
} else {
    console.log("Попробуйте снова");
}*/

///5
/*let text = prompt();
let ch = prompt();

text = text.toLowerCase();
ch = ch.toLowerCase();

let count = 0;

for (let c of text) {
    if (c === ch) {
        count++;
    }
}
console.log(`Символ "${ch}" встречается ${count} раз(-а)`);*/

///6
/*let s = prompt();

let result = s
    .toLowerCase() 
    .split('') 
    .reverse()
    .join('');

console.log(result);*/

///7
/*let n = Number(prompt());

if (n < 0) {
    n = Math.abs(n);
}

let sqrt = Math.sqrt(n);

console.log(`Квадратный корень из ${n} равен ${sqrt}`);*/

///8
/*let r = Number(prompt());

let S = Math.PI * r * r;
let result = Math.pow(S, 3);

console.log(Math.round(result));*/
