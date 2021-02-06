//---------------------------------------------------------------
// Задание 1 :
// Написать функцию, преобразующую число в объект. 
// Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
// в котором в соответствующих свойствах описаны единицы, десятки и сотни.
// Например, для числа 245 мы должны получить следующий объект: 
// {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее 
// сообщение с помощью console.log и вернуть пустой объект

// function numToObj(num) {
//     if (num > 999) {
//         alert('Введите неотрицательное число меньше 1000!');
//         return {
//             'единицы': null,
//             'десятки': null,
//             'сотни': null
//         }
//     } else {
//         let temp1 = num % 10;
//         num = (num - temp1) / 10;
//         let temp2 = num % 10;
//         num = (num - temp2) / 10;
//         return {
//             'единицы': temp1,
//             'десятки': temp2,
//             'сотни': num
//         }
//     }
// }
// console.log(numToObj(1000));
// console.log(numToObj(3));

//-----------------------------------------------------------------
// Задание 2:
// Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// 2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.

const cartObj1 = {
    title: 'Квадрокоптер',
    price: 1000,
    quantity: 3
};
const cartObj2 = {
    title: 'Вертолет',
    price: 1500,
    quantity: 4
};
const cartObj3 = {
    title: 'Самолет',
    price: 500,
    quantity: 10
};
const cartObj4 = {
    title: 'Гексакоптер',
    price: 2000,
    quantity: 5
};
const cartObj5 = {
    title: 'Октокоптер',
    price: 3000,
    quantity: 1
};
const cart = {
    goods: [cartObj1, cartObj2, cartObj3, cartObj4, cartObj5]
};

function countBasketPrice(cart) {
    totalPrice = 0;
    for (let i = 0; i < cart.goods.length; i++) {
        totalPrice += cart.goods[i].price * cart.goods[i].quantity;
    }
    return totalPrice;
};

console.log(countBasketPrice(cart));

// const cart = [
//     ['quadrocopter', 1000, 3],
//     ['helicopter', 1500, 4],
//     ['plane', 500, 10],
//     ['hexacopter', 2000, 5],
//     ['octocopter', 3000, 1]
// ];

// function countBasketPrice(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i][1] * arr[i][2];
//     }
//     return sum;
// }

// alert(countBasketPrice(cart));
