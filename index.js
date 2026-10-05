let library = [
  ["The Alchemist", "Harry Potter", "The Lion King"],
  ["Pride and Prejudice", "The Hobbit", "Black Panther"],
  ["The Great Gatsby", "Matilda", "Finding Nemo"]
];
for (let item = 0; item < library[1].length; item++) {
  console.log(library[1][item]);
}
console.log(library[0][0]);
console.log(library[0][1]);
console.log(library[0][2]);

console.log(library[1][0]);
console.log(library[1][1]);
console.log(library[1][2]);

console.log(library[2][0]);
console.log(library[2][1]);
console.log(library[2][2]);
let row = 0;
let item = 0;

console.log(library[row][item]);

row = 0;
item = 1;
console.log(library[row][item]);

row = 0;
item = 2;
console.log(library[row][item]);

row = 1;
item = 0;
console.log(library[row][item]);

row = 1;
item = 1;
console.log(library[row][item]);

row = 1;
item = 2;
console.log(library[row][item]);

row = 2;
item = 0;
console.log(library[row][item]);

row = 2;
item = 1;
console.log(library[row][item]);

row = 2;
item = 2;
console.log(library[row][item]);