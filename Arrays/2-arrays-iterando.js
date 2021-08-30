// forEach ==> Iterar cada item
const arr = [1,2,3,4,5];
arr.forEach((value, index) => {
  console.log(`${index}: ${value}`);
});
// 0: 1
// 1: 2
// 2: 3
// 3: 4
// 4: 5

// map
const arr = [1,2,3,4,5];
const arr2 = arr.map(value => value *2);
console.log(arr2);
// [ 2, 4, 6, 8, 10 ]
// outro exemplo
const frutas = ['banana', 'limão', 'tangerina', 'uva']
const frutaMap = frutas.map((fruta, index) => `${index} - ${fruta}`);
console.log(frutaMap);

// flat
const arr = [1,2,3, [4,5]];
const arrFlat = arr.flat();
console.log(arrFlat);
// [1,2,3,4,5]
// outro exemplo
const idades = [20, 34, [35, 60, [70, 40]]];
const idadesFlat = idades.flat(2);
console.log(idadesFlat);
// [ 20, 34, 35, 60, 70, 40 ]

// flatMap
const arr = [1,2,3,4];
const arr2 = arr.flatMap(value => [value *2]);
console.log(arr2);
// [2,4,6,8]
const arrFlatMap = arr.flatMap(value => [[value *2]]);
console.log(arrFlatMap);
// [ [ 2 ], [ 4 ], [ 6 ], [ 8 ] ]

// keys
const arr = [1,2,3,4]
const arrIterator = arr.keys();
console.log(arrIterator);
// Object [Array Iterator] {}
console.log(arrIterator.next());
// { value: 0, done: false }
console.log(arrIterator.next());
// { value: 1, done: false }
console.log(arrIterator.next());
// { value: 2, done: false }
console.log(arrIterator.next());
// { value: 3, done: false }

// values
const arr = [1,2,3,4]
const arrIterator = arr.values();
console.log(arrIterator);
// Object [Array Iterator] {}
console.log(arrIterator.next());
// { value: 1, done: false }
console.log(arrIterator.next());
// { value: 2, done: false }
console.log(arrIterator.next());
// { value: 3, done: false }
console.log(arrIterator.next());
// { value: 4, done: false }

// entries
const arr = [1,2,3,4]
const arrIterator = arr.entries();
console.log(arrIterator);
// Object [Array Iterator] {}
console.log(arrIterator.next());
// { value: [0, 1], done: false }
console.log(arrIterator.next());
// { value: [1, 2], done: false }
console.log(arrIterator.next());
// { value: [2, 3], done: false }
console.log(arrIterator.next());
// { value: [3, 4], done: false }
