const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
/*******************************************************************************************************************/
marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]);
 //jab hum marvel wali array m dc wali array pust krte h toh array k ander arrya 
 //ajati h jsiki wajhe se jo dc wali array woh 4th single element banjaatai h
 /*
 yeh output rha
 PS C:\Users\akhil\Desktop\js_journe> node "c:\Users\akhil\Desktop\js_journey\basics_02\array2.js"
[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
flash
PS C:\Users\akhil\Desktop\js_journey>
*/
const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);
//concat new array banat h hence 
//more effective than push 

/********************************* */

// niche hmne spread operator ka use kiya ek 
//kanch ka glass lijye woh nuche girega toh tut k bikahr jayega 
//aise he niche sabhi array k elemnts bikahr k new elements banate h


const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);




// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // isper iska output false ayega kyunki yeh ek string h 
console.log(Array.from("Hitesh")) // idher hamne hitesh ko array banadiya jismein hr ek index /key ko ek value dedi h like 
//[0] pr h aise jo bhi value dega usko yeh object m convert krdega
console.log(Array.from({name: "hitesh"})) // interesting case h yeh interviews k liye
//ismein yeh hota h ki woh convert nahi krpahharah

/**********************************************************************/


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));