// Array.of 
const persons = Array.of('John', 'Cris', 'Jenny');
console.log(persons); 

const numbersAndStrings = Array.of(1, 2, 'strings', 'texto');
console.log(numbersAndStrings);

// Array
const arr = Array(3);
console.log(arr);
// [empty x 3]
const arr2 = Array(3, 2);
console.log(arr2);
// [3, 2]

// Array.from  (a partir de um array-like ou iterable object)
const divs = document.querySelectorAll('div'); // node list
const arr = Array.from(divs)

// push
const frutas = ['melão', 'banana', 'morango'];
const frutasLenght = frutas.push('acerola');

console.log(frutas);
// [ 'melão', 'banana', 'morango', 'acerola' ]
console.log(frutasLenght);
// 4

// pop
const frutas = ['melão', 'banana', 'morango'];
const frutasRemoved = frutas.pop();

console.log(frutas);
// [ 'melão', 'banana' ]
console.log(frutasRemoved);
// morango 

const fruta = ['maçã', 'pêra', 'uva'];
const frutaLenght = fruta.push('banana', 'morango');
console.log(fruta, `Array com ${frutaLenght} elementos`);
// [ 'maçã', 'pêra', 'uva', 'banana', 'morango' ] Array com 5 elementos

const fruta = ['maçã', 'pêra', 'uva', 'banana', 'morango'];
const frutaRemoved = fruta.pop();
console.log('Novo array', fruta, `\nElemento removido ==> ${frutaRemoved}.`);
// Novo array [ 'maçã', 'pêra', 'uva', 'banana' ] 
// Elemento removido ==> morango.

// unshift ==> Mesmo que push, porém, no início.
// shift ==> Mesmo que pop, porém, no início.

// concat
const fruta = ['abacaxi', 'maracujá']
const fruta2 = ['marmelo', 'pêssego', 'damasco']
const fruta3 = ['pêra']
const frutasAmarelas = fruta.concat(fruta2, fruta3)
console.log(frutasAmarelas);
// [ 'abacaxi', 'maracujá', 'marmelo', 'pêssego', 'damasco', 'pêra' ]

// slice
const frutasAmarelasFatia = frutasAmarelas.slice(1, 4)
console.log(frutasAmarelasFatia);

// splice
const arr = [1,2,3,4,5];
const arr2 = arr.splice(2)
console.log(arr2);
// [3,4,5]
console.log(arr);
// [1,2]
const arr3 = arr.splice(0, 0, 'first')
console.log(arr3);
// []
console.log(arr);
// ['first', 1, 2]