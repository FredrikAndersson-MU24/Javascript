// The Basics
// 1. Gör en array som innehåller 5 st olika frukter av datatypen string.
let fruits = ["apple", "banana", "cherry", "dragon fruit", "elderberry"];
console.log(fruits);
console.log("-----");
// 2. gör en array som innehåller 3 olika datatyper, ex. string, number, array.
let datatypes = [[], "string", 3];

console.log(datatypes);
console.log("-----");
//
// 3. console.log() hur många objekt denna array innehåller.
let animals = ["cat", "hamster", "parrot", "funky chihuahua"];
console.log(animals.length);
console.log("-----");
// 4. I arrayen ovan, hämta cat.
console.log(animals[0]); // cat är index 0
console.log("-----");
// 5. I arrayen ovan, hämta funky chihuahua.
console.log(animals[3]); //funky chihuahua är index 3
console.log("-----");
// 6. I arrayen ovan, byt ut hamster mot tiger.
animals[1] = "tiger"; // hamster är index 1, assign tiger till index 1
console.log(animals);
console.log("-----");
// 7. Lägg ihop dessa arrayer.
let a = [1, 2, 3];
let b = [4, 5, 6];
let c = a.concat(b);
console.log(c);
console.log("-----");
// 8. Merga ner array e på index 3 array d.
let d = [1, 2, 3, 7, 8, 9];
let e = [4, 5, 6];
for (i = 0; i < e.length; i++) {
  d.splice(3 + i, 0, e[i]);
}

console.log(d);
console.log("-----");
// 9. Klona denna array.
let arr = ["a", "b", "c"];
let arr2 = [...arr];

console.log(arr2);
arr2.push("d");
console.log(arr2);
console.log(arr);
arr.push("e");
console.log(arr2);
console.log(arr);
console.log("-----");

//
// ###
// ###  Methods
// ###
// .push(), .unshift(), .pop(), .shift(), .splice(), .includes(), .indexOf(), .substring()

let oldFruits = ["kiwi", "apple", "pear"];
// Lägg till en frukt i slutet av arrayen ovan.
oldFruits.push("orange");
console.log(oldFruits);
// Lägg till en frukt i början av arrayen ovan.
oldFruits.unshift("cherry");
console.log(oldFruits);
// I arrayen ovan, ta bort sista frukten i arrayen.
oldFruits.pop();
console.log(oldFruits);
// I arrayen ovan, ta bort första frukten i arrayen.
oldFruits.shift();
console.log(oldFruits);
// Sätt in en frukt i arrayen ovan på index 1.
oldFruits.splice(1, 0, "watermelon");
console.log(oldFruits);
// Sätt in tre frukter i arrayen ovan på index 2.
oldFruits.splice(2, 0, "plum", "pineapple", "dragon fruit");
console.log(oldFruits);
let names = ["David", "Christoffer", "Johan", "Maja"];
// I arrayen ovan, ta bort Christoffer och Johan.
names.splice(1, 2);
console.log(names);
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Spegelvänd på arrayen ovan.
console.log(nums.reverse());

let str = "Supercalifragilisticexpialidocious";
// Kika om strängen ovan innehåller bokstaven n.
console.log(str.includes("n"));

// Kika om strängen ovan innehåller bokstaven x.
console.log(str.includes("x"));
// I ovanstående array, hitta vilket position första förekomsten av p har.
console.log(str.indexOf("p"));
// I strängen ovan, plocka fram de 5 första tecknena.
console.log(str.substring(0, 5));
// I strängen ovan, plocka fram de 7 sista tecknena.
console.log(str.substring(str.length - 7, str.length));

//
// ###
// ###   Advanced methods ( high order methods )
// ###
// .filter()
let numArray = [23, 45, 5, 62, 1, 21, 3, 54];
// I arrayen ovan, filtera fram alla nummer över 5.
console.log(numArray.filter((num) => num > 5));

// I arrayen ovan, filtera fram alla nummer under 5.
console.log(numArray.filter((num) => num < 5));

let persons = [
  {
    name: "Felicia",
    age: 12,
  },
  {
    name: "Pelle",
    age: 20,
  },
  {
    name: "Peter",
    age: 59,
  },
  {
    name: "Anna",
    age: 32,
  },
  {
    name: "Jocke",
    age: 18,
  },
  {
    name: "Ella",
    age: 3,
  },
];
// Skriv ut alla namn som är 18 år eller över från arrayen ovan.
for (let person of persons) {
  if (person.age > 18) {
    console.log(`${person.name} is ${person.age} years old.`);
  }
}

// Skriv ut alla namn som är under 18 år från arrayen ovan.
for (let person of persons) {
  if (person.age < 18) {
    console.log(`${person.name} is ${person.age} years old.`);
  }
}
// .sort()
let arr3 = ["beta", "alfa", "gamma"];
// Sortera ovanstående array alfabetisk.
arr3.sort();
console.log(arr3);

let numbers = [1, 5, 7, 9, 3, 4, 2, 6, 8];
// Sortera ovanstående array numeriskt.
numbers.sort();
console.log(numbers);
// I person-arrayen ovan, sortera objekten efter ålder, yngst först.

console.log(persons.sort((a, b) => a.age - b.age));
// I person-arrayen ovan, sortera objekten efter ålder, äldst först.
console.log(persons.sort((a, b) => b.age - a.age));
// I person-arrayen ovan, sortera objekten i bokstavsordning efter deras namn

console.log(persons.sort((a, b) => a.name.localeCompare(b.name)));

// .map()
// I person-arrayen ovan, gör om alla namn till versaler.
let personsLowerCase = persons.map((person) => ({
  name: person.name.toLowerCase(),
  age: person.age,
}));

console.log(personsLowerCase);

// I person-arrayen ovan, spegelvänd alla namn.
let personsReverse = persons.map((person) => ({
  name: reverse(person.name),
  age: person.age,
}));

console.log(personsReverse);

function reverse(text) {
  let reverseStr = "";
  for (i = text.length - 1; i >= 0; i--) {
    reverseStr += text[i];
  }
  return reverseStr;
}

// ###
//### Loop arrays
//###
let newFruits = ["apelsin", "päron", "äpple", "kiwi"];
// Loopa ut denna array med en forEach()-loop. console.log() varje ord.
newFruits.forEach((item) => {
  console.log(item);
});

// Loopa ut denna array med en for of-loop. console.log() varje ord.
for (let fruit of newFruits) {
  console.log(fruit);
}

// Loopa ut denna array med en for-loop. console.log() varje ord.

// Loopa ut denna array. För varje varv i loopen ska du också skriva ut index. ex:
// 0 - apelsin
// 1 - päron
// ...
for (i = 0; i < newFruits.length; i++) {
  console.log(`${i} - ${newFruits[i]}`);
}
