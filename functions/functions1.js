function bolmeranaam (){
    console.log("A");
    console.log("k");
    console.log("h");
    console.log("i");
    console.log("l");
    console.log("e");
    console.log("s");
    console.log("h");
}
 // yeh hamar function h jismein the word function is function
 //bolmera name defination h
 //aur { iske ander  function ki defenation / funct
//function ka scope h }


//bolmeranaam() // function run krwaya
//bolmeranaam //yeh refernce h function ka
 


function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    //function ki defination lete h toh jo bhi
    //inputs lete h use parameter bolte h
//argument ka mtalb hota h jab hum function call
//karte h toh jo usmein parametr pass hota h 
//use argument bolte h
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);
//result k ander ki value undefined h aisa kyun?
//aisa isliye kyunki console bas console value 
//print krta h return nahi krta



function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
    //uper wali line m function ne value toh retutn 
    //krdi pr kahin hmne print nahi kiya isliye k
    //bhi nahi print hua
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

//jab app kuch bhi value passs he nahi krte toh woh ata h undefined 
//dhayn rakhega woh null nahi ata

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

