// const arr = [
//     {id: 1, price: 100},
//     {id: 2, price: 200},
//     {id: 3, price: 300},
//     {id: 4, price: 400}
// ];
// const arr5 = [100, 200, 300, 400, 500];
// const arr2 = arr.map(x => x.price * 2);
// const arr3 = arr.filter(item => item.id % 2 === 0).map(x => x.price * 2)
// const arr4 = arr5.reduce((acc, curr) => acc + curr, 0);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);
// console.log(arr5);
const users = [
    {name: "John", age: 25},
    {name: "Jane", age: 17},
    {name: "Alex", age: 32},
    {name: "Mia", age: 15},
]
// const arr = users.filter(item => item.name === "John" || item.name == "Alex").map(item => item.name);
// console.log(arr);
const cart = [
    {name: "Laptop", price: 1200},
    {name: "Mouse", price: 25},
    {name: "Keyboard", price: 80}];

// const arr1 = cart.reduce((acc, curr) => acc + curr.price, 0);
// console.log(arr1);
const people = [
    {first: "John", last: "Doe"},
    {first: "Anna", last: "Smith"}];

// const arr = people.map(user => user.first + " " + user.last);
// console.log(arr);
const products = [
    {name: "iPhone 14", price: 1200, inStock: true},
    {name: "MacBook", price: 1800, inStock: false},
    {name: "AirPods", price: 250, inStock: true},
    {name: "iPad Pro", price: 1100, inStock: true}];

// const arr = products.filter(item => item.price > 1000 && item.inStock);
// console.log(arr);
const students = [
    {name: "Riya", score: 92},
    {name: "Aman", score: 78},
    {name: "Sneha", score: 88},
    {name: "Karan", score: 65},
    {name: "Priya", score: 95}];
// const names = students.filter(item => item.score > 80).map(item => item.name);
// const avg = students
//     .filter(item => item.score > 80)
//     .reduce((acc, curr, _, arr) => acc + curr.score / arr.length, 0)
//     .toFixed(2);
// console.log(names);
// console.log(avg);
const items = [
    {name: "Smartphone", price: 32000},
    {name: "Charger", price: 1200},
    {name: "Headphones", price: 4500},
    {name: "Power Bank", price: 1800}
];
const arr = items
    .map(item => item.price > 1500)
    .filter(item => item * 0.2)
    .reduce((a, b) => a + b, 0);
console.log(arr);
