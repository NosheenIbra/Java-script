
// chap no 5 practice
// problem 1 solution...take a number from user and enter this into the given array
// let array = [1,2,4,5,6,6,7,8,9,10]
// let a = prompt("Enter a number")
// console.log(a)
// a = Number.parseInt(a)
// array.push(a)
// // this will not show to us.. to show this we will use console.log
// console.log(array);

// problem 2 solution...take inputs from the user untill its value is 0
// let array = [1, 2, 4, 5, 6, 6, 7, 8, 9, 10]
// let a
// do {
//     a = prompt("Enter a number")
//     a = Number.parseInt(a)
//     array.push(a)
// } while (a != 0);
// // this will not show to us.. to show this we will use console.log
// console.log(array);

// practice problem 3...filter out the number divisible by 10
// let array=[2,4,5,0,67,80,30];
// let n = array.filter((a)=>{
//     return a%10 ==0
// })
// console.log(n);

// practice problem 4.........calculate the squares of the given arrays
// let array = [2,4,5,0,6,8,3]
// let n = array.map((a) => {
//     return a*a
// })
// console.log(n);

// practice problem 5....calculate tha fictorial of the given number 1 to 10
let num =[1,2,3,4,5,6,7,8,9,10]
let x = num.reduce((a1,a2)=>{
    return a1*a2
})
console.log(x);