// /*
// ##
// ## Classic For loops
// ##
// */
// // Skapa en loop som itererar 1000 varv. För varje iteration ska du console.log() vilket varv du är på.

// // for (i = 0; i < 1000; i++) {
// //   console.log(i);
// // }
// // console.log("-----");
// //Skapa en loop som räknar ner från 100 till 0. För varje varv ska du console.log() vilket varv du är på.
// // for (i = 100; i >= 0; i--) {
// //   console.log(i);
// // }
// // console.log("-----");
// //let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];
// // Loopa ut ovanstående array med en for-loop. För varje varv ska du console.log() innehållet ( frukten ).
// let fruits = ["apple", "orange", "pear", "kiwi", "pineapple"];

// for (let fruit of fruits) {
//   console.log(fruit);
// }
// console.log("-----");
// //Loopa ut ovanstående array med console.log(). Sätt vilket index varje frukt har framför. Ex. 0. apple, 1. orange osv.
// for (i = 0; i < fruits.length; i++) {
//   console.log(i + ". " + fruits[i]);
// }
// console.log("-----");

// //For of loops
// // let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];
// // Loopa ut ovanstående array och console.log() varje pryl.
// let things = ["hammer", "nails", "ruler", "screwdriver", "screws", "saw"];
// for (let thing of things) {
//   console.log(thing);
// }
// console.log("-----");

// //For each loops
// // let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];
// // Loopa ut ovanstående array och console.log() varje pryl.
// things.forEach((thing) => {
//   console.log(thing);
// });
// console.log("-----");

// //Loopa ut ovanstående array och console.log() varje pryl samt vilken position i arrayen den har.
// things.forEach((thing, i) => {
//   console.log(i + ". " + thing);
// });
// console.log("-----");

//While loops
// Skapa en while-loop som kör 1000 varv. console.log() ut varje varv.
// let j = 0;
// while (j < 1000) {
//   console.log(j);
//   j++;
// }
// console.log("-----");

//Loop da loops
// Generera en kortlek med 52 kort där varje kort innehåller en färg ( suite ) och ett värde mellan 2 och 14 ( ess ). Ex.
// [..., 'hjärter 8', 'hjärter 9', ...]

// const suite = ["hjärter", "ruter", "klöver", "spader"];

// suite.forEach((suite) => {
//   for (i = 2; i <= 14; i++) {
//     console.log(suite, i);
//   }
// });

// console.log("-----");

//Loopa ut samtliga vänners favoritfrukter med en console.log().
let friends = [
  {
    name: "Sixten",
    likes: ["bananas", "strawberries", "blueberries"],
  },
  {
    name: "Khalid",
    likes: ["papaya", "pear", "pineapple"],
  },
  {
    name: "Lisa",
    likes: ["raspberries", "watermelon", "apple"],
  },
];

for (let friend of friends) {
  console.log(`${friend.name} likes: `);
  for (i = 0; i < friend.likes.length; i++) {
    console.log(friend.likes[i]);
  }
}

console.log("-----");
