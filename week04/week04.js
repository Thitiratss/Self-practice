// 1. หานักเรียนที่ได้คะแนน >= 50 และอยู่ class "A"
//    Return array ของชื่อเรียงตามตัวอักษร
//    Output: ['Alice','Charlie']
const students = [
  { name: "Alice", score: 70, class: "A" },
  { name: "Bob", score: 45, class: "B" },
  { name: "Charlie", score: 90, class: "A" },
  { name: "David", score: 55, class: "C" }
];

const topStudent = students
.filter(student => student.score >= 50)
.filter(student => student.class === "A")
.map(student => student.name)
console.log(topStudent)

// 2. array ของคำ ['hello','world','hi','JavaScript']
//    หาคำที่ยาวที่สุด แต่ถ้ามีหลายคำยาวเท่ากัน return ทั้งหมด
//    Output: ['JavaScript']
const array = ['hello','world','hi','JavaScript']
const result = []
const wordLength = array.reduce((acc,cur) =>
    cur.length > acc.length ? cur : acc
)
console.log(wordLength)

// 3. รวมทุกตัวอักษรไม่ให้ซ้ำ
// const words = ["apple", "banana", "grape"];
// รวมตัวอักษรทั้งหมด แต่ไม่เอาซ้ำ → "aplebnrg"
const words = ["apple", "banana", "grape"];
const uniqueWord = words.reduce((acc,arr) => {
  for(let i of arr){
    if(!acc.includes(i)){
      acc.push(i)
    }
  }
  return acc
},[]).join("")
console.log(uniqueWord)

// 4. array ของตัวเลข [5,3,9,1,10,2]
//    คืน array ตัวเลข > 4, เรียงจากมากไปน้อย แล้วบวก 1 ทุกตัว
//    Output: [11,10,6] // จาก [10,9,5] +1
const arr4 = [5,3,9,1,10,2]
const result4 = arr4.sort((a,b) => b - a).map(arr => arr + 1)
console.log(result4)

// 5. ให้ array ของตัวเลข [10, 25, 30, 45, 50, 60]
//    เขียนโค้ดหาผลรวมของเลขที่หาร 5 ลงตัว แต่ต้องตัดเลขที่มากกว่า 40 ออก
const arr5 = [10, 25, 30, 45, 50, 60]
const result5 = arr5.filter((arr) => arr < 40).filter((arr) => arr % 5 === 0).reduce((acc,arr) => acc + arr, 0)
console.log(result5)

// 6. ให้ array ของคำ ["apple", "banana", "pear", "kiwi"]
//    เขียนโค้ด return array ใหม่ที่เป็นความยาวของแต่ละคำ 
//    และตรวจสอบว่าทุกคำมีความยาว >= 3 หรือไม่ (true/false)
const arr6 = ["apple", "banana", "pear", "kiwi"]
const result6 = arr6.map(word => word.length).every(word => word >= 3)
console.log(result6)

// 7. จัดกลุ่มนักเรียนตามห้องเรียน (A, B, C)
const student = [
  { name: "Amy", class: "A" },
  { name: "Ben", class: "B" },
  { name: "Cara", class: "A" },
  { name: "Dan", class: "C" }
];
const classStudent = student.reduce((acc,cur) => {
  if(!acc[cur.class]){
    acc[cur.class] = [];
  }
  acc[cur.class].push(cur.name)
  return acc
},{})
console.log(classStudent)
