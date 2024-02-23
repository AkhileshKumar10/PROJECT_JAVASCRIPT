// // //javascript execution content

// // 1.JS creates Global excution context 
// // 2.Next it creates memory phase
// // 3.Memory phase - In this phase,the variables are set to undefined 
// //   until the execution phase(next phase) and the functions are set to their definitions.
// // 4.Next it creates the execution phase
// // 5.Execution phase - In this phase,the variables are initialsed to given values and 
// //   when the function s are called,it creates a memory phase and execution phase for the function 
// //   just like the main one.

// // For live demo:
// // browser > inspect > Sources
// // create a snippet with few functions and visually experience the call stack.

// //https://www.youtube.com/watch?v=ByhtOgF6uYM&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=25&t=227s



// @keshav1955
// 6 months ago
// Returned value is passed to the global environment

// 15


// Reply

// @sumitbhardwaz
// @sumitbhardwaz
// 5 months ago
// Execution context gets deleted as well

// 11


// Reply

// @shubhamtyagi2901
// @shubhamtyagi2901
// 5 months ago
// If you can elaborate a little more on the demo part, like how to do things over there on browser, anyways u've done a good job 👍my friend


//check the below in browser

function one(){
    console.log("one")
}
function two(){
    console.log("two")
}
function three(){
    console.log("three")
}