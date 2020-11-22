const number = [1,24,15,2,5,6,20];
const myMagic = 5;

// к каждому элементу списка прибавить заданное число
const sum = (item) => item + myMagic
const myFunc1 = number.map(item => item + myMagic);
const myFunc2 = number.map(sum);

// каждый элемент списка умножить на заданное число
const mult = (item) => item * myMagic
const myFunc3 = number.map(item => item * myMagic);
const myFunc4 = number.map(mult);

// по исходному списку сформировать список пар, где вторым элементом списка является заданное число
const pair = (elem) => [elem, myMagic]
const myFunc5 = number.map(item => [item, myMagic]);
const myFunc6 = number.map(pair);

console.log(myFunc1);
console.log(myFunc2);
console.log(myFunc3);
console.log(myFunc4);
console.log(myFunc5);
console.log(myFunc6);