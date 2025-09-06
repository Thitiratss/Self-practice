// การบ้านจากในห้อง
function getFreqOfWords(sentence){
     if( sentence === null || sentence === undefined ){
        return undefined
     }
    let result = {};
    let word = sentence.split(" ")
    for(let i of word){  // วนค่า element
        if(result[i]){
            result[i] += 1;
        }else{
            result[i] = 1;
        }
    }
    return result;
}
console.log(getFreqOfWords('Today is present and present is your gift'))
console.log(getFreqOfWords(null));
console.log(getFreqOfWords(undefined));

//===========================================================
//Functions Practice
// โจทย์ 1: เขียนฟังก์ชัน reverseString(str) รับ string
// คืนค่า string ที่กลับด้าน console.log(reverseString("hello")); // "olleh"
function reverseString(str){
    if( str === null || str === undefined){
        return undefined
    }
    let result = "";
    for(let word of str){
        // result = result + word
        result = word + result
    }
    return result
}
console.log(reverseString("hello")); // "olleh"

function reverseString2(str){
    if( str === null || str === undefined){
        return undefined
    }
    let result = "";
    for(let i = str.length - 1; i >= 0; i--){
        result += str[i]
    }
    return result
}
console.log(reverseString2("hello")); // "olleh"

// โจทย์ 2: เขียนฟังก์ชัน sumArray(numbers)
// รับ array ของตัวเลข คืนค่าผลรวมของทุกตัวใน array
// console.log(sumArray([1, 2, 3, 4])); // 10
function sumArray(numbers){
    let sumArr = 0;
    for(let i of numbers){
        if(typeof i === "number")
            sumArr += i;
    }
    return sumArr
}
console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray(['h',1,2,'o'])); // 3

// โจทย์ 3: เขียนฟังก์ชัน countVowels(str) รับ string
// คืนค่าจำนวนตัวอักษรสระ (a, e, i, o, u) ที่ปรากฏใน string
// console.log(countVowels("JavaScript")); // 3 (a, a, i)
function countVowels(str){
    if(str === null || str === undefined){
        return undefined
    }
    let result = {};
    for(let i of str.toLowerCase()){
        if(i === "a" || i === "e" || i === "i" ||
            i === "o" || i === "u" )
            if(result[i]){
                result[i] += 1;
            }else{
                result[i] = 1;
            }
    }
    return result;
}
console.log(countVowels("JavAScript")); // { a: 2, i:1 }

function countVowels2(str){
    if(str === null || str === undefined){
        return undefined
    }
    let result = "";
    let count = 0;
    for(let i of str.toLowerCase()){
        if(i === "a" || i === "e" || i === "i" ||
            i === "o" || i === "u" ){
            result += i
            count ++
        }
    }
    return `vowels : ${result} , count : ${count}`
}
console.log(countVowels2("JavaScript")); // { a: 2, i:1 }

// โจทย์ 4 : เขียนฟังก์ชัน findMaxAndMin(numbers) รับ array ของตัวเลข
// คืนค่า object ที่มี { max: ค่าใหญ่สุด, min: ค่าน้อยสุด }
// console.log(findMaxAndMin([3, 7, 1, 9, 4])); { max: 9, min: 1 }
function findMaxAndMin(numbers){
    let max = numbers[0];
    let min = numbers[0];
    for(let i of numbers){
        if(i > max) max = i;
        if(i < min) min = i;
    }
    return {max,min}
}
console.log(findMaxAndMin([3, 7, 1, 9, 4]));
//destrucuring
const numbers = [1,2,3,4,5,6]
console.log(findMaxAndMin(numbers));

// โจทย์ 5 : เขียนฟังก์ชัน countCharacters(str)
// เขียนฟังก์ชันคืนค่า object ที่เก็บจำนวนครั้งของตัวอักษรแต่ละตัว (ignore case และนับเฉพาะ a-z) 
// console.log(countCharacters("Hello World!")); { h:1, e:1, l:3, o:2, w:1, r:1, d:1 }

function countCharacters(str){
    if(!str) return {};
    const result = {};
    for(let ch of str.toLowerCase()){
        if(ch >= 'a' && ch <= 'z'){
            if(result[ch]){
                result[ch] += 1;
            } else {
                result[ch] = 1;
            }
        }
    }
    return result;
}
console.log(countCharacters("Hello World!"));

// โจทย์ 6 : groupByFirstLetter(words)
// เขียนฟังก์ชันรับ array ของคำ แล้วคืนค่าเป็น object ที่ key คือ ตัวอักษรตัวแรก ของคำ และ value เป็น array ของคำที่ขึ้นต้นด้วยตัวนั้น
// console.log(groupByFirstLetter(["apple", "banana", "apricot", "blueberry", "cherry"]));
// { a: ['apple', 'apricot'], b: ['banana', 'blueberry'], c: ['cherry'] }
function groupByFirstLetter(words){
    return words.reduce((acc, word) => {
        const first = word[0].toLowerCase();
        if(acc[first]){
            acc[first].push(word);
        } else {
            acc[first] = [word];
        }
        return acc;
    }, {});
}
console.log(groupByFirstLetter(["apple", "banana", "apricot", "blueberry", "cherry"]));