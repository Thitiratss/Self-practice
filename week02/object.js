// 1. Object Literals
// สร้าง object สำหรับ student แต่ละคน มี property: name, age, grades (array ของตัวเลข) 
// และ method getAverage() คืนค่าเฉลี่ยของ grades
const student = {
    name: "Thitirat",
    age: 20,
    grades: [70,80,90],
    getAverage(){
        const sum = this.grades.reduce((acc,grade) => acc + grade, 0);
        return sum / this.grades.length;
    }
}
console.log(student.getAverage())

// 2. Constructor Functions
//สร้าง constructor function Car ที่มี property: brand, model, year และ method getCarInfo() 
// คืน string "brand model (year)" สร้างรถ 3 คันแล้ว console.log ข้อมูลรถแต่ละคัน
function Car(brand,model,year){
    this.brand = brand
    this.model = model
    this.year = year
    this.getCarInfo = function(){
        return `${this.brand} ${this.model} brand model ${this.year}`
    }
}   

const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Honda", "Civic", 2019);
const car3 = new Car("Ford","Focus",2021);

console.log(car1.getCarInfo()); 
console.log(car2.getCarInfo()); 
console.log(car3.getCarInfo());

// 3. ES6 Classes
// สร้าง class BankAccount มี property: accountNumber, balance method: deposit(amount), withdraw(amount), getBalance() ลองสร้าง account สองบัญชี ทำการฝากและถอน แล้ว console.log ยอดเงิน
class BankAccount{
    constructor(accountNumber,balance){
        this.accountNumber = accountNumber
        this.balance = balance
    }
    deposit(amount){
        if(typeof amount === "number"){
            this.balance += amount  // บวกทางขวา
        }    
        else{
            console.log(`กรุณาป้อนตัวเลข`)
        }
    }
    withdraw(amount){
        if(typeof amount === "number"){
            if(amount > this.balance){
                console.log(`ยอดเงินไม่เพียงพอ`)
            }else{
                this.balance -= amount
            }
        } else{
            console.log(`กรุณาป้อนตัวเลข`)
        }
    }
    getBalance(){
        return this.balance
    }
}
const acc1 = new BankAccount("123",100);
console.log(acc1.getBalance());
acc1.deposit(1000)
console.log(acc1.getBalance());
acc1.withdraw(2000)
console.log(acc1.getBalance());

//4. Object.create()
// สร้าง object personProto ที่มี method greet() พิมพ์ "Hello, my name is [name]"
// ใช้ Object.create() สร้าง object ใหม่ 2 ตัว และกำหนด property name ให้แต่ละคน จากนั้นเรียก greet()
let personProto = {
    greet: function(){
        console.log(`Hello my name is ${this.name}`)
    }
}

let p1 = Object.create(personProto);
let p2 = Object.create(personProto);
p1.name = "Fern"
p2.name = "Pop"
p1.greet();
p2.greet();
p1.name = "New"
p1.greet();

//Object Destructuring
// Task:
// 1. ใช้ destructuring เอา name, math, english ออกมา
// 2. พิมพ์แบบ "Name: [name], Math: [math], English: [english]"
const students = {
  name: "Alice",
  age: 20,
  scores: {
    math: 90,
    english: 85,
    science: 95
  }
};

const {name, age ,scores} = students
console.log(name);

// Task:
// 1. ใช้ destructuring เอา count และชื่อของ user ตัวแรก
// 2. พิมพ์แบบ "Count: [count], First user: [name]"
const data = {
  users: [
    { name: "Bob", age: 25 },
    { name: "Carol", age: 22 }
  ],
  count: 2
};

const {users,count} = data
console.log(users[0].name)
console.log(count)

// Task:
// 1. เขียน function displaySize ที่รับ object options เป็น parameter
// 2. ใช้ destructuring ใน parameter เอา width, height, color (default: "red")
// 3. เปลี่ยนชื่อ width → w, height → h
// 4. พิมพ์แบบ "Width: [w], Height: [h], Color: [color]"
const options = {
  width: 800,
  height: 600
};
function displaySize({
  width: w, 
  height: h, 
  color = "red"   
}) {
  console.log(`Width: ${w}, Height: ${h}, Color: ${color}`);
}
displaySize(options);
//==========================================================================
//เขียน class Rectangle มี property width และ height
//method area() → return พื้นที่ method perimeter() → return ความยาวรอบรูป
class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    area(){
        return this.width * this.height
    }

    perimeter(){
        return 2 *(this.width * this.height)
    }
}
const rect1 = new Rectangle(10, 20);
const rect2 = new Rectangle(15, 15);
console.log(rect1)
console.log(rect2)

//เขียนฟังก์ชัน groupByCategory(products)
//รับค่าเป็น array ของ object แต่ละ object มี name และ category
//คืนค่าเป็น object ที่จัดกลุ่มสินค้าตาม category
function groupByCategory(products){
    let result = {};
    for(let item of products){
        if(!result[item.category]){
            result[item.category] = [];
        }
        result[item.category].push(item.name)
    }
    return result;
}
const items = [
  { name: "Apple", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" },
  { name: "Banana", category: "Fruit" },
  { name: "Cabbage", category: "Vegetable" },
];

console.log(groupByCategory(items));