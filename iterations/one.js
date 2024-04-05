// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
//     //ismein pehle numbe rprint hua fi r 5 is best number ata
// }
// 0
// 1
// 2
// 3
// 4
// 5 is best number
// 5
// 6
// 7
// 8
// 9
10

for (let i=0; i<=10;i++){
    const element =1;
    if(element==5){
        console.log("5 is the best answer");

    }
    console.log(element);

}
// You have initialized the variable element with the value 1.
// The loop runs from i = 0 to i = 10.
// Inside the loop, you have a conditional statement: if (element == 5).
// Since element is always 1, the condition is never met, and the code inside the if block (console.log("5 is the best answer");) is never executed.

// console.log(element);
/////

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//    console.log(`Value of i is ${index}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}