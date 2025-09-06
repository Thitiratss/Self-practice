/*
Write a function addProperty(obj, key, value) that adds a new
property to an object and returns the updated object.
• Output
• console.log(addProperty({ name: 'John' }, 'age', 25))
{ name: 'John', age: 25 }
• console.log(addProperty({}, 'city', 'New York'));
{ city: 'New York' }
*/
function addProperty(obj,key,value){
    obj[key] = value;
    return obj;
}
console.log(addProperty({ name: 'John' }, 'age', 25))
console.log(addProperty({}, 'city', 'New York'));

/*
Write a function mergeObject(obj1, obj2) and return merges two
objects.
• Output
• console.log(mergeObject({ name: 'John', age: 25 }, { city: 'New York' }))
{ name: 'John', age: 25, city: 'New York' }
• console.log(mergeObject({ name: 'Jane' }, { age: 30, country: 'USA' }))
{ name: 'Jane', age: 30, country: 'USA' }
*/
function mergeObject(obj1,obj2){
    return {...obj1,...obj2}
}
console.log(mergeObject({ name: 'John', age: 25 }, { city: 'New York' }));
console.log(mergeObject({ name: 'Jane' }, { age: 30, country: 'USA' }));

/*
Write a function getFreqOfWords(sentence) that returns an object with keys representing
unique words in lowercase and values representing the frequency of occurrences of each
word with ignore case in the sentence. If the input string is null or undefined, return
undefined.
• Output
• console.log(getFreqOfWords('Today is present and present is your gift'))
{ today: 1, is: 2, present: 2, and: 1, your: 1, gift: 1 }
• console.log(getFreqOfWords('Do you best just do it’))
{ do: 2, you: 1, best: 1, just: 1, it: 1 }
• console.log(getFreqOfWords(null)) //undefined
• console.log(getFreqOfWords(undefined)) //undefined
*/
function getFreqOfWords(sentence){
    if(!sentence){
        return undefined
    }
    const words = sentence.toLowerCase().split(' ')
    return words.reduce((acc,word) => {
        if(acc[word]){
            acc[word] += 1
        }else{
            acc[word] = 1
        }
        return acc
    },{})
}
console.log(getFreqOfWords('Today is present and present is your gift'))
console.log(getFreqOfWords('Do you best just do it'))
console.log(getFreqOfWords(null)) //undefined
console.log(getFreqOfWords(undefined)) //undefined


/*
Write a function extractAndRename(obj) that extracts properties
name and age from an object, renames them to fullName and
yearsOld, and returns a new object with these properties.
• Output
• console.log(extractAndRename({ name: 'John', age: 25, city: 'New York' }))
•  { fullName: 'John', yearsOld: 25 }
• console.log(extractAndRename({ name: 'Jane', age: 30 }))
• { fullName: 'Jane', yearsOld: 30 }
*/
function extractAndRename(obj){
    const { name: fullName, age: yearsOld } = obj
    return { fullName,yearsOld }
}
console.log(extractAndRename({ name: 'John', age: 25, city: 'New York' }))
console.log(extractAndRename({ name: 'Jane', age: 30 }))

/*
Write a function mergeAndDestructure(obj1, obj2) that merges two
objects using the spread operator, and then destructures the merged
object to extract specific properties. Return an object with the extracted
properties.
• Output
• console.log(mergeAndDestructure({ name: 'John', age: 25 }, { city: 'New York' }))
 { name: 'John', age: 25 }
• console.log(mergeAndDestructure({ name: 'Jane' }, { age: 30, country: 'USA' }))
 { name: 'Jane', age: 30 }
*/
function mergeAndDestructure(obj1,obj2){
    const merged = {...obj1,...obj2}
    const { name , age } = merged
    return { name , age }
}

console.log(mergeAndDestructure({ name: 'John', age: 25 }, { city: 'New York' }))
console.log(mergeAndDestructure({ name: 'Jane' }, { age: 30, country: 'USA' }))

/*
Write a function removeDuplicateWords(sentence) that takes a string as input and returns a new
string with all duplicate words removed, while preserving the order of the first occurrence of
each word. The function should be case insensitive, but the output should maintain the original
casing. If the input is null, undefined, or an empty string, return an empty string.
• Output:
removeDuplicateWords("This is a test This test is easy.") // "This is a test easy."
removeDuplicateWords("Hello hello HELLO world!") // "Hello world!"
removeDuplicateWords("One two two three three three") // "One two three"
removeDuplicateWords("") // ""
removeDuplicateWords(null) // ""
*/
function removeDuplicateWords(sentence){
    if(!sentence){
        return ""
    }
    const word = sentence.split(' ')
    const result = word.reduce((acc,word) => {
        const lowerWord = acc.map(w => w.toLowerCase());
        if(!lowerWord.includes(word.toLowerCase())){
            acc.push(word);
        }
        return acc;
    },[])
    return result.join(" ")
}
console.log(removeDuplicateWords("This is a test This test is easy.")) // "This is a test easy."
console.log(removeDuplicateWords("Hello hello HELLO world!")) // "Hello world!"
console.log(removeDuplicateWords("One two two three three three")) // "One two three"
console.log(removeDuplicateWords("")) // ""
console.log(removeDuplicateWords(null)) // ""

