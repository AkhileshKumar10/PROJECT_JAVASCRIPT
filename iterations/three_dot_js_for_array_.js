// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // if(greet==" ")
    // break;
    console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

//maps m value unique hogi aur jis order m enter ki h usi order m rehti h

//console.log(map);

// for (const [key, value] of map) {//key aur value ko alga alag hold kiya humne 
//     //therefor array destructure
//     console.log(key, ':-', value);
// }

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
//yeh upper wala error dega kyunki object iteratable nahi h

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
//maps are irtrateble but objects are not