//Basic Array literals +  spread operator 
// 1. Given a string, create an array of characters with added characters at start and end.
// Example input: "Hello", add '*' at start and '!' at end
// Expected output:

const { inflate } = require("zlib")

// ['*', 'H', 'e', 'l', 'l', 'o', '!']
let str = "Hello"
let ar1Ch = ['*',...str,'!']
console.log(ar1Ch)

// 2. Write a program to find the maximum number in an array of numbers (for example, [10, 99, 5, 77])
// Example input: [10, 99, 5, 77]
// Expected output: Max number is 99
let ar2 = [10,99,5,77]
let ar2Max = ""
for (let i = 0; i < ar2.length; i++ ){
    if(ar2[i] > ar2Max){
        ar2Max = ar2[i];
    }
}
console.log(ar2Max)

// 3. Combine two arrays using spread operator and print the combined array reversed.
// Example input: [1, 2, 3, 4] and [5, 6, 7, 8]
// Expected output:
// Combined reversed array: [8, 7, 6, 5, 4, 3, 2, 1]
let ar3 = [1,2,3,4]
let arr3 = [5,6,7,8]
let cloneAr3 = [...ar3,...arr3]
let revAr3 = [];
for (let i = 0; i < cloneAr3.length; i++){
    revAr3[i] = cloneAr3[cloneAr3.length - 1 -i];
}
console.log(revAr3);

// 4. Extract name property from an array of objects using map and spread operator.
// Example input: [{id:1, name:'Alice'}, {id:2, name:'Bob'}]
// Expected output:
// ['Alice', 'Bob']
let ar4 = [{id:1, name:'Alice'}, {id:2, name:'Bob'}]
// console.log(ar4[0].name)
let names = ar4.map(str => str.name)
console.log(names);

// 5. Write a function that takes an iterable and returns first and last elements as an array.
// Example input: "JavaScript"
// Expected output:
// ['J', 't']
function getFirstAndLast(iterable){
    let ar5 = [...iterable]
    return [ar5[0],ar5[ar5.length - 1]]
}
console.log(getFirstAndLast("JavaScript")); 

// 6. Merge a string into an array of characters and add extra strings at start and end.
// Example input: "JavaScript", add 'start' at start and 'end' at end
// Expected output:
// ['start', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't', 'end']
function addFirstAndLast(iterable){
    let ar6 = ['start',...iterable,'end']
    return ar6
}
console.log(addFirstAndLast("JavaScript")); 

// 7. Delete an item from an array and print the array and its length.
// Example input: ['apple', 'banana', 'cherry'], delete index 1
// Expected output:
// ['apple', empty, 'cherry']
// Length: 3
let ar7 = ['apple','banana','cherry'];
delete ar7[1];   //ลบ index แต่ length เท่าเดิม
console.log(ar7)
// นับจำนวน empty slots (undefined) ใน array
let emptyCount = 0;
for (let i = 0; i < ar7.length; i++){
    if(!(i in ar7)){
      emptyCount++
    }
}
console.log(emptyCount);

// 8. Add numbers at the start and end of an array using spread operator.
// Example input: [1, 2, 3], add 0 at start and 100 at end
// Expected output:
// [0, 1, 2, 3, 100] 
let ar8 = [1,2,3]
let addAr8 = [0,...ar8,100]
console.log(addAr8)

//เอาแบบบวกไปเรื่อยๆๆๆ
let cloneAr8 = []
for (let i = 0; i <= 100; i++){
    cloneAr8[i] = [i];
}

// console.log(cloneAr8)

// 9. Flatten a nested array of numbers using spread operator.
// Example input: [[1, 2], [3, 4], [5, 6]]
// Expected output:
// [1, 2, 3, 4, 5, 6]
let ar9 = [[1,2],[3,4],[5,6]]
let cloneAr9 = [...ar9[0],...ar9[1],...ar9[2]]

console.log(cloneAr9)

//==========================================================
// ทวน Array Methods 
// 1. map() แปลงข้อมูลใน array
// Given an array of user objects:
// [{name: "Alice", age: 28}, {name: "Bob", age: 35}, {name: "Carol", age: 22}]
// Create a new array of strings with the format:
// "Name: <name>, Age: <age>"
let user = [
    {name: "Alice", age: 28},
    {name: "Bob", age: 35},
    {name: "Carol", age:22}
];

let result = user.map(u => "Name:"+ u.name + " Age:" + u.age);
console.log(result)

// 2. filter() กรองเฉพาะสิ่งที่ตรงตามเงื่อนไข
// Given an array of products:
// [{id: 1, price: 99}, {id: 2, price: 250}, {id: 3, price: 50}]
// Return an array containing only the products with a price less than 100
let products = [
    {id: 1, price: 99},
    {id: 2, price: 250},
    {id: 3, price: 50}
];

let result2 = products.filter(p => (p.price > 100)).map(p => "id:" + p.id + " price:" + p.price)
console.log(result2);

// 3. find() หา element ตัวแรกที่ตรงเงื่อนไข แล้วคืนค่านั้น
// Given an array of tasks:
// [{id: 101, completed: false}, {id: 102, completed: true}, {id: 103, completed: false}]
// Find the first task that is not completed
let tasks = [
    {id: 101, completed: false},
    {id: 102, completed: true},
    {id: 103, completed: false}
]

let result3 = tasks.find(t =>(t.completed === false))
console.log(result3)

// use filter 

let results3 = tasks.filter(t3 => (t3.completed === false)).map(t3 => "id:" + t3.id + " completed:" + t3.completed)
console.log(results3) // return ค่าเป็น array

// 4. reduce() คำนวณตัวเลขใน array ให้รวมกันเป็นค่าเดียว แล้วแต่ว่าจะทำอะไรบวกลบคูณหาร
// Given an array of numbers:
// [10, 20, 30, 40, 50]
// Calculate the total sum of these numbers
let arr4 = [10,20,30,40,50]
let result4 = arr4.reduce((acc,num) => acc * num, 1);  // คูณต้องเป็น 1 
console.log(result4)

let results4 = arr4.reduce((acc,num) => acc + num, 0)
console.log(results4)