/*
Write a function findValue(arr) that takes an array of numbers and
returns an object with the following properties:
• min: the minimum value in the array
• max: the maximum value in the array
• sum: the sum of all the values in the array
• avg: the average of all the values in the array
For example, given the array [1, 2, 3, 4, 5], the function should return:
{ min: 1, max: 5, sum: 15, avg: 3 }
*/
function findValue(arr){
    if(!arr){
        return {};
    }
    const result = arr.reduce((acc,num,index) => {
        if(index === 0){
            acc.min = num
            acc.max = num
            acc.sum = num
        }else{
            if(num < acc.min) acc.min = num
            if(num > acc.max) acc.max = num
            acc.sum += num;
        }
        return acc
    },{})
    result.avg = result.num / arr.length
    return result
}
console.log(findValue([1, 2, 3, 4, 5]));

/*
Write a function convertToUppercase(arr) that takes an array of
strings and returns a new array with all strings converted to
uppercase.
• Sample Outputs
• convertToUppercase(['hello', 'world'])) // ['HELLO', 'WORLD']
• convertToUppercase(['javascript', 'is', 'fun'])) // ['JAVASCRIPT', 'IS', 'FUN']
*/
function convertToUppercase(arr){
    const result = arr.map((ar) => ar.toUpperCase())
    return result
}
console.log(convertToUppercase(['hello', 'world'])) // ['HELLO', 'WORLD']
console.log(convertToUppercase(['javascript', 'is', 'fun'])) // ['JAVASCRIPT', 'IS', 'FUN']
/*
Write a function findMax(arr) that takes an array of numbers and
returns the maximum value using the reduce method.
Sample Outputs
• console.log(findMax([1, 2, 3, 4])) // 4
• console.log(findMax([10, 5, 8, 7])) // 10
*/
function findMax(arr){
    const result = arr.reduce((acc,num) => {
        if(num > acc){
            acc = num
        }
        return acc
    },0)
    return result
}
console.log(findMax([1, 2, 3, 4]))
console.log(findMax([10, 5, 8, 7]))

/*
Write a function removeFalsyValues(arr) that takes an array and
returns a new array with all falsy values removed. Falsy values include
0, empty string, false, null, and undefined.
Sample Outputs
• removeFalsyValues([0, 1, false, 2, '', 3]) // [1, 2, 3]
• removeFalsyValues(['a', '', 'b', null, 'c']) // ['a', 'b', 'c’]
• removeFalsyValues([null, undefined, 'A']) // ['A']
*/
function removeFalsyValues(arr){
    // const result = [];
    // if(arr && arr.length > 0){
    //     for(let i = 0; i < arr.length; i++)
    //         if(arr[i]){
    //             result.push(arr[i])
    //         }
    // }
    // return result
    const result = arr.filter((i) => i)
    return result
}
console.log(removeFalsyValues([0, 1, false, 2, '', 3])); 
console.log(removeFalsyValues(['a', '', 'b', null, 'c'])); 
console.log(removeFalsyValues([null, undefined, 'A'])); 


/*
Write a function doubleAndFilterEvenNumbers(arr) that takes an
array of numbers, filter out odd numbers and returns a new array
with doubled numbers.
• Sample Outputs
• doubleAndFilterEvenNumbers([1, 2, 3, 4])) // [4, 8]
• doubleAndFilterEvenNumbers([5, 6, 7, 8])) // [12, 16]
*/
function doubleAndFilterEvenNumbers(arr){
    const result = arr.filter((i) => i % 2 === 0).map((i) => i * 2)
    return result
}
console.log(doubleAndFilterEvenNumbers([1, 2, 3, 4]));
console.log(doubleAndFilterEvenNumbers([5, 6, 7, 8]));
/*
Write a function filterEvenNumbers(arr) that takes an array of
numbers and returns a new array with only the even numbers.
• Sample Outputs
• filterEvenNumbers([1, 2, 3, 4]) // [2, 4]
• filterEvenNumbers([5, 6, 7, 8]) // [6, 8]
*/
function filterEvenNumbers(arr){
    const result = arr.filter((i) => i % 2 === 0)
    return result
}
console.log(filterEvenNumbers([1, 2, 3, 4]));
console.log(filterEvenNumbers([5, 6, 7, 8]));

/*
Write a function populateArray(length, value) that creates an array of
given length and fills it with the specified value.
• Sample Outputs
• populateArray(3, 'a') // ['a', 'a', 'a']
• populateArray(5, 0) // [0, 0, 0, 0, 0]
*/
function populateArray(length,value){
    return new Array(length).fill(value)
    
}
console.log(populateArray(3, 'a')); // ['a', 'a', 'a']
console.log(populateArray(5, 0));   // [0, 0, 0, 0, 0]
/*
Write a function squareNumbers(arr) that takes an array of numbers
and returns a new array with each number squared.
• Sample Outputs
• squareNumbers([1, 2, 3, 4]) // [1, 4, 9, 16]
• squareNumbers([5, 6]) // [25, 36]
*/
function squareNumbers(arr){
    const result = arr.map((i) => i ** 2)
    return result
}
console.log(squareNumbers([1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(squareNumbers([5, 6]));       // [25, 36]


/*
Write a function processNumbers(arr) that takes an array of
numbers, squares each number, filters out the even numbers, and
returns the sum of the remaining numbers.
• Sample Outputs
• processNumbers([1, 2, 3, 4]) // 10 (1^2 + 3^2)
• processNumbers([5, 6, 7, 8]) // 74 (5^2 + 7^2)
*/
function processNumbers(arr){
    const result = arr.filter(num => num % 2 !== 0).map(num => num ** 2).reduce((sum,num) => sum + num, 0)
    return result
}
console.log(processNumbers([1, 2, 3, 4])); // 1^2 + 3^2 = 10
console.log(processNumbers([5, 6, 7, 8])); // 5^2 + 7^2 = 74