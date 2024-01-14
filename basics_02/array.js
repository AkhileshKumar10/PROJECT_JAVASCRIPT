// array

const myArr = [0, 1, 2, 3, 4, 5]
//const myHeors = ["shaktiman", "naagraj"]

//const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

 //myArr.push(6)
 //myArr.push(7)

// myArr.push(7)
// myArr.pop()


//myArr.unshift(9)
//myArr.shift() //NO parameter given in shift
//nine ko remove krdiya
//console.log(myArr);
//The unshift() method adds new elements to the beginning of an array.
// The unshift() method overwrites the original array.

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(5));

//console.log(myArr);


 //const newArr = myArr.join()
/*A string used to separate one element of the array from the next in the resulting string. If omitted,
 the array elements are separated with a comma.*/
//console.log(myArr);
//console.log( newArr);


//most imp for interview


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
/*
refer 
https://www.freecodecamp.org/news/javascript-slice-and-splice-how-to-use-the-slice-and-splice-js-array-methods/
*/