// //here we will talk about scpes
// // let a =10
// // const b = 20
// // var c = 30

// // console.log(a);
// // console.log(b);
// // console.log(c);

// // {} curly braces is scope in function
// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
// }

// //abh mein yahan varc ko console.log krunga toh vo 30 print karega

// //jo bhi maine block k andar declare kiya h woh h block scope
// //jo bhi maine block k bahar declare kiya h woh h global scope

//var c = 300 //yeh  global scope h
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a); //yeh h block scope ya local scope
    
}



// console.log(a);
// console.log(b);
// console.log(c);
