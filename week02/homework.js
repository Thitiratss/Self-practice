// homework 
// 3. Shallow Equality
function shallowEquality(obj1, obj2){
    const keys1=Object.keys(obj1)
    const keys2=Object.keys(obj2)

    if(keys1.length !== keys2.length){
        return false
    }
    for(let key of keys1){
        if(obj1[key] !== obj2[key]){
            return false
        }
    }
    return true
}

let book1 = {
    isbn: 123456789,
    title: "JavaScript",
}

let book2 = {
    isbn: 123456789,
    title: "JavaScript",
}

let book3 = {
    isbn: 12345,
    title: "JavaScript",
}

let book4 = {
    isbn: 123456789,
    title: "Javascript",
}

let book5 = {
    isbn: 123456789,
    title: "AbcdEfghij",
}

console.log("shallow equality: " + shallowEquality(book1,book2))
console.log("shallow equality: " + shallowEquality(book1,book3))
console.log("shallow equality: " + shallowEquality(book1,book4))
console.log("shallow equality: " + shallowEquality(book1,book5))