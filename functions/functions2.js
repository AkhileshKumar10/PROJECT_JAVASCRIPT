function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))
//... rest operator se baki k elements add hojayenge cart m
//... ka matlab h jo bhi items dikh rhe h use ek bundle m pack kro aur mujhe dedo


const user ={
    username : "hitesh",
    price :199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is  ${anyobject.price}`);
}

//handleObject(user);
handleObject({
    username :"AKHILESH",
    price : 999
})

//passing array
const myNewArray =[200,400,100,6000]
function returnsecondvalue(getArray){
    return getArray[1]
}
console.log(returnsecondvalue(myNewArray));