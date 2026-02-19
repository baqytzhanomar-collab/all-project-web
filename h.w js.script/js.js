/*
let myObject = {
    base: 2,
    a: function (y) {
        return Math.pow(y - this.base, y);
    }
};
let y = Number(prompt("Введите число Y:"));
let result = myObject.a(y);
console.log("Результат:", result);


let bankAccount = {
    balance: 500,

    deposit: function (amount) {
        this.balance = this.balance + amount;
        return this.balance;
    },

    withdraw: function (amount) {
        if (amount > this.balance) {
            return "Недостаточно средств на счете";
        } else {
            this.balance = this.balance - amount;
            return this.balance;
        }
    }
};

let amount = Number(prompt("Введите сумму"));
let choice = prompt("Введите операцию: внести или снять");

if (choice === "внести") {
    alert(bankAccount.deposit(amount));
} else if (choice === "снять") {
    alert(bankAccount.withdraw(amount));
}
*/