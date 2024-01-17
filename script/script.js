// 1. Поиск максимального числа: Условие: Напишите программу, которая находит максимальное число из массива и выводит его.

const arr = [45, 66, -32, 231, 5, 4, -96, 32, 7, 4, 9, 33, -7];

let maxNumber = arr[0];
for(const item of arr) {
    if(item > maxNumber) {
        maxNumber = item;
    }
}
console.log("The max number: ", maxNumber);

// 2. Генератор таблицы умножения: Условие: Выведите таблицу умножения для числа 5.
const mult = 5;
let res = 0;
console.log("Multiplication table for 5: ");
for (let i = 1; i <= 10; i++) {
    res = mult * i;
    console.log(`${mult} * ${i} = ${res}`);
}

// 3. Подсчет четных чисел: Условие: Напишите программу, которая подсчитывает количество четных чисел в заданном массиве.

let count = 0;
for(const item of arr) {
    if(item % 2 === 0) {
        count++;
    }
}
console.log("Number of even numbers: " + count);

// 4. Реверс массива: Условие: Напишите программу, которая переворачивает заданный массив.

let temp = 0;
for(let i = 0; i < arr.length/2; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
}
console.log("Array revers: " + arr);