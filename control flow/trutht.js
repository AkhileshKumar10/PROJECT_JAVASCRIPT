
const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){} //yeh bagal wala empty function h

// string k ander mne "0" likha to woh truthy value hue

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
//yeh above ka code ka use krke hum yeh check krsakte h ki object empty h ya nahi

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10 //
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);


false==0 // retun true
false =" "//returns true


//terniary operator
// condition ? true : false

const iceTeaPrice=100;
iceTeaPrice >= 80 ? console.log("less than 80")

// Terniary Operator

// condition ? true : false
///
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")