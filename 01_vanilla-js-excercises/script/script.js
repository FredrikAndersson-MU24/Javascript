let fruits = ["apple", "banana", "cantaloupe", "pineapple", "lemon"];

console.log("------------------");

for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.push("watermelon"); //array.push() - lägg till i slutet av array
console.log("------------------");

for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.unshift("pear");
console.log("------------------");

for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.shift();
fruits.pop();
console.log("------------------");

for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log(fruits);

let fruit = ["apple", "orange", "pear", "kiwi"];
console.log(fruit);
console.log("------------------");
fruit.splice(2, 0, "melon", "banana");
console.log(fruit);
console.log("------------------");
let fruits = ["apple", "orange", "pear", "kiwi"];
console.log(fruits);
let newFruits = fruits.toSpliced(0, 1, "pineapple");
let evenNewerFruits = [...fruits];
console.log(newFruits);
console.log(evenNewerFruits);

let num = [1, 5, 78, 7, 122, 3, 4, 65, 40, 2, 8];

num.sort((a, b) => b - a);

console.log(num);

let a = [1, 2, 3];
let b = [4, 5, 6];

let c = a.concat(b);

console.log(c);

a.push(10);

console.log(c);
console.log(a);
c = a.concat(b);
console.log(c);
console.log(a);
