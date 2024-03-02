// if
const isUserloggedIn = true
const temperature = 41
//=== CHECKS TYPE

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//POWER SCOPE K ANDER DECLARE HE NAHI HONA CHAIYE BALKI SCOPE K BHAR DECLARE HONA CHAOYE

//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

//SHORT HAND NOTATION

// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    //PIPE SIGN MULTIPLE CONDITION K LIYE USE HOTA H
    
    console.log("User logged in");
}