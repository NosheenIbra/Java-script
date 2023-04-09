let array=[ 45 , 53 , 76 ]
// console.log(array);

// it also take valur index and array like forEach 
// map function make new array and return value

// map method
let a = array.map((value , index , array)=>{
    console.log(value , index , array);
    return value + 1
})
console.log(a);
//  map function is used to make a new array while forEach function is used to make an operation
// on existing array of elements

// array filter method ....let say i want to take elements less then 10

let  num = [23,45,76,8,9,2,6,11,12]
let b = num.filter((value)=>{
    return value < 10
})
console.log(b);

// reducefunction reduce an array value into single function
// let  num1 = [3,5,8,2]
// let b1 = num1.reduce((h1, h2)=>{
//     return h1 +h2
// })
// console.log(b1);

// i can also do that

let  num1 = [3,5,8,2]
const func_reduce_value =((h1,h2)=>{
    return h1 +h2
})
let newarray3 = num1.reduce(func_reduce_value)
console.log(newarray3);