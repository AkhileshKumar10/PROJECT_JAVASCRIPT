const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } ) // yeh uper ki 2 line call bata rhe h


// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} ) //yeh jo 2 lines h uper wali m usmein har ek element k pass sare array ka access h 


// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
// ]

// myCoding.forEach( (item) => { //yeh callback lagya h
//      yeh hamne jo ifdher kiya h na flipkart waghera m jab hum mobile waghera search krte h toh kitne 
//      mobile ajte h aur ek individual mobile jo item h uska card ban jatea h wahj use hot ah 
// //     console.log(item.languageName);
// } )


function printMe(item) {
    console.log(item);
        
}

coding.forEach(printme)