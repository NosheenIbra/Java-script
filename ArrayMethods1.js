let array = [12,233,14,155,13]
console.log(array);
array.sort()  //that will sort array value in asscending form
console.log(array)

array.reverse()  //that will revers the values of the array
console.log(array);

// slicing and splicing
let arr =[3,4,8,7,1,9]
let deletedValues= arr.splice(2,2, 201, 222,213)  //2 from start and 2 is deleted number of values and all other you want to add
console.log(arr);

let b=arr.slice(3)  //in slicing last value not included in the answer
console.log(b);
let c=arr.slice(3,4)
console.log(c);

let arry = [45,4,23,8,9]
console.log(arry);
delete arry[0]   //delete item value but not change the length of an array
console.log(arry);
