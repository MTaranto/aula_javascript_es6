// Declaração função Person com atributo nome privado
'use strict'

function Person(initialName) {
  let name = initialName;

  this.getName = function() {
    return name;
  }

  this.setName = function(newName) {
    name = newName;
  }
}

const p = new Person('Márcio');
console.log(p); // Retorna Person { getName: [Function], setName: [Function] }

'use strict';

console.log(p); // Person {}
p.getName(); // "Márcio"
p.name; // undefined

p.setName('Thiago');
p.getName(); // "Thiago"

// Exemplo de como fica no node 12

'use strict'

class Person {
  #name = '';

  constructor(initialName) {
    this.#name = initialName;
  }

  setName(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

// Encapsulamento

'use strict';

function Person(initialName) {
  var name = initialName;

  Object.defineProperty(this, 'name', {
    get: function() {
      return name;
    },
    set: function(value) {
      name = value;
    }
  });
}

'use strict';
class Person {
  #name = '';

  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    return this.#name = name;
  }
}

//        Static
// Permite acessar métodos/atributos sem instanciar

'use strict';

function Person() {}

Person.walk = function() {
  console.log('walking...');
}

console.log(Person.walk());
// "walking..."

'use strict'

class Person {
  static walk() {
    console.log('walking...');
  }
}

console.log(Person.walk());
//  "walking..."