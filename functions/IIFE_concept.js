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




// ()first parenthis jahan pr function ki defination likhne wale h
//() () yeh second wala execution h

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


// yeh hitecsh wale exmaple m iffe function invoke toh hogya h 
// lekin usko pata nhi h context rokan kahan h
//a ise situation hmein usko end krna padega semicolon se
// example below



// (function chai(){
//     // named IIFE kyunki iksa name h chai

//     console.log(`DB CONNECTED`);
// })();

//neeche wala unnamed iife

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Akhilesh')

