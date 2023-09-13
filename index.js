//example 1
let arrayLength = 2;
let arr2 = new Array(arrayLength);
arr2[0] = "value at index 0";
console.log(arr2[0]);
console.log(arr2[1]); 

//example 2
let arr3 = Array(3);
arr3[2] = 'Adding a value';
console.log(arr3[2]); // Adding a value
console.log(arr3[arr3.length - 1]); //prints Adding a value by using arr3.length - 1
console.log(arr3[0]); // undefined
console.log(arr3[1]); // undefined

//3rd example array methods
let arr4 = ['A',true,2];
console.log(arr4.push('new value')); // new length of the array
console.log(arr4); // ['A',true,2,'new value']
console.log(arr4.pop()); // 'new value' will be removed from the array
console.log(arr4); // ['A',true,2]