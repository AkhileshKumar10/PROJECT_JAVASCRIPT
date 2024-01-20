//const tinderUser = new Object()
const tinderUser ={}

tinderUser.id="123abc"
tinderUser.name="Akhilesh"
tinderUser.isloggedIn = false

//console.log(tinderUser);

/*yahhan hum ek aur user declare 
krhe ksi aur app k liye */

const regularUser ={
    email : "ak@google.com",
    fullname:{
        userfullname:{
            firstname: "Akhilesh",
            lastname:"Rajput"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

//console.log(regularUser.fullname?userfullname.firstname);
//agar manlo fullname exist krta h ya nahi isliye hum aise condition chk 
//krne k liye ? ka use krte h


//jese hamne array merge ki thi  wese hum 
//object bhi merge krkste h ya combine krkste h


const obj1 ={1:"a", 2: "b"}
const obj2 ={1:"a", 4: "b"}

//const obj3 ={obj1 , obj2}
// ismein yehi problem
// { obj1: { '1': 'a', '2': 'b' }, obj2: 
// { '1': 'a', '4': 'b' } } object k andr object
// to counter the problem

const obj3 = Object.assign({}, obj1 , obj2)
// perfect output
//{ '1': 'a', '2': 'b', '4': 'b' }
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
//refer above for object source
console.log(obj3);


