let array=[2, 4,3,6,7,8]

// for loop
for(i=0; i<array.length; i++){
    console.log(array[i])
}

// for...of function=== function like forloop
for ( let i of array){
    console.log(i);
}

// for ..in function      ..not mostly used just remember how it works
for (let item in array){
    // console.log(item); //that will give key
    console.log(array[item]);
}


// for each function
array.forEach((element)=>{
        console.log(element*element);
})

// Array.from.....it is used in domain to take array from form function instead of for each function

let name = "ibra"
//  hert a for array  must be capital Array
let arr =  Array.from (name)
    console.log(arr);
