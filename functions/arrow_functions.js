//this keyword current context k bare m batata h
const user ={
    username: "hitesh",
    price: 100,


    welcomemessage: function(){
    console.log(`${this.username} ,welcome to the webasite`);

    }
}

// user.welcomemessage()
// user.username ="akhilesh"
// user.welcomemessage()
//yahan pr humne hardocding nahi kri h yahan pr hamne current context ki value seedhi print krdi h
// this keyword is used to access the current context

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()



//some important notes
//js engine browser k ander hota tha global object tabhi window object hota h
// console.log(this);

function chai(){
    let username = "hitesh"
    console.log(this.username);
}

chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => { //fuction keyword ko hta diya aur usko arrow se replace krke arrow function banadiya
//     let username = "hitesh"
//     console.log(this);
// }


//arrow vs simple fucntion ka difference pata kre interview k liye

//this ka context yeh h ki yeh object k ander he kam krha h function k ander kam nahi krha
// chai()

// ()=> {} the basic syntax of arrow fucntion



// const addTwo = (num1, num2) => {
//     return num1 + num2
// } // yeh wala example basic arrow fucntion h


// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})

//yeh above example implict arrow return function ki exmaple

console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

