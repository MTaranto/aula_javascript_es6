//          Classes
'use strict'

class Animal {
  constructor(qtdePatas) {
    this.qtdePatas = 4;
  }
}

class Cachorro extends Animal {
  constructor(morde) {
    super(4);
    this.morde=4;
  }
}

const pug = new Cachorro(false);

console.log(pug);
// Cachorro {qtdePatas: 4, morde: 4}

// class com a mesma funcionalidade do prototype
'use strict'

class Animal {
  constructor() {
    this.qtdePatas = 0;
  }

  movimentar() {}
}

class Cachorro extends Animal {
  constructor(morde) {
    super();
    this.qtdePatas = 4;
    this.morde = morde;
  }

  latir() {
    console.log('Au! au!');
  }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);
