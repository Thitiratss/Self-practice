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