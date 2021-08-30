// Arquivo para explicações e exemplos

'use strict';

const myText = 'Hello prototype!';

myText.split(''); // <- de onde vem esse "split"?

// A declaração acima é a mesma que a abaixo

'use strict';

const myText = String('Hello prototype!');

console.log(myText.__proto__.split);
// f split() { [native code] }
      // mesmo que...
console.log(String.prototype.split);
// f split() { [native code] }

'use strict';

const myText = String('Hello prototype!');

console.log(myText.__proto__.split === String.prototype.split);
// true
console.log(myText.constructor === String);
//true

// __proto__ -> prototype -> constructor
const myText = 'Hello Prototype!';

myText.constructor -> String
myText.__proto__ -> String.prototype

'use strict';

function Animal () {}

console.log(Animal.constructor); // aponta para function -->
// --> Function.prototype.constructor --> Object(){} --> Object.prototype = null;
// f Function() { [native code] }

'use strict'

function Animal () {
  this.qtdPatas = 4;
}

const cachorro = new Animal();

console.log(cachorro.qtdPatas);
// 4
console.log(cachorro.__proto__ === Animal.prototype);
// true
console.log(Animal.__proto__ === Function.prototype);
//true
console.log(cachorro instanceof Animal);
// true
console.log(cachorro instanceof Function);
// false


new Foo(...);

/**
O que ocorre quando eu pego uma função construtora e chamo ela com o operador new?

1 - Um novo objeto é criado, herdando Foo.prototype.
2 - A função construtora Foo é chamada com os argumentos especificados e com o 'this' vinculado
ao novo objeto criado.
3 - Caso a função constutora tenha um retorno explícito, será respeitado o seu 'return'. Senão,
será retornado o objeto criado no passo 1.
 */
// Exemplo do caso acima:
function Pessoa (name) {
  this.name = name;
}
const p = new Pessoa('Márcio');
console.log(p); // retorna Pessoa { name: 'Márcio' }

// agora com return explícito
function Pessoa (name) {
  this.name = name;
  return {
    name: 'Teste'
  };
}
const p2 = new Pessoa('Márcio');
console.log(p2); // retorna { name: 'Teste' }

'use strict'

function Animal(qtdePatas) {
  this.qtdePatas = qtdePatas;
}

function Cachorro(morde) {
  Animal.call(this, 4);

  this.morde = morde;
}

const pug = new Cachorro(false);

console.log(pug);
// Cachorro {qtdePatas: 4, morde: false}

'use strict'

function Animal(qtdePatas) {
  this.qtdePatas = qtdePatas;
  this.movimentar = function() {}
}

function Cachorro(morde) {
  Animal.call(this, 4);

  this.morde = morde;
  this.latir = function() {
    console.log('Au! au!');
  }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);


console.log(pug);

// Melhorando a função construtora acima

'use strict'

function Animal() {}
Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function() {}

function Cachorro(morde) {
  this.qtdePatas = 4;
  this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function() {
  console.log('Au! au!');
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

