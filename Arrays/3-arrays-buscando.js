// find
const arr = [1,2,3,4];
const firstGreaterThanTwo = arr.find(value => value > 2);
console.log(firstGreaterThanTwo);
// 3

// findIndex
const arr = [1,2,3,4];
const firstGreaterThanTwo = arr.findIndex(value => value > 2);
console.log(firstGreaterThanTwo);
// 2
// outro exemplo
const fruta = ['uva', 'banana', 'abacaxi', 'amora']
const frutaComA = fruta.findIndex(value => value == "banana")
console.log(frutaComA);
// 1

// filter
const arr = [1,2,3,4,5]
const arrGreaterThanTwo = arr.filter(value => value > 2)
console.log(arrGreaterThanTwo);
// [ 3, 4, 5]

// indexOf
const frutas = ['banana', 'uva', 'maçã','maçã', 'banana', 'maçã'];
const firstIndexOfItem = frutas.indexOf('maçã');
console.log(firstIndexOfItem);
// 2

// lastIndexOf
const frutas = ['banana', 'uva', 'maçã','maçã', 'banana', 'maçã'];
const firstIndexOfItem = frutas.lastIndexOf('maçã');
console.log(firstIndexOfItem);
// 5

// includes
const frutas = ['banana', 'uva', 'maçã','pêra', 'abacate', 'côco'];
console.log(frutas.includes('banana'));
// true
console.log(frutas.includes('amora'));
// false

// some
const arr = [1,3,3,4,3];
const hasSomeEvenNumber = arr.some(value => value %2 === 0);
console.log(hasSomeEvenNumber);
// true
// outro exemplo
const students = [
  {name: 'John', grade: 7},
  {name: 'Jenny', grade: 5},
  {name: 'Peter', grade: 4},
]
const reprovedStudent = students.some(student => student.grade <= 6)
console.log(students);
console.log(reprovedStudent);
console.log(students.find(student => student.grade <= 6));
const reprovados = students.find(student => student.grade <= 6);
console.log(`\nA estudande ${reprovados.name} não passou de ano!`);
/**
[
  { name: 'John', grade: 7 },
  { name: 'Jenny', grade: 5 },
  { name: 'Peter', grade: 4 }
]
true
{ name: 'Jenny', grade: 5 }

A estudande Jenny não passou de ano!
 */

// every
const arr = [1,3,3,4,3];
const allEvenNumbers = arr.every(value => value %2 === 0);
console.log(allEvenNumbers);
// false

//sort
const ordemNota = students.sort((current, next) => current.grade - next.grade);
console.log(ordemNota);
/*
[
  { name: 'Peter', grade: 4 },
  { name: 'Jenny', grade: 5 },
  { name: 'John', grade: 7 }
] */
// outro exemplo
const arr = [3,1,5,4,2]
console.log(arr.sort());
// [1,2,3,4,5]

// reverse
const arr = [3,1,5,4,2]
console.log(arr.reverse());
// [ 2, 4, 5, 1, 3 ]
