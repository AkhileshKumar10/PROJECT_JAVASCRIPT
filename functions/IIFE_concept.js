function op (){
    console.log('db connected')
}
op()
//need....?
//kabhi kabhi yeh  problem function ati h ki globle scope 
//ki wajh se cheeze pollute hojati h 
//jese he function likha fatak se execute
//fucntion k ander global variable koi problem kre
//tabhi iife ka use kiya jata 
//jo bhi app fucntion m declare krhe h woh kai bar global scope pr affect krta h


// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
