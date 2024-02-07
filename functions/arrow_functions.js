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


